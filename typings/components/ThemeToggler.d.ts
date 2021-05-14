import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ThemeTogglerData {
  togglerColor: string;
  lightIcon: IconDefinition;
  darkIcon: IconDefinition;
}

export interface ThemeTogglerMethods {
  getActiveColorScheme(): string;
  getToggleButtonFilter(theme: string): string;
  getIconColor(): string;
  changeTheme(theme: string): void;
}

