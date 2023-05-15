import colors from "./style.module.scss";
const product = { name: "bag", colors: ["light-blue", "brown", "purple"] };
const colorElementContainer = document.querySelector(".color-options");

colorElementContainer.innerHTML = product.colors
  .map((color, index) => {
    return `<div class="color ${color}"></div>`;
  })
  .join("");

const colorElements = document.querySelectorAll(".color");
colorElements.forEach((colorElement, index) => {
  colorElement.addEventListener("click", () => {
    colorElement.classList.toggle("active");
    document.body.style.setProperty("--primary", Object.values(colors)[index]);
  });
});
