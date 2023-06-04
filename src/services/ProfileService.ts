import client from "@/services/Client";
import { useAuthStore } from '../stores/auth'

class ProfileService {
  fetch(name: string) {
    return client.get(`/users/${name}/profile`, {
      headers: {
        'Authorization': useAuthStore().token
      },
    });
  }
}

export default new ProfileService();
