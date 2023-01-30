function makeMenu() {
    const menu = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = "MENU";

    menu.classList.add('menuModal');
    menu.appendChild(h2);

    menu.appendChild(makeMenuItem('Crunchy', 'Fish, Rice, Flavor'));
    menu.appendChild(makeMenuItem('Saucy', 'Fish, Rice, Flavor'));
    menu.appendChild(makeMenuItem('Plain', 'Fish, Rice, Flavor'));
    menu.appendChild(makeMenuItem('Normal', 'Fish, Rice, Flavor'));
    menu.appendChild(makeMenuItem('Best', 'Fish, Rice, Flavor'));
    menu.appendChild(makeMenuItem('One', 'Fish, Rice, Flavor'));
    menu.appendChild(makeMenuItem('Veggie', 'Fish, Rice, Flavor'));
    menu.appendChild(makeMenuItem('Fried', 'Fish, Rice, Flavor'));

    return menu;
};

function makeMenuItem(name, description) {
    const item = document.createElement('div');
    const img = document.createElement('img');
    const food = document.createElement('p');
    const desc = document.createElement('p');

    item.classList.add('menuItem');
    img.src = `img/${name.toLowerCase()}.jpeg`
    food.textContent = name;
    desc.textContent = description;

    item.appendChild(img);
    item.appendChild(food);
    item.appendChild(desc);

    return item;
};

function showMenu() {
    const hero = document.querySelector('.hero');

    const navHome = document.querySelector('.home');
    const navMenu = document.querySelector('.menu');
    const navAbout = document.querySelector('.about');

    navHome.classList.remove('active');
    navMenu.classList.add('active');
    navAbout.classList.remove('active');

    while (hero.firstChild) {
        hero.removeChild(hero.firstChild);
    }

    hero.appendChild(makeMenu());

    return hero;
}

export default showMenu;