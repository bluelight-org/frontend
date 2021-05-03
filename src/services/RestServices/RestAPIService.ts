import { RestServiceInterface } from "../../../typings/RestServiceInterface";

// wrapper for the API
export class RestAPIService implements RestServiceInterface {

  login(username: string, password: string): boolean {
    throw new Error("Method not implemented.");
  }
  register(username: string, password: string, retypePassword: string): [boolean, string] {
    throw new Error("Method not implemented.");
  }
  BASE_URL = "<url>";
}
