/* eslint-disable */

import { VueConstructor } from "vue";

export interface ListGroupContentWrapperData {
  /**
   * The active list item
   */
  activeItem: string|null;
}

export interface ListGroupContentWrapperMethods {
  /**
   * Selects a new list group item
   *
   * @param item The item that should be selected
   */
  selectListItem(item: string): void;

  /**
   * Gets the component for the selected element
   */
  getSelectedComponent(): VueConstructor;
}

export interface ListGroupContentWrapperProps {
  /**
   * All items that should be displayed in the content wrapper
   */
  items: ListGroupContentWrapperListItem[];
  /**
   * Whether the component uses window.location.search parameters
   * to indicate which tab should be used.
   */
  locationSearchEnabled?: boolean
}

export interface ListGroupContentWrapperListItem {
  /**
   * The ID of the list item
   */
  id: string;
  /**
   * The component that should be displayed
   */
  component: VueConstructor;
  /**
   * The string that is used as search id
   */
  searchId?: string;
}
