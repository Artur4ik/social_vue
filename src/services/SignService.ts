import client from "@/services/Client";

class SignService {
  signIn(email: string, password: string): Promise<any> {
    return client.post("/sign_in", {
      data: {
        attributes: {
          email: email,
          password: password
        }
      },
    });
  }
}

export default new SignService();
