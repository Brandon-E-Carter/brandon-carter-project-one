const hamburgerMenu = {};

hamburgerMenu.init = () => {
    hamburgerMenu.menuButton = document.querySelectorAll('.hamburger');
    hamburgerMenu.mobileNav = document.querySelector('.mobile-nav');
    hamburgerMenu.buttonClick();
}

hamburgerMenu.buttonClick = () => {
    hamburgerMenu.menuButton.forEach(menu => {
        menu.addEventListener('click', function (event) {
            hamburgerMenu.menuButton[0].classList.toggle("hidden");

            hamburgerMenu.mobileNav.classList.toggle("hidden");
            hamburgerMenu.mobileNav.classList.toggle("visible");
        });
    });
}

hamburgerMenu.init();