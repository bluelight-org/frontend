import VueI18n, { LocaleMessageObject } from "vue-i18n";
import getConfiguration from "@/services/ConfigurationHandler";
import { German } from "@/static/Translations/German";
import { English } from "@/static/Translations/English";

/**
 * Gets the base translation configuration
 */
export default function getTranslationConfiguration(): VueI18n {
  return new VueI18n({
    locale: getConfiguration().defaultLanguage,
    messages: {
      de: (German as unknown) as LocaleMessageObject,
      en: (English as unknown) as LocaleMessageObject
    }
  });
}
