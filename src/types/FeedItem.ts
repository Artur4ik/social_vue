import type User from "./User";
import type Comment from "./Comment";

export default interface FeedItem {
  id: number,
  user: User;
  likes: Object,
  comments: Comment[],
  location: string,
  image: string,
  description?: string,
}
