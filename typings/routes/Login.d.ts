export interface LoginData {
  usernameValue: string;
  passwordValue: string;
}

export interface LoginMethods {
  login(username: string, password: string): void;
}
