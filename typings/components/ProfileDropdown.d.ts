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
   * All items of the dropdown
   */
  dropdownItems: DropdownItem[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileDropdownMethods {}
