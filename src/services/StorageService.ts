import { ColorScheme } from "../../typings/ColorScheme";
import { Lightmode } from "@/static/ColorThemes/Lighmode";
import { Darkmode } from "@/static/ColorThemes/Darkmode";
import getConfiguration from "@/services/ConfigurationHandler";

/**
 * Gets the current color theme
 */
export function getColorScheme(): ColorScheme {
  if (process.env.VUE_APP_THEME_TOGGLER !== "enabled")
    return getTheme(getConfiguration().defaultTheme);

  const scheme = localStorage.getItem("color-scheme");
  if (scheme != null) {
    return getTheme(scheme);
  } else {
    localStorage.setItem("color-scheme", getConfiguration().defaultTheme);
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
