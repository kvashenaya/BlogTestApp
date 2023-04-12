/* eslint-disable prettier/prettier */
import { Body, Controller, Put, Get, Param, Delete, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostDto } from 'src/posts/dto/post.dto';
import { PostsService } from 'src/posts/services/post.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Get(':id')
  findPostsById(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findPostById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createPosts(@Body() createPostDto: PostDto) {
    return this.postService.createPost(createPostDto);
  }

  @Delete('delete/:id')
   remove(@Param('id') id: number) {
    return this.postService.delete(id);
  }

  @Put('update/:id')
  async updateUser(@Param('id') id: number, @Body() body: { author: string, posttitle: string, postcontent: string }): Promise<void> {
    await this.postService.updateUser(id, body.author, body.posttitle, body.postcontent);
  }

}


