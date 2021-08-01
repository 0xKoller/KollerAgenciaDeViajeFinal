function calculateValue(destination, currency, companions, days) {
  let priceDestination = 0;
  currency = parseInt(currency);
  companions = parseInt(companions);
  days = parseInt(days);
  switch (destination) {
    case 1:
      priceDestination = 150000;
      break;
    case 2:
      priceDestination = 190000;
      break;
    case 3:
      priceDestination = 85000;
      break;
    case 4:
      priceDestination = 120000;
      break;
    case 5:
      priceDestination = 250000;
      break;
    default:
      priceDestination = 0;
      break;
  }
  switch (currency) {
    case 2:
      priceDestination =
        priceDestination / parseInt(sessionStorage.getItem("dolar"));
      break;
    default:
      break;
  }
  console.log(`moneda ${currency}`);
  console.log(`acompañanates ${companions}`);
  console.log(`dias ${days}`);
  if (companions > 0) {
    document.getElementById("total").innerHTML = Math.round(
      priceDestination * companions * days
    );
  } else {
    document.getElementById("total").innerHTML = priceDestination * days;
  }
}

//Variables
let destinationValue = 1;
let currencyValue = 1;
let companionsValue = 1;
let daysValue = 1;

//Destination
const destinationText = document.getElementById("location");
destinationText.addEventListener("click", () => {
  destinationValue = parseInt(document.getElementById("location").value);
  calculateValue(destinationValue, currencyValue, companionsValue, daysValue);
});

//Currency
const currencyText = document.getElementById("currency");
currencyText.addEventListener("click", () => {
  currencyValue = parseInt(document.getElementById("currency").value);
  calculateValue(destinationValue, currencyValue, companionsValue, daysValue);
});

//Companions
const companionsText = document.getElementById("companions");
companionsText.addEventListener("click", () => {
  companionsValue = parseInt(document.getElementById("companions").value);
  calculateValue(destinationValue, currencyValue, companionsValue, daysValue);
});

//Days
const daysText = document.getElementById("days");
daysText.addEventListener("click", () => {
  daysValue = parseInt(document.getElementById("days").value);
  calculateValue(destinationValue, currencyValue, companionsValue, daysValue);
});
calculateValue(destinationValue, currencyValue, companionsValue, daysValue);

//Filtro mediante input
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#myDIV .card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
