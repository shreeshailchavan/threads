import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    text:String;

    likes:number | null;

    @IsString()
    @IsNotEmpty()
    userId:string;

    parentId: null | string;




}
