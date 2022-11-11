document.querySelectorAll(".dropdown-menu").forEach((menu) => {
  menu.addEventListener("mouseover", toggleDropdown);
});

document
  .querySelector("#login-button")
  .addEventListener("mouseover", toggleDropdown);

function toggleDropdown(e) {
  const el = e.target.parentElement.querySelector(".dropdown-container");
  el.classList.add("active");
  el.addEventListener("mouseleave", () => el.classList.remove("active"));
  e.target.parentElement.addEventListener("mouseleave", () =>
    el.classList.remove("active")
  );
}
