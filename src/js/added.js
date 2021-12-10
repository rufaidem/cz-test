const cards = document.querySelectorAll(".box");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;

    card.style.background = `radial-gradient(circle closest-corner
      at ${x}% ${y}%,
      var(--ripple-color), var(--bg-color))`;
  });

  card.addEventListener("mouseleave", (event) => {
    card.style.removeProperty("background");
  });
});
