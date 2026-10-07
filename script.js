document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-btn");
    const navigation = document.getElementById("main-navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("show");
        });
    }


    const modal = document.getElementById("detailsModal");
    const openButton = document.querySelector("[data-open-modal]");
    const closeButton = document.querySelector("[data-close-modal]");

    if (openButton && modal) {
        openButton.addEventListener("click", function () {
            modal.showModal();
        });
    }

    if (closeButton && modal) {
        closeButton.addEventListener("click", function () {
            modal.close();
        });
    }


    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (contactForm.checkValidity()) {
                alert("Thank you! Your message has been submitted.");
                contactForm.reset();
            } else {
                contactForm.reportValidity();
            }
        });
    }

});