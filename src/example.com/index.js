/**
 * Index file for demo-project
 * @function component
 * @returns {HTMLElement} - The newly created div element containing the text "Hello World!"
 */

import { createElement } from "assets/scripts/utils/createElement";
// import { createHeader } from "assets/html/header";
// import { createFooter } from "assets/html/footer";
import { site_name } from "app/constants";

import { default_js } from "./scripts/default";
import "./style/default.css";
import { site_desc } from "./config";

class Index {

    init() {
        let config_stuff = {
            site_name: site_name,
            site_desc: site_desc
        }
        console.log(config_stuff)
        // console.log(site_name)
        // default_js();
        // this.header();
        // this.main();
        // this.footer();
    }

    header() {
        const elem = createElement("header", {
            class: "header"
        }, [
            createElement("h1", { class: "header__title" }, [], "Site Title"),
            createElement("p", { class: "header__subtitle" }, [], "Description")
        ]);
        document.body.appendChild(elem);
    }

    main() {
        const main = createElement("main", {
            class: "main"
        }, []);
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
