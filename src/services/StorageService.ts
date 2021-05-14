import { ColorScheme } from "../../typings/ColorScheme";
import { Lightmode } from "@/static/ColorThemes/Lighmode";
import { Darkmode } from "@/static/ColorThemes/Darkmode";

// This function reads the active ColorScheme
// from the local storage and returns it
// to the end user
export function getColorScheme(): ColorScheme {
  const scheme = localStorage.getItem("color-scheme");
  if (scheme != null) {
    if (scheme == "dark") return new Darkmode();
    else return new Lightmode();
  } else {
    localStorage.setItem("color-scheme", "dark");
    return new Darkmode();
  }
}
