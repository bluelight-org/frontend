// interface for color schemes
export interface ColorScheme {
  /**
   * Background color of the whole app
   */
  background: string;
  /**
   * General text color
   */
  textColor: string;
  /**
   * The color of an elevated card
   */
  cardColor: string;
  /**
   * The color of an input
   */
  inputColor: string;
  /**
   * The color of an input border
   */
  inputBorderColor: string;
  /**
   * The color of a button
   */
  buttonColor: string;
  /**
   * The color of the navbar
   */
  navbarColor: string;
  /**
   * The color of the theme toggler
   */
  themeTogglerColor: string;
}
