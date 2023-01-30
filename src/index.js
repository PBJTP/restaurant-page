import buildWebsite from "./fullsite";
import showHome from "./home";
import showMenu from "./menu";

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
}


eventListeners();