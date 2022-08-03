import { ColorScheme } from "../../typings/ColorScheme";
import { Lightmode } from "@/static/ColorThemes/Lighmode";
import { Darkmode } from "@/static/ColorThemes/Darkmode";

// This function reads the active ColorScheme
// from the local storage and returns it
// to the end user
export function getColorScheme(): ColorScheme {
  if (process.env.VUE_APP_THEME_TOGGLER !== "enabled")
    return getTheme(process.env.VUE_APP_DEFAULT_THEME);

  const scheme = localStorage.getItem("color-scheme");
  if (scheme != null) {
    return getTheme(scheme);
  } else {
    localStorage.setItem("color-scheme", process.env.VUE_APP_DEFAULT_THEME);
    return getColorScheme();
  }
}

/**
 * Gets a specific theme by its name
 *
 * @param name The name of the theme
 */
const getTheme = (name: string): ColorScheme => {
  switch (name) {
    case "dark":
      return new Darkmode();
    case "light":
      return new Lightmode();
    default:
      return new Darkmode();
  }
};
