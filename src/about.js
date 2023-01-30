function aboutPage() {
    const modal = document.createElement('div');
    const torch = document.createElement('p');
    const toss = document.createElement('p');
    const roll = document.createElement('p');
    const torchimg = document.createElement('img');
    const tossimg = document.createElement('img');
    const rollimg = document.createElement('img');

    modal.classList.add('aboutModal');
    torchimg.src = "img/torch.jpeg";
    tossimg.src = "img/tossing.jpeg";
    rollimg.src = "img/rolling.jpeg";
    torch.textContent = "We make really good sushi and sometimes torch it!";
    toss.textContent = "We also toss it around to make sure it is fit for consumption!";
    roll.textContent = "But at the end of the day, all our sushi is handmade deliciously for you!";

    modal.appendChild(torch);
    modal.appendChild(torchimg);
    modal.appendChild(tossimg);
    modal.appendChild(toss);
    modal.appendChild(roll);
    modal.appendChild(rollimg);

    return modal;
};

function showAbout() {
    const hero = document.querySelector('.hero');

    const navHome = document.querySelector('.home');
    const navMenu = document.querySelector('.menu');
    const navAbout = document.querySelector('.about');

    navHome.classList.remove('active');
    navMenu.classList.remove('active');
    navAbout.classList.add('active');

    while (hero.firstChild) {
        hero.removeChild(hero.firstChild);
    }

    hero.appendChild(aboutPage());
}

export default showAbout;