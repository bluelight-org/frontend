import {ColorScheme} from '@/interfaces/ColorScheme';
import {Lightmode} from "@/static/ColorThemes/Lighmode";
import {Darkmode} from "@/static/ColorThemes/Darkmode";

export class CookieService {

    // returns instance of color scheme interface by cookie
    getColorScheme(): ColorScheme {
        let scheme = this.getCookie('color-scheme');
        if (scheme != '') {
            if (scheme == 'dark') {
                return <ColorScheme>new Darkmode();
            } else {
                return <ColorScheme>new Lightmode();
            }
        } else {
            this.setCookie('color-scheme', 'dark', 365);
            return <ColorScheme>new Darkmode();
        }
    }


    // queries cookie by name
    private getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;
        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }

    // sets cookie
    private setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = `expires=${d.toUTCString()}`;
        let cpath:string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
}
