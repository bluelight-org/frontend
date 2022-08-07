import VueI18n, { LocaleMessageObject } from "vue-i18n";
import getConfiguration from "@/services/ConfigurationHandler";
import { German } from "@/static/Translations/German";
import { English } from "@/static/Translations/English";

const LS_LOCALE = "bluelight.locale";

export default class TranslationHandler {
  /**
   * Gets the base translation configuration
   */
  public static getTranslationConfiguration(): VueI18n {
    if (this.getCurrentLocale() === null)
      this.setLocale(getConfiguration().defaultLanguage);

    return new VueI18n({
      locale: this.getCurrentLocale() ?? getConfiguration().defaultLanguage,
      messages: {
        de: (German as unknown) as LocaleMessageObject,
        en: (English as unknown) as LocaleMessageObject
      }
    });
  }

  /**
   * Gets the current locale.
   */
  public static getCurrentLocale(): string | null {
    return localStorage.getItem(LS_LOCALE);
  }

  /**
   * Sets the current locale
   *
   * @param locale The locale value
   */
  public static setLocale(locale: string): void {
    localStorage.setItem(LS_LOCALE, locale);
  }
}
