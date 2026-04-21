import { Navbar } from "../components/nav/navbar.js"
import { Hero } from '../components/hero.js';
import { Footer } from "../components/footer.js";
import { Marquee } from "../components/marquee.js";
import { Feature } from "../components/feature.js";





function mount(id, component) {
    document.getElementById(id).innerHTML = component;
}

document.addEventListener("DOMContentLoaded", () => {
    mount("navbar", Navbar());
    mount("footer", Footer());


    mount("hero", Hero());
    mount("marquee", Marquee());

    Feature().then((html) => {
        mount("feature", html);
    });

    document.getElementById("menu-bar").addEventListener("click", (e) => {
        document.getElementById("mobile-menu").classList.toggle("hidden");
    });

});