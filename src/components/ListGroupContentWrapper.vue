<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul class="list-group">
          <li
            v-for="item in items"
            :key="item.id"
            :class="['list-group-item', activeItem === item.id ? 'active' : '']"
            @click="selectListItem(item.id)"
          >
            {{ item.id }}
          </li>
        </ul>
      </div>
      <div class="col-md-9">
        <component :is="getSelectedComponent()" />
      </div>
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
      activeItem: this.$props.items[0].id
    };
  },
  methods: {
    selectListItem: function(item: string) {
      this.activeItem = item;
    },
    getSelectedComponent: function() {
      for (const item of this.$props.items)
        if (item.id === this.activeItem) return item.component;
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
</script>

<style scoped>
.list-group {
  background: none;
}
.list-group-item {
  background: none;
}
.list-group-item.active {
  background: var(--dropdownElementColor);
}
</style>
