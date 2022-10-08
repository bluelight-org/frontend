declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue-router" {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export const install: PluginFunction<{}>;
}

declare module "vue-resource" {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export const install: PluginFunction<{}>;
}

declare module "vue-i18n" {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export const install: PluginFunction<{}>;
}
