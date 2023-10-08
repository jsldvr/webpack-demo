/**
 * This is the controller for the header
 * 
 * @class Header
 */

import _e from "./func/createElement";

export class Header {
    /**
     * Creates an instance of Header.
     * 
     * @memberof Header
     */
    constructor() {
        console.log("Header");
        this.init();
    }

    init() {
        console.log("Header.init");
        return this.html();
    }

    html() {
        return _e('header', [], [_e('h1', [], [], 'Header')]);
    }
}