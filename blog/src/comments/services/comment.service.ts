/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment, Post } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CommentDto } from 'src/comments/dto/comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private readonly commRepository: Repository<Comment>,
  ) {}

  createComment(createCommentDto: CommentDto) {
    const newComment = this.commRepository.create(createCommentDto);
    return this.commRepository.save(newComment);
  }

  getCommById(id: number) {
    return this.commRepository.findOne({where: {id}});
  }

   findAllComm() {
    return this.commRepository.find();
  }

  // async getAllCommByPost(articleId: number): Promise<Comment[]> {
  //   return await this.commRepository.find({ where: { article: articleId } });
  // }

  // createPost(createPostDto: CommentDto) {
  //   const newPost = this.commRepository.create(createPostDto);
  //   return this.commRepository.save(newPost);
  // }

  // getPosts() {
  //   return this.commRepository.find();
  // }

  // findPostById(id: number) {
  //   return this.commRepository.findOne({where: {id}});
  // }

  async findCommByArticle(id: number): Promise<Comment[]> {
    return await this.commRepository.find({ where: { id } });
  }

  // async delete(id: number){
  //   const user = await this.commRepository.findOne({where: {id}});
  //   if (!user) {
  //     throw new Error('User not found');
  //   }
  //   await this.commRepository.remove(user);
  // }


}