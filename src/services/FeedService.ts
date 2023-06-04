import client from "@/services/Client";
import { useAuthStore } from '../stores/auth'

class FeedService {
  fetch() {
    return client.get("/feed", {
      headers: {
        'Authorization': useAuthStore().token
      },
    });
  }
}

export default new FeedService();
