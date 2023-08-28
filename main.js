import "./assets/scss/all.scss";

//2-2FLIGHTSEARCH 卡片點擊  先用BTN ONCLICK 來DEMO
const flightCard = document.querySelectorAll(".flightCard");

flightCard.forEach((item) => {
  item.addEventListener("click", function () {
    const flightCardLower = item.querySelector(".flightCard-lower");
    flightCardLower.classList.toggle("flightCard-lower-active");
  });
});
