/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */

interface NavbarItem {
    /**
     * The ID of the item
     */
    id: string;
    /**
     * The name of the item
     */
    name: string;
    /**
     * The route of the item
     */
    route: string;
}

export interface NavbarData {
    /**
     * The color of the navbar
     */
    navbarColor: string;
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
