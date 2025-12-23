const carImg = document.getElementById("carImg");
const paintDots = document.querySelectorAll(".colors span[data-img]");

paintDots.forEach(dot => {
  dot.addEventListener("click", () => {
    carImg.style.opacity = "0";

    setTimeout(() => {
      carImg.src = dot.dataset.img;
      carImg.style.opacity = "1";
    }, 200);
  });
});

const specsBox = document.querySelector(".specs");


const wheelDots = document.querySelectorAll(".wheels span");

wheelDots.forEach(dot => {
  dot.addEventListener("click", () => {
    carImg.style.opacity = "0";

    setTimeout(() => {
      carImg.src = dot.dataset.wheel;
      carImg.style.opacity = "1";
    }, 200);
  });
});


