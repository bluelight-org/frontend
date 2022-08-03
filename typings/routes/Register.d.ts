export interface RegisterData {
  usernameValue: string;
  passwordValue: string;
  passwordRetypeValue: string;
}

export interface RegisterMethods {
  register(username: string, password: string, retypePassword: string): void;
}
