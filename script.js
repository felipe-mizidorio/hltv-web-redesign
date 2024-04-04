const buttons = document.querySelectorAll("[data-carousel-button]");

setInterval(() => {
  const images = document.querySelector("[data-images]");
  const activeImage = images.querySelector("[data-active]");
  let newIndex = [...images.children].indexOf(activeImage) + 1;

  if (newIndex < 0) newIndex = images.children.length - 1;
  if (newIndex >= images.children.length) newIndex = 0;

  images.children[newIndex].dataset.active = true;
  delete activeImage.dataset.active;
}, 4000);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const images = button
      .closest("[data-carousel]")
      .querySelector("[data-images]");

    const activeImage = images.querySelector("[data-active]");
    let newIndex = [...images.children].indexOf(activeImage) + offset;

    if (newIndex < 0) newIndex = images.children.length - 1;
    if (newIndex >= images.children.length) newIndex = 0;

    images.children[newIndex].dataset.active = true;
    delete activeImage.dataset.active;
  });
});
