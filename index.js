document.querySelectorAll(".menu").forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    const dropdownMenu = menu.parentElement.querySelector(".dropdown-menu");
    dropdownMenu.classList.add("visible");
    dropdownMenu.addEventListener("mouseleave", () => {
      dropdownMenu.classList.remove("visible");
    });
  });
});
