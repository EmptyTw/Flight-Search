import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap";

//2-2FLIGHTSEARCH 卡片點擊  先用BTN ONCLICK 來DEMO
const flightCard = document.querySelectorAll(".flightCard");

flightCard.forEach((item) => {
  item.addEventListener("click", function () {
    const flightCardLower = item.querySelector(".flightCard-lower");
    flightCardLower.classList.toggle("flightCard-lower-active");
  });
});

const flightSearchPage = document.querySelector(".flightSearchPage");

flightSearchPage.addEventListener("click", function (e) {
  if (e.target.classList.contains("flightSearchPage")) {
    flightCard.forEach((item) => {
      const flightCardLower = item.querySelector(".flightCard-lower");
      flightCardLower.classList.remove("flightCard-lower-active");
    });
  }
});
