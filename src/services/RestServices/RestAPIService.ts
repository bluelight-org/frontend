import { RestServiceInterface } from "../../../typings/RestServiceInterface";

// wrapper for the API
export class RestAPIService implements RestServiceInterface {

  async login(username: string, password: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    throw new Error("Method not implemented.");
  }
}
