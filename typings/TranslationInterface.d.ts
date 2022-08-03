export interface TranslationInterface {
  common: {
    password: string;
    address: string;
    city: string;
    username: string;
    retypePassword: string;
  };
  routes: {
    dashboard: string;
    alert: string;
    login: string;
    register: string;
  };
  alert: {
    missionKeyword: string;
    stabWound: string;
  };
}
