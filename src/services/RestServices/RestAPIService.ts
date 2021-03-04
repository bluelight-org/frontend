import { RestServiceInterface } from "../../../typings/RestServiceInterface";

// wrapper for the API
export class RestAPIService implements RestServiceInterface {
  BASE_URL = "<url>";

  // login function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(username: string, password: string): boolean {
    return false;
  }
}
