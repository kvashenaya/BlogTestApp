import { PostDto } from 'src/posts/dto/post.dto';
import { PostsService } from 'src/posts/services/post.service';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    getPosts(): Promise<import("../../typeorm").Post[]>;
    findPostsById(id: number): Promise<import("../../typeorm").Post>;
    createPosts(createPostDto: PostDto): Promise<import("../../typeorm").Post>;
    remove(id: number): Promise<void>;
    updateUser(id: number, body: {
        author: string;
        posttitle: string;
        postcontent: string;
    }): Promise<void>;
}
