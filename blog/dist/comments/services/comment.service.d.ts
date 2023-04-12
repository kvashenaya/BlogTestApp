import { Comment } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CommentDto } from 'src/comments/dto/comment.dto';
export declare class CommentsService {
    private readonly commRepository;
    constructor(commRepository: Repository<Comment>);
    createComment(createCommentDto: CommentDto): Promise<Comment>;
    getCommById(id: number): Promise<Comment>;
    findAllComm(): Promise<Comment[]>;
    findCommByArticle(id: number): Promise<Comment[]>;
}
