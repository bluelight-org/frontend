import { RestServiceInterface } from "typings/RestServiceInterface";
import { MockAPIService } from "@/services/RestServices/MockAPIService";

// main API service || decide if you want to use mock or real
export class RestService implements RestServiceInterface {
  // API service
  private service: RestServiceInterface;

  constructor() {
    this.service = new MockAPIService();
  }

  // The register function calls the `/register`
  // endpoint and returns the status as boolean.
  // If an error occures it returns the error
  // message as string
  register(username: string, password: string, retypePassword: string): [boolean, string] {
    throw new Error("Method not implemented.");
  }

  // The login function calls the `/login` endpoint to 
  // login the user and save the session information
  // to the local storage.
  login(username: string, password: string): boolean {
    return this.service.login(username, password);
  }
}
