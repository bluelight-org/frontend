/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */

interface NavbarItem {
    /**
     * The ID of the item
     */
    id: string;
    /**
     * The route of the item
     */
    route: string;
}

export interface NavbarData {
    /**
     * All items of the navbar
     */
    navbarItems: NavbarItem[];
}

export interface NavbarMethods {
}

export interface NavbarProps {
    /**
     * The current active navbar element
     */
    active: string;
}
