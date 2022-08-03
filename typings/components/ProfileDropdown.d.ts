export interface DropdownItem {
  /**
   * The ID that is used for translation
   */
  id: string;
  /**
   * The route that should be navigated to
   */
  route: string;
}

export interface ProfileDropdownData {
  /**
   * The color of the dropdown menu
   */
  dropdownColor: string;
  /**
   * The color of a dropdown element
   */
  dropdownElementColor: string;
  /**
   * The default text color
   */
  textColor: string;
  /**
   * All items of the dropdown
   */
  dropdownItems: DropdownItem[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileDropdownMethods {}
