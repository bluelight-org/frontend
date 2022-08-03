/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ThemeTogglerData {
  /**
   * The sun icon
   */
  faSun;
  /**
   * The moon icon
   */
  faMoon;
}

export interface ThemeTogglerMethods {
  /**
   * Gets the active color scheme
   */
  getActiveColorScheme(): string;

  /**
   * Calculates CSS brightness effects for current color scheme
   *
   * @param theme The theme that should be checked
   */
  getToggleButtonFilter(theme: string): string;

  /**
   * Gets the color of the icon
   */
  getIconColor(): string;

  /**
   * Changes the current theme
   *
   * @param theme The new theme.
   */
  changeTheme(theme: string): void;
}

