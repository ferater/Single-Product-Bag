import "./style.module.scss";
const productColors = [
  { name: "light-blue" },
  { name: "brown" },
  { name: "purple" },
];
const colorElementContainer = document.querySelector(".color-options");

colorElementContainer.innerHTML = productColors
  .map((color, index) => {
    return `<div class="color ${color.name}"></div>`;
  })
  .join("");

const colorElements = document.querySelectorAll(".color");
colorElements.forEach((colorElement, index) => {
  colorElement.addEventListener("click", () => {
    colorElement.classList.toggle("active");
    document.body.style.setProperty("--primary", productColors[index].name);
  });
});
