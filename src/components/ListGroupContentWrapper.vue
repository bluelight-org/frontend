<template>
  <div class="container">
    <div class="col-md-3">
      <ul class="list-group">
        <li
          v-for="item in items"
          :key="item.id"
          :class="['list-group-item', activeItem === item.id ? 'active' : '']"
          @click="selectListItem(item.id)"
        >
          {{ $t(`settings.${item.id}`) }}
        </li>
      </ul>
    </div>
    <div class="col-md-9">
      {{ getSelectedComponent() }}
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Vue from "vue";
import {
  ListGroupContentWrapperData,
  ListGroupContentWrapperMethods,
  ListGroupContentWrapperProps
} from "typings/components/ListGroupContentWrapper";
import { DefaultComputed } from "vue/types/options";
export default Vue.extend<
  ListGroupContentWrapperData,
  ListGroupContentWrapperMethods,
  DefaultComputed,
  ListGroupContentWrapperProps
>({
  name: "ListGroupContentWrapper",
  data() {
    return {
      activeItem: ""
    };
  },
  methods: {
    selectListItem: (item: string) => {
      // @ts-ignore
      this.activeItem = item;
    },
    getSelectedComponent: () => {
      // @ts-ignore
      let activeItem = this.activeItem;
      // @ts-ignore
      for (let item of this.items)
        if (item.id === activeItem) return item.component;

      return new HTMLDivElement();
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  mounted() {
    /*if (this.activeItem === "" && this.items.length > 0)
      this.activeItem = this.items[0].id;*/
  }
});
</script>

<style scoped></style>
