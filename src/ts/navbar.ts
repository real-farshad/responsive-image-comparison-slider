const menuIcon: HTMLElement = document.querySelector(".navbar__menu-icon");
const navigation: HTMLElement = document.querySelector(".navbar__navigation");
const navLinks = document.querySelectorAll(".navigation__link");
const menu: HTMLElement = document.querySelector(".navbar__menu");
const menuDarkBackground: HTMLElement = document.querySelector(".menu__dark-background");
const menuLightBackground: HTMLElement = document.querySelector(".menu__light-background");
const closeMenuIcon: HTMLElement = document.querySelector(".menu__close-icon");

menuIcon.addEventListener("click", openMenu);
function openMenu(): void {
    // Step by step animation by adding html classes and using css transitions
    navigation.classList.add("navbar__navigation--show");
    menu.classList.add("navbar__menu--show");

    setTimeout((): void => {
        menuDarkBackground.classList.add("menu__dark-background--fade-in");
    }, 0);

    setTimeout((): void => {
        menuLightBackground.classList.add("menu__light-background--slide-in");
    }, 100);

    setTimeout((): void => {
        closeMenuIcon.classList.add("menu__close-icon--slide-in");
    }, 200);

    let delay: number = 200;
    for (let navLink of Array.from(navLinks)) {
        setTimeout((): void => {
            navLink.classList.add("navigation__link--slide-in");
        }, delay);
        delay += 100;
    }
}

closeMenuIcon.addEventListener("click", closeMenu);
function closeMenu(): void {
    // Step by step animation by removing html classes and using css transitions
    let delay: number = 0;
    for (let navLink of Array.from(navLinks).reverse()) {
        setTimeout((): void => {
            navLink.classList.remove("navigation__link--slide-in");
        }, delay);
        delay += 100;
    }

    setTimeout((): void => {
        closeMenuIcon.classList.remove("menu__close-icon--slide-in");
    }, 100);

    setTimeout((): void => {
        menuLightBackground.classList.remove("menu__light-background--slide-in");
    }, 300);

    setTimeout((): void => {
        menuDarkBackground.classList.remove("menu__dark-background--fade-in");
    }, 300);

    setTimeout((): void => {
        navigation.classList.remove("navbar__navigation--show");
        menu.classList.remove("navbar__menu--show");
    }, 700);
}
