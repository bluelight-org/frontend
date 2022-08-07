// eslint-disable-next-line @typescript-eslint/no-var-requires
const prompt = require("prompt-sync")({ sigint: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

function generateVueTemplate(componentName, typingDir) {
  return `<template></template>

<script lang="ts">
import Vue from "vue";
import {
  ${componentName}Data,
  ${componentName}Methods
} from "typings/${typingDir}/${componentName}";
import { DefaultComputed } from "vue/types/options";

export default Vue.extend<
  ${componentName}Data,
  ${componentName}Methods,
  DefaultComputed
>({
  name: "${componentName}",
  data() {
    return {};
  },
  methods: {}
});
</script>

<style scoped></style>`;
}

function generateTypingTemplate(componentName) {
  return `/* eslint-disable */
export interface ${componentName}Data {}

export interface ${componentName}Methods {}
  `;
}

let componentName = prompt("What should be the name of your component?");
let componentPath = prompt("Where should your component be located at?");
const vueDir = `${process.cwd()}/src/${componentPath}`;
const vuePath = `${vueDir}/${componentName}.vue`;
const typingDir = `${process.cwd()}/typings/${componentPath}`;
const typingPath = `${typingDir}/${componentName}.d.ts`;
if (!fs.existsSync(vueDir)) fs.mkdirSync(vueDir, { recursive: true });
if (!fs.existsSync(typingDir)) fs.mkdirSync(typingDir, { recursive: true });
fs.writeFileSync(vuePath, generateVueTemplate(componentName, componentPath));
fs.writeFileSync(typingPath, generateTypingTemplate(componentName));
console.log(`Successfully created component ${componentName}`);
