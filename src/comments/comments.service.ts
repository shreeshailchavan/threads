import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comments.schemas';
import { User } from 'src/users/schemas/users.schemas';

@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment.name) private commentModel:Model<Comment> ){}
  create(createCommentDto: CreateCommentDto) {
    const createComment = this.commentModel.create({
      text:createCommentDto.text,
      likes:createCommentDto.likes,
      user:createCommentDto.userId,
      parent:createCommentDto.parentId || null
    })
    return createComment.then((doc)=>{
      return doc.populate(['user','parent']);
    })
  }

  findAll() {
    return this.commentModel.find().populate(['user']).exec();
  }

  getTopLevelComments(){
    return this.commentModel.find({parent:null}).populate(['user','parent']).exec();
  }

  getCommentsByParentId(parentId:string){
    return this.commentModel.find({parent:parentId}).populate(['user','parent']).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
