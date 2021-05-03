import { RestServiceInterface } from "../../../typings/RestServiceInterface";

// mock service || simulates API responses
export class MockAPIService implements RestServiceInterface {
  // The login mock endpoint
  // returns a promise of True,
  // if username and password are matching
  async login(username: string, password: string): Promise<boolean> {
    return username == "root" && password == "Admin123";
  }

  // The register service returns
  // a static promise of [boolean, string]
  // without validating any data
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    return new Promise<[boolean, string]>(() => [
      false,
      username + password + retypePassword
    ]);
  }
}
