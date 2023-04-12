import { Post } from 'src/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from 'src/posts/dto/post.dto';
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: Repository<Post>);
    createPost(createPostDto: PostDto): Promise<Post>;
    getPosts(): Promise<Post[]>;
    findPostById(id: number): Promise<Post>;
    delete(id: number): Promise<void>;
    updateUser(id: number, author: string, posttitle: string, postcontent: string): Promise<void>;
}
