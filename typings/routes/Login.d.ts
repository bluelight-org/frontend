export interface LoginData {
  cardColor: string;
  inputColor: string;
  inputBorderColor: string;
  buttonColor: string;
  textColor: string;

  usernameValue: string;
  passwordValue: string;
}

export interface LoginMethods {
  login(username: string, password: string): void;
}
