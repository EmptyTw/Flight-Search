import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap";

//2-1 切換單程票或來回票
const roundTrip = document.querySelector(".js-round-trip");
const singleTrip = document.querySelector(".js-single-trip");

if (roundTrip && singleTrip) {
  roundTrip.addEventListener("click", () => {
    roundTrip.classList.remove("bg-opacity-25");
    singleTrip.classList.add("bg-opacity-25");
  })

  singleTrip.addEventListener("click", () => {
    singleTrip.classList.remove("bg-opacity-25");
    roundTrip.classList.add("bg-opacity-25");
  })  
}

//2-2FLIGHTSEARCH 卡片點擊  先用BTN ONCLICK 來DEMO
const flightCard = document.querySelectorAll(".flightCard");

flightCard.forEach((item) => {
  item.addEventListener("click", function () {
    const flightCardLower = item.querySelector(".flightCard-lower");
    flightCardLower.classList.toggle("flightCard-lower-active");
  });
});

const flightSearchPage = document.querySelector(".flightSearchPage");

if (flightSearchPage) {
  flightSearchPage.addEventListener("click", function (e) {
    if (e.target.classList.contains("flightSearchPage")) {
      flightCard.forEach((item) => {
        const flightCardLower = item.querySelector(".flightCard-lower");
        flightCardLower.classList.remove("flightCard-lower-active");
      });
    }
  });
}

//2-3 新增旅客資料
const addPassenger = document.querySelector(".js-add-passenger");
const formBody = document.querySelector(".formBody");
const formFooter = document.querySelector(".formFooter");
let newlyCreated;
let passengerCount=1;

if (addPassenger) {
  addPassenger.addEventListener("click", (e)=>{
    e.preventDefault();
    passengerCount+=1;
    newlyCreated = document.createElement("div");
    newlyCreated.innerHTML = `<div class="py-5"><div class="position-relative w-100 d-block pb-5"><h3 class="text-secondary py-2 px-4 fs-5 fw-bold d-inline-block w-auto fs-2 ps-0">旅客 ${passengerCount}</h3><div class="bg-primary position-absolute opacity-50 customized-highlight"></div></div>` + formBody.innerHTML + "</div>"; 
    formFooter.insertAdjacentElement("beforebegin", newlyCreated);
  })  
}