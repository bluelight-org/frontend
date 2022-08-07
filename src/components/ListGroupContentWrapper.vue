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
  ListGroupContentWrapperListItem,
  ListGroupContentWrapperMethods,
  ListGroupContentWrapperProps
} from "typings/components/ListGroupContentWrapper";
import { DefaultComputed } from "vue/types/options";
import LocationFactory from "@/services/LocationFactory";
export default Vue.extend<
  ListGroupContentWrapperData,
  ListGroupContentWrapperMethods,
  DefaultComputed,
  ListGroupContentWrapperProps
>({
  name: "ListGroupContentWrapper",
  data() {
    let activeItem = this.$props.items[0].id;
    const searchId = LocationFactory.getParameterValue("tab");
    if (this.$props.locationSearchEnabled && searchId) {
      activeItem = this.$props.items.filter(
        (i: ListGroupContentWrapperListItem) => i.searchId === searchId
      )[0].id;
    }

    return {
      activeItem: activeItem
    };
  },
  methods: {
    selectListItem: function(item: string) {
      if (this.$props.locationSearchEnabled) {
        const searchId = this.$props.items.filter(
          (i: ListGroupContentWrapperListItem) => i.id === item
        )[0].searchId;
        LocationFactory.buildSearch(
          new Map<string, string>([["tab", searchId]])
        );
      }
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
    },
    locationSearchEnabled: {
      type: Boolean,
      required: false
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
