/**
 * Index file for demo-project
 * @function component
 * @returns {HTMLElement} - The newly created div element containing the text "Hello World!"
 */

import { createElement } from "../../assets/scripts/utils/createElement";

import { default_js } from "./scripts/default";
import "./style/default.css";

class Index {

    init() {
        default_js();
        this.header();
        this.main();
        this.footer();
    }

    header() {
        const elem = createElement("header", {
            class: "header"
        }, [
            createElement("h1", { class: "header__title" }, [], "Index"),
            createElement("p", { class: "header__subtitle" }, [], "Index file for demo-project")
        ]);
        document.body.appendChild(elem);
    }

    main() {
        const main = createElement("main", {
            class: "main"
        }, [
            createElement("p", { class: "main__text" }, [], "Index")
        ]);
        document.body.appendChild(main);
    }

    footer() {
        const footer = createElement("footer", {
            class: "footer"
        }, [
            createElement("p", { class: "footer__text" }, [], "Footer")
        ]);
        document.body.appendChild(footer);
    }
}

const app = new Index();
app.init();

console.log("App started");