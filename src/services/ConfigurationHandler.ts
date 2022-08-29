export enum RestServiceType {
  mock = "mock",
  rest = "rest"
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
  /**
   * The default language of the installation
   */
  defaultLanguage: string;
}

/**
 * Gets the configurations from the .env
 */
const getConfiguration = (): Configuration => ({
  restServiceType: process.env.VUE_APP_REST_SERVICE,
  apiOrigin: process.env.VUE_APP_API_ORIGIN,
  themeTogglerEnabled: process.env.VUE_APP_THEME_TOGGLER === "enabled",
  defaultTheme: process.env.VUE_APP_DEFAULT_THEME,
  defaultLanguage: process.env.VUE_APP_DEFAULT_LANGUAGE
});

export default getConfiguration;
