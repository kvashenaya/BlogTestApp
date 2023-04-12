/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comment.controller';
import { CommentsService } from './services/comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}