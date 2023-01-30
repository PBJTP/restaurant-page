// generate background image. assign classes. append to div.

// generate header with nav elements. assign classes. append to div

// generate footer. assign classes. append to div.

// run exported home page function to fill content

// add event listeners to nav buttons with functionality to change content

import homePage from "./home";

function header() {
    const header = document.createElement('div');
    const name = document.createElement('h1');


    header.classList.add('header');
    name.classList.add('name');
    name.textContent = "SUSHI RO";
 

    header.appendChild(name);
    header.appendChild(nav());


    return header;
}

function nav() {
    const nav = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const about = document.createElement('li');

    nav.classList.add('nav');
    home.classList.add('navButton', 'home');
    home.textContent = "HOME";
    menu.classList.add('navButton', 'menu');
    menu.textContent = "MENU";
    about.classList.add('navButton', 'about');
    about.textContent = "ABOUT";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);

    return nav;
}

function footer() {
    const footer = document.createElement('div');
    const sign = document.createElement('h3');

    footer.classList.add('footer');
    sign.textContent = "Made by PBJTP";

    footer.appendChild(sign);

    return footer;

}

function buildWebsite() {
    const content = document.getElementById('content');

    content.appendChild(header());
    content.appendChild(homePage());
    content.appendChild(footer());
}

export default buildWebsite;