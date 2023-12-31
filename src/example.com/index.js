/**
 * Index file for demo-project
 * @function component
 * @returns {HTMLElement} - The newly created div element containing the text "Hello World!"
 */

import { Global } from "../../assets/scripts/classGlobal";
import { _e } from "../../assets/scripts/utils/createElement";

import { Custom } from "./scripts/custom";


class Index {
    constructor(global = new Global, custom = new Custom) {
        console.log("Index");
        this.global = global;
        this.custom = custom;
        this.init();
    }

    init() {
        console.log("Index.init");
        this.header();
        this.main();
        this.footer();
    }

    header() {
        console.log("Index.header");
        const header = _e("header", {
            class: "header"
        }, [
            _e("h1", { class: "header__title" }, [], "Index"),
            _e("p", { class: "header__subtitle" }, [], "Index file for demo-project")
        ]);
        document.body.appendChild(header);
    }

    main() {
        console.log("Index.main");
        const main = _e("main", {
            class: "main"
        }, [
            _e("p", { class: "main__text" }, [], "Index")
        ]);
        document.body.appendChild(main);
    }

    footer() {
        console.log("Index.footer");
        const footer = _e("footer", {
            class: "footer"
        }, [
            _e("p", { class: "footer__text" }, [], "Footer")
        ]);
        document.body.appendChild(footer);
    }
}

// new Index(new Global, new Custom);
new Index;