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

<script setup lang="ts">
import { defineProps, defineExpose } from "vue";
import {
  ListGroupContentWrapperData,
  ListGroupContentWrapperListItem,
  ListGroupContentWrapperProps,
} from "../../typings/components/ListGroupContentWrapper";
import LocationFactory from "@/services/LocationFactory";
const props = defineProps<ListGroupContentWrapperProps>();
let activeItem = props.items[0].id;
const searchId = LocationFactory.getParameterValue("tab");
if (props.locationSearchEnabled && searchId) {
  activeItem = props.items.filter(
    (i: ListGroupContentWrapperListItem) => i.searchId === searchId
  )[0].id;
}

function selectListItem(item: string): void {
  if (props.locationSearchEnabled) {
    const searchId: string =
      props.items.filter(
        (i: ListGroupContentWrapperListItem) => i.id === item
      )[0].searchId ?? "";
    LocationFactory.buildSearch(new Map<string, string>([["tab", searchId]]));
  }
  activeItem = item;
}

function getSelectedComponent() {
  for (const item of props.items)
    if (item.id === activeItem) return item.component;
}

// Expose all component data by default
defineExpose<ListGroupContentWrapperData>({
  activeItem,
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
