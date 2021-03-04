export interface LoginData {
  cardColor: string;
  inputColor: string;
  buttonColor: string;
  textColor: string;
}

export interface LoginMethods {
  login(username: string, password: string): void;
}
