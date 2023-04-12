/* eslint-disable prettier/prettier */
import { Body, Controller, Put, Get, Param, Delete, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommentDto } from 'src/comments/dto/comment.dto';
import { CommentsService } from 'src/comments/services/comment.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commService: CommentsService) {}

  @Get('comment')
  getCommById(@Param('id', ParseIntPipe) id: number) {
      return this.commService.getCommById(id);
  }

  @Get()
  findAllComm() {
    return this.commService.findAllComm();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createComment(@Body() createPostDto: CommentDto) {
    return this.commService.createComment(createPostDto);
  }
  // @Get(':id')
  // findPostsById(@Param('id', ParseIntPipe) id: number) {
  //   return this.commService.findPostById(id);
  // }

  // @Post('create')
  // @UsePipes(ValidationPipe)
  // createPosts(@Body() createPostDto: PostDto) {
  //   return this.commService.createPost(createPostDto);
  // }

  // @Delete('delete/:id')
  // remove(@Param('id') id: number) {
  //   return this.commService.delete(id);
  // }

//   @Put(':id')
//   async updatePost(@Param() { id }: ParamsWithId, @Body() post: PostDto) {
//     return this.postService.update(id, post);
//   }
}