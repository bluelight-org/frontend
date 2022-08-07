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
    retypePassword: "Retype password"
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
    stabWound: "Stab wound"
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
    profileSettings: "Profile"
  }
};
