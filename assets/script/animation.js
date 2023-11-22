const activeAnimation = () => {
    const targets = document.querySelectorAll(".animation--Target");
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    targets.forEach(target => {
        const elementTop = target.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) target.classList.add("animation--Active");
    })
}

$(document).ready(activeAnimation);
$(window).on("scroll", activeAnimation);