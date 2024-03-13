const menuBars = document.querySelector("#menu-bars");
const overlay = document.querySelector("#overlay");
const navItems = document.querySelectorAll(".nav");

//control navigation animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${direction1}-${index + 1}`, `slide-${direction2}-${index + 1}`);
    })
}


function toggleNav() {
    // toggle menu bars open/closed
    menuBars.classList.toggle("change");

    //togle menu active
    overlay.classList.toggle("overlay-active");
    if (overlay.classList.contains("overlay-active")) {
        // animate  in - overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

        // animate in - nav items
        navAnimation("out", "in");
    } else {
        // animate out - overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

        // animate out - nav items
        navAnimation("in", "out");
    }
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
})

