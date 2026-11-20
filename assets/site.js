(function () {
  var menu = document.querySelector(".more-menu");
  if (!menu) return;

  var summary = menu.querySelector("summary");

  menu.addEventListener("pointerenter", function (event) {
    if (event.pointerType === "mouse") menu.open = true;
  });

  menu.addEventListener("pointerleave", function (event) {
    if (event.pointerType === "mouse") menu.open = false;
  });

  document.addEventListener("pointerdown", function (event) {
    if (!menu.contains(event.target)) menu.open = false;
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      summary.focus();
    }
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest(".more-menu-panel a")) menu.open = false;
  });
})();
