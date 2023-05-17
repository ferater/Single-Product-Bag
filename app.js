// import colors & sytles from scss
import colors from "./style.module.scss";
//***** product info & colors **********/
//define product
const product = {
  name: "bag",
  colors: ["light-blue", "purple", "brown"],
};
//define default color
const defaultColor = "light-blue";

//select product image
const productImage = document.querySelector(".product-image img");

//select color elements container
const colorElementContainer = document.querySelector(".color-options");

//set color elements container html content
colorElementContainer.innerHTML = product.colors
  .map((color, index) => {
    return `<div class="color ${
      index == product.colors.indexOf(defaultColor) ? "active" : ""
    }" style="background-color:${Object.values(colors)[index]};"></div>`;
  })
  .join("");

//select  color elements
const colorSelectElements = document.querySelectorAll(".color");
//set color for product image background
colorSelectElements.forEach((colorElement, index) => {
  //set default color as primary
  document.body.style.setProperty(
    "--primary",
    Object.values(colors)[product.colors.indexOf(defaultColor)]
  );
  //set default product image by default color
  productImage.src = `assets/img/women_bag_${defaultColor}.png`;

  colorElement.addEventListener("click", () => {
    //stop if color active
    if (colorElement.classList.contains("active")) return;

    //toggle active clas for colors
    toggleActiveClass(colorElement, index);

    //set default product image by selected color
    productImage.src = `assets/img/women_bag_${Object.keys(colors)[index]}.png`;

    //set selected color as primary
    document.body.style.setProperty("--primary", Object.values(colors)[index]);

    //add slide effect to product image
    productImage.classList.add("slide-to-left");
  });
});
//remove image slide effect when animation ends
productImage.addEventListener("animationend", (e) => {
  e.target.classList.remove("slide-to-left");
});

//toggle active class function
function toggleActiveClass(element) {
  colorSelectElements.forEach((item) => {
    if (item != element) item.classList.remove("active");
    element.classList.add("active");
  });
}
//***************************************/
//***** search box **********/
//select serch icon
const searchIcon = document.querySelector(".search-icon");
//select serch input
const searchInput = document.querySelector("input#search");
//toggle searc input open class
searchIcon.onclick = () => {
  searchInput.classList.toggle("open");
  //clear search input when closed
  if (!searchInput.classList.contains("open")) searchInput.value = "";
  //focus input when search input open
  searchInput.focus();
};
