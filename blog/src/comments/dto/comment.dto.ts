/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength } from "class-validator";

export class CommentDto {
   
    @IsNotEmpty()
    @MinLength(1)
    commentcontent: string;

    @IsNotEmpty()
    @MinLength(3)
    author: string;

    @IsNotEmpty()
    postID: string;
    
}