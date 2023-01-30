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
    tossimg.src = "img/toss.jpeg";
    rollimg.src = "img/roll.jpeg";

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
    while (hero.firstChild) {
        hero.removeChild(hero.firstChild);
    }

    hero.appendChild(aboutPage());
}

export default showAbout;