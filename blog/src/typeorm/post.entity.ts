/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';
@Entity()
export class Post {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'post_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  author: string;

  @Column({
    nullable: false,
    default: '',
  })
  posttitle: string;

  @Column({
    nullable: false,
    default: '',
  })
  postcontent: string;

  // @OneToMany(() => Comment, (comment) => comment.post)
  // comments: Comment[];
}
