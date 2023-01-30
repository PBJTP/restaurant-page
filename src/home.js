function homePage() {
    const modal = document.createElement('div');
    const copy = document.createElement('div');

    modal.classList.add('homeModal');
    copy.classList.add('copy');
    copy.textContent = "It's really good sushi. Super good. Divine raw fish. Grade A rice. Best fish. Do you have too many fish? Now offering discount on giving me the fish for sushi. So good. Please come and eat the sushi. Everything else is not great, honestly. The sushi though. It's good.";

    modal.appendChild(copy);

    return modal;
};

function showHome() {
    const hero = document.querySelector('.hero');
    while (hero.firstChild) {
        hero.removeChild(hero.firstChild);
    }

    hero.appendChild(homePage());

    // return hero;
}

export default showHome;