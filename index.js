window.onload = function() {

    const menu = document.querySelector("#menu");
    const hiddenMenu = document.querySelector("#main-menu");
    const closeBtn = document.querySelector("#main-menu i");

    menu.addEventListener("click", event => hiddenMenu.style.width = "65vw");
    closeBtn.addEventListener("click", event => hiddenMenu.style.width = "0");

    window.addEventListener("resize", event => {
        if (window.innerWidth >= 1024) {
            hiddenMenu.style.width = "100%";
        } else {
            hiddenMenu.style.width = 0;
        }
    })
};
