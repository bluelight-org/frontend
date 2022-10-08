/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */

export interface NavbarItem {
    /**
     * The ID of the item
     */
    id: string;
    /**
     * The route of the item
     */
    route: string;
}

export interface NavbarProps {
    /**
     * The current active navbar element
     */
    active: string;
}
