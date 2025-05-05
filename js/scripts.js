/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 
/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', () => {

    // Activer le scrollspy Bootstrap sur l'élément de navigation principal
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse de la navbar responsive lorsque le bouton de bascule est visible
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Carousel des avis
    const avis = document.querySelectorAll(".avis");
    let index = 0;

    function afficherAvis() {
        avis.forEach((avisItem, i) => {
            avisItem.classList.remove("active");
            if (i === index) {
                avisItem.classList.add("active");
            }
        });

        index = (index + 1) % avis.length;
    }

    afficherAvis(); // Affiche le premier avis immédiatement
    setInterval(afficherAvis, 3000); // Change tous les 3 secondes

});