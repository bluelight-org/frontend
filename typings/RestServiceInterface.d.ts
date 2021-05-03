// Interface for REST services
export interface RestServiceInterface {
  login(username: string, password: string): Promise<boolean>;
  register(username: string, password: string, retypePassword: string): Promise<[boolean, string]>;
}
