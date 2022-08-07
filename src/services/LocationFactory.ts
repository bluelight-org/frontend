/**
 * Contains important factory methods for window.location
 */
export default class LocationFactory {
  /**
   * Gets a map that contains all search parameters from the url
   */
  public static getLocationParamArray(): Map<string, string> {
    const pairs = window.location.search.substring(1).split("&");
    const map = new Map<string, string>();
    for (const i in pairs) {
      if (pairs[i] === "") continue;

      const pair = pairs[i].split("=");
      map.set(decodeURIComponent(pair[0]), decodeURIComponent(pair[1]));
    }

    return map;
  }

  /**
   * Gets the value by the parameter.
   *
   * @param parameter The parameter that should be looked up
   */
  public static getParameterValue(parameter: string): string | null {
    return this.getLocationParamArray().get(parameter) ?? null;
  }

  /**
   * Builds a search string from a map and sets
   * the new search string
   *
   * @param map The map that the string should be built from
   */
  public static buildSearch(map: Map<string, string>): void {
    let search = "";
    if (map.size === 0) return;

    for (const [key, value] of map.entries()) {
      if (search === "") search += "?";
      else search += "&";
      search += `${key}=${value}`;
    }
    window.location.search = search;
  }
}
