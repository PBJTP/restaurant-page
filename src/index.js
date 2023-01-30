import buildWebsite from "./fullsite";
import showHome from "./home";
import showMenu from "./menu";
import showAbout from "./about";

buildWebsite();
showHome();

function eventListeners() {
    const home = document.querySelector('.home');
    home.addEventListener('click', () => {
        showHome();
    });
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
        showMenu();
    });
    const about = document.querySelector('.about');
    about.addEventListener('click', () => {
        showAbout();
    });
}


eventListeners();