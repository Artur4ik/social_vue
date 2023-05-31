import client from "@/services/Client";
import { useAuthStore } from '../stores/auth'

class PostsService {
  fetchPosts() {
    return client.get("/posts", {
      headers: {
        'Authorization': useAuthStore().token
      },
    });
  }
}

export default new PostsService();
