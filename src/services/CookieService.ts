import { ColorScheme } from "../../typings/ColorScheme";
import { Lightmode } from "@/static/ColorThemes/Lighmode";
import { Darkmode } from "@/static/ColorThemes/Darkmode";

export class CookieService {
  // returns instance of color scheme interface by cookie
  getColorScheme(): ColorScheme {
    const scheme = this.getCookie("color-scheme");
    if (scheme != "") {
      if (scheme == "dark") return new Darkmode();
      else return new Lightmode();
    } else {
      this.setCookie("color-scheme", "dark", 365);
      return new Darkmode();
    }
  }

  // queries cookie by name
  private getCookie(name: string): string {
    const ca: Array<string> = document.cookie.split(";");
    const caLen: number = ca.length;
    const cookieName = `${name}=`;
    let c: string;
    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, "");
      if (c.indexOf(cookieName) == 0)
        return c.substring(cookieName.length, c.length);
    }
    return "";
  }

  // sets cookie
  private setCookie(
    name: string,
    value: string,
    expireDays: number,
    path = ""
  ): void {
    const d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cpath: string = path ? `; path=${path}` : "";
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }
}
