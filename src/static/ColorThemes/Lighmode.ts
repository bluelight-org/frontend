import { ColorScheme } from "typings/ColorScheme";

// lightmode instance of ColorScheme interface
export class Lightmode implements ColorScheme {
  background = "white";
  textColor = "black";
  cardColor = "white";
  inputColor = "white";
  inputBorderColor = "#ced4da";
  buttonColor = "#007bff";
}
