import { Post } from './post.entity';
import { Comment } from './comment.entity';
declare const entities: (typeof Comment | typeof Post)[];
export { Post };
export { Comment };
export default entities;
