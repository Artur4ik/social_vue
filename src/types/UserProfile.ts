import type User from "./User";
import type Post from "./Post";

export default interface UserProfile {
  user: User;
  posts: Post[],
  posts_count: number,
  location: string,
  image: string,
  description?: string,
}
