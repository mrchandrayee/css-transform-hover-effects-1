const tiles = document.querySelectorAll(".demo-tile");

tiles.forEach((tile) => {
  tile.setAttribute("tabindex", "0");
  tile.setAttribute("role", "button");
  tile.setAttribute("aria-pressed", "false");

  function togglePreview() {
    const active = tile.classList.toggle("is-active");
    tile.setAttribute("aria-pressed", String(active));
  }

  tile.addEventListener("click", togglePreview);
  tile.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      togglePreview();
    }
  });
});
