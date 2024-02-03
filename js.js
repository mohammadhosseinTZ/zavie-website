const menuOpenEl = document.getElementById("menuOpen");
const menuCloseEL = document.getElementById("menuClose");
const menuOpenedEl = document.getElementById("menuOpened");
const header = document.querySelector("header");
const imgSectionEl = document.getElementById("imgSection");
const material_chevron = document.querySelector("#chevron");
const material_arrow = document.querySelector("#arrow");
const material_arrow_icon = document.querySelector("#arrow>span");

const articleElContainerEL = document.getElementById("articleElContainer");
const material_containerEL = document.querySelector(".material_container");
menuOpenEl.addEventListener("click", () => {
  menuOpenEl.classList.add("hidden");
  menuOpenEl.classList.remove("flex");
  menuCloseEL.classList.remove("hidden");
  menuCloseEL.classList.add("flex");
  menuOpenedEl.classList.remove("hidden");
  menuOpenedEl.classList.add("flex");
});
menuCloseEL.addEventListener("click", () => {
  menuOpenEl.classList.add("flex");
  menuOpenEl.classList.remove("hidden");
  menuCloseEL.classList.remove("flex");
  menuCloseEL.classList.add("hidden");
  menuOpenedEl.classList.add("hidden");
  menuOpenedEl.classList.remove("flex");
});

imgSectionEl.addEventListener("pointermove", (e) => {
  imgSectionEl.style.backgroundPositionX = e.offsetX / 100 + "px";
  imgSectionEl.style.backgroundPositionY = e.offsetY / 100 + "px";
  console.log(e.offsetX + "%");
});
// article icons event
articleElContainerEL.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("article")) {
    const clicked = e.target;
    clicked
      .querySelector(
        "div:nth-last-of-type(1)>div:nth-last-of-type(1)>div>div:nth-of-type(1)"
      )
      .classList.add("hidden");
    clicked
      .querySelector(
        "div:nth-last-of-type(1)>div:nth-last-of-type(1)>div>div:nth-of-type(2)"
      )
      .classList.remove("hidden");
  }
});
articleElContainerEL.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("article")) {
    const clicked = e.target;
    setTimeout(() => {
      clicked
        .querySelector(
          "div:nth-last-of-type(1)>div:nth-last-of-type(1)>div>div:nth-of-type(1)"
        )
        .classList.remove("hidden");
      clicked
        .querySelector(
          "div:nth-last-of-type(1)>div:nth-last-of-type(1)>div>div:nth-of-type(2)"
        )
        .classList.add("hidden");
    }, 900);
  }
});
