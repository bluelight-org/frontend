import { RestServiceInterface } from "../../../typings/RestServiceInterface";

// mock service || simulates API responses
export class MockAPIService implements RestServiceInterface {
  // login function
  login(username: string, password: string): boolean {
    return username == "root" && password == "Admin123";
  }
}
