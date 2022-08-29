/**
 * interface for color schemes
 *
 * NOTE: If you want to have intellisense enabled, add your
 * variables also to the baseVariables.css file.
 */
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
  /**
   * The color of a dropdown menu
   */
  dropdownColor: string;
  /**
   * The color of a dropdown element
   */
  dropdownElementColor: string;
}
