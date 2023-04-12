/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength } from "class-validator";
//import { CommentDto } from './comment.dto';
export class PostDto {
    @IsNotEmpty()
    @MinLength(3)
    posttitle: string;

    @IsNotEmpty()
    @MinLength(3)
    author: string;

    @IsNotEmpty()
    postcontent: string;

    // comments: CommentDto[];
}