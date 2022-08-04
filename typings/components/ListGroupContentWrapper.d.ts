/* eslint-disable */

export interface ListGroupContentWrapperData {
  /**
   * The active list item
   */
  activeItem: string;
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
  getSelectedComponent(): HTMLElement;
}

export interface ListGroupContentWrapperProps {
  /**
   * All items that should be displayed in the content wrapper
   */
  items: ListGroupContentWrapperListItem[];
}

export interface ListGroupContentWrapperListItem {
  /**
   * The ID of the list item
   */
  id: string;
  /**
   * The component that should be displayed
   */
  component: HTMLElement;
}
