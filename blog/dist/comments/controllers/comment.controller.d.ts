import { CommentDto } from 'src/comments/dto/comment.dto';
import { CommentsService } from 'src/comments/services/comment.service';
export declare class CommentsController {
    private readonly commService;
    constructor(commService: CommentsService);
    getCommById(id: number): Promise<import("../../typeorm").Comment>;
    findAllComm(): Promise<import("../../typeorm").Comment[]>;
    createComment(createPostDto: CommentDto): Promise<import("../../typeorm").Comment>;
}
