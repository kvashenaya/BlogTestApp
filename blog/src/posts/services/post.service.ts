/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from 'src/posts/dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  createPost(createPostDto: PostDto) {
    const newPost = this.postRepository.create(createPostDto);
    return this.postRepository.save(newPost);
  }

  getPosts() {
    return this.postRepository.find();
  }

  findPostById(id: number) {
    return this.postRepository.findOne({where: {id}});
  }

  async delete(id: number){
    const user = await this.postRepository.findOne({where: {id}});
    if (!user) {
      throw new Error('User not found');
    }
    await this.postRepository.remove(user);
  }

  async updateUser(id: number, author: string, posttitle: string, postcontent: string): Promise<void> {
    const user = await this.postRepository.findOne({where: {id}});
    user.author = author;
    user.posttitle = posttitle;
    user.postcontent = postcontent;
    await this.postRepository.save(user);
  }
//   async update(id: number, data: PostDto) {
//     const post = await this.data
//       .findByIdAndUpdate(id, data)
//       .setOptions({ overwrite: true, new: true })
//       .populate('author')
//       .populate('posttitle')
//       .populate('postcontent');
//     if (!post) {
//       throw new Error();
//     }
//     return post;
//   }
}