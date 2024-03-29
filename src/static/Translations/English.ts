import { TranslationInterface } from "../../../typings/TranslationInterface";

/**
 * Translations for english language
 */
export const English: TranslationInterface = {
  common: {
    password: "Password",
    address: "Address",
    city: "City",
    username: "Username",
    retypePassword: "Retype password",
    save: "Save"
  },
  routes: {
    dashboard: "Dashboard",
    alert: "Alert",
    login: "Login",
    register: "Register",
    settings: "Settings"
  },
  alert: {
    missionKeyword: "Mission keyword",
    stabWound: "Stab wound",
    addressPlaceholder: "Downstreet 25th",
    cityPlaceholder: "1111 Testcity"
  },
  login: {
    failedMessage: "Login failed",
    wrongCredentials: "Wrong login credentials"
  },
  register: {
    registrationFailed: "Registration failed",
    registrationSuccessful: "Registration successful"
  },
  settings: {
    languageSettings: "Language",
    profileSettings: "Profile",
    language: {
      chooseLanguage: "Choose language"
    }
  }
};
