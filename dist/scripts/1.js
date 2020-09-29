const images = document.querySelectorAll(".img-gallery");
const imageLight = document.querySelector(".add-image");
const containerLight = document.querySelector(".image-light");
const closeLight = document.querySelector(".close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    showImage(image.getAttribute("src"));
  });
});

containerLight.addEventListener("click", (e) => {
  if (e.target !== imageLight) {
    containerLight.classList.toggle("show");
    imageLight.classList.toggle("show-image");
    hamburguer.style.opacity = "1";
  }
})

const showImage = (image) => {
  imageLight.src = image;
  containerLight.classList.toggle("show");
  imageLight.classList.toggle("show-image");
  hamburguer.style.opacity = "0";
};
