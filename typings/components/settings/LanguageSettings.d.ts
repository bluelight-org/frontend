/* eslint-disable */

export interface LanguageSettingsData {
  /**
   * All languages that can be selected
   */
  languageOptions: LanguageDefinition[];
  /**
   * Gets current locale selected
   */
  currentLocale: string;
}

export interface LanguageSettingsMethods {
  /**
   * Is executed on form submit.
   */
  onSettingsSave(e: Event): void;
}

export interface LanguageDefinition {
  /**
   * The ID that is used by VueI18n
   */
  id: string;
  /**
   * The name that is displayed in the frontend
   */
  name: string;
}
