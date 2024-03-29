import { TranslationInterface } from "../../../typings/TranslationInterface";

/**
 * Translations for german language
 */
export const German: TranslationInterface = {
  common: {
    password: "Passwort",
    address: "Adresse",
    city: "Ort / Stadt",
    username: "Nutzername",
    retypePassword: "Passwort erneut eingeben",
    save: "Speichern"
  },
  routes: {
    dashboard: "Dashboard",
    alert: "Alarmierungen",
    login: "Anmelden",
    register: "Registrieren",
    settings: "Einstellungen"
  },
  alert: {
    missionKeyword: "Einsatzstichwort",
    stabWound: "Stichverletzung",
    addressPlaceholder: "Musterstraße 25",
    cityPlaceholder: "25746 Heide"
  },
  login: {
    failedMessage: "Anmeldung fehlgeschlagen",
    wrongCredentials: "Anmeldedaten falsch"
  },
  register: {
    registrationFailed: "Registrierung fehlgeschlagen",
    registrationSuccessful: "Registrierung erfolgreich"
  },
  settings: {
    languageSettings: "Sprache",
    profileSettings: "Profil",
    language: {
      chooseLanguage: "Sprache auswählen"
    }
  }
};
