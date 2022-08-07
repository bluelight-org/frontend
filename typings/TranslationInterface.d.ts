export interface TranslationInterface {
  common: {
    password: string;
    address: string;
    city: string;
    username: string;
    retypePassword: string;
    save: string;
  };
  routes: {
    dashboard: string;
    alert: string;
    login: string;
    register: string;
    settings: string;
  };
  alert: {
    missionKeyword: string;
    stabWound: string;
  };
  login: {
    failedMessage: string;
    wrongCredentials: string;
  };
  register: {
    registrationFailed: string;
    registrationSuccessful: string;
  };
  settings: {
    languageSettings: string;
    profileSettings: string;
    language: {
      chooseLanguage: string;
    };
  };
}
