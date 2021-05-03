// Interface for REST services
export interface RestServiceInterface {
  login(username: string, password: string): boolean;
  register(username: string, password: string, retypePassword: string): [boolean, string];
}
