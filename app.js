document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cv-card");

  cards.forEach((card) => {
    const preview = card.querySelector(".cv-preview");

    if (!preview) {
      return;
    }

    const showPreview = () => {
      card.classList.add("is-active");
      preview.setAttribute("aria-hidden", "false");
    };

    const hidePreview = () => {
      card.classList.remove("is-active");
      preview.setAttribute("aria-hidden", "true");
    };

    card.addEventListener("mouseenter", showPreview);
    card.addEventListener("mouseleave", hidePreview);
    card.addEventListener("focusin", showPreview);
    card.addEventListener("focusout", (event) => {
      if (!card.contains(event.relatedTarget)) {
        hidePreview();
      }
    });
  });
});
