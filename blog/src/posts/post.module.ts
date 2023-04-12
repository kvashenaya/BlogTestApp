/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostsController } from './controllers/post.controller';
import { PostsService } from './services/post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}