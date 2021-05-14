import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun, faUserSecret } from "@fortawesome/free-solid-svg-icons";

// This function adds all
// used icons to the font-awesome
// library, for later usage
export function initIcons(): void {
  library.add(faMoon);
  library.add(faSun);
}
