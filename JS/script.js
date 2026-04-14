const toggle = document.querySelector("menu-toggle");
const memo = document.querySelector("#menu");

(toggle.addEventListener("click"),
  () => {
    const expanded = toggle.getAttribute("aria-expaded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
    menu.toggle;
  });
