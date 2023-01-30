function homePage() {
    const home = document.createElement('div');
    const modal = document.createElement('div');
    const copy = document.createElement('div');

    home.classList.add('hero');
    modal.classList.add('modal');
    copy.classList.add('copy');
    copy.textContent = "It's really good sushi. Super good. Divine raw fish. Grade A rice. Best fish. Do you have too many fish? Now offering discount on giving me the fish for sushi. So good. Please come and eat the sushi. Everything else is not great, honestly. The sushi though. It's good.";

    modal.appendChild(copy);
    home.appendChild(modal);

    return home;
};

export default homePage;