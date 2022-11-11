document.querySelectorAll(".dropdown-menu").forEach((menu) => {
  menu.addEventListener("mouseover", toggleDropdown);
});

document
  .querySelector("#login-button")
  .addEventListener("mouseover", toggleDropdown);

function toggleDropdown(e) {
  const menuBtn = e.target;
  const dropdownContainer = menuBtn.parentElement.querySelector(
    ".dropdown-container"
  );

  menuBtn.classList.add("active");
  dropdownContainer.classList.add("active");

  menuBtn.parentElement.addEventListener("mouseleave", () => {
    dropdownContainer.classList.remove("active");
    menuBtn.classList.remove("active");
  });

  dropdownContainer.addEventListener("mouseleave", () =>
    dropdownContainer.classList.remove("active")
  );
}
