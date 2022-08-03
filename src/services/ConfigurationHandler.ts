export enum RestServiceType {
  mock,
  rest
}

export interface Configuration {
  /**
   * The type of the rest theme
   */
  restServiceType: RestServiceType;
  /**
   * The API origin
   */
  apiOrigin: string;
  /**
   * If the theme toggler is enabled
   */
  themeTogglerEnabled: boolean;
  /**
   * The default theme
   */
  defaultTheme: string;
}

/**
 * Gets the configurations from the .env
 */
const getConfiguration = (): Configuration => ({
  restServiceType:
    process.env.VUE_APP_REST_SERVICE === "mock"
      ? RestServiceType.mock
      : RestServiceType.rest,
  apiOrigin: process.env.VUE_APP_API_ORIGIN,
  themeTogglerEnabled: process.env.VUE_APP_THEME_TOGGLER === "enabled",
  defaultTheme: process.env.VUE_APP_DEFAULT_THEME
});

export default getConfiguration;
