import { RestServiceInterface } from "typings/RestServiceInterface";
import { MockAPIService } from "@/services/RestServices/MockAPIService";
import { RestAPIService } from "@/services/RestServices/RestAPIService";

// main API service || decide if you want to use mock or real
export class RestService implements RestServiceInterface {
  // API service
  private service: RestServiceInterface;

  constructor() {
    this.service =
      process.env.NODE_ENV === "development"
        ? new MockAPIService()
        : new RestAPIService();
  }

  // The register function calls the `/register`
  // endpoint and returns the status as boolean.
  // If an error occurs it returns the error
  // message as string
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    return await this.service.register(username, password, retypePassword);
  }

  // The login function calls the `/login` endpoint to
  // login the user and save the session information
  // to the local storage.
  async login(username: string, password: string): Promise<boolean> {
    return await this.service.login(username, password);
  }
}
