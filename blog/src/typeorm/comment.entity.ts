/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'comm_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  author: string;
  
  @Column({
    nullable: false,
    default: 'Comment',
  })
  commentcontent: string;
  
  @Column({
    nullable: false,
    default: '',
  })
  postID: string;
  
  

  

  // @ManyToOne(() => Post, (post) => post.comments)
  // post: Post;

}
