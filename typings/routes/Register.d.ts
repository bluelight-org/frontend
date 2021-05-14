export interface RegisterData {
  cardColor: string;
  inputColor: string;
  inputBorderColor: string;
  buttonColor: string;
  textColor: string;

  usernameValue: string;
  passwordValue: string;
  passwordRetypeValue: string;
}

export interface RegisterMethods {
  register(username: string, password: string, retypePassword: string): void;
}
