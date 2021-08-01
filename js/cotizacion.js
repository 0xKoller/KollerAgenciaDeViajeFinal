function calculateValue(destination, currency, companions, days) {
  let priceDestination = 0;
  companions = parseInt(companions) + 1;
  days = parseInt(days);
  switch (destination) {
    case "Africa":
      priceDestination = 150000;
      break;
    case "New York":
      priceDestination = 190000;
      break;
    case "India":
      priceDestination = 85000;
      break;
    case "Grecia":
      priceDestination = 120000;
      break;
    case "Polonia y Rusia":
      priceDestination = 250000;
      break;
    default:
      break;
  }
  switch (currency) {
    case "USD":
      priceDestination =
        priceDestination / parseInt(sessionStorage.getItem("dolar"));
      break;
    default:
      break;
  }
  document.getElementById("total").innerHTML = Math.round(
    priceDestination * companions * days
  );
  //
  sessionStorage.setItem("nombre", document.getElementById("name").value);
  sessionStorage.setItem("email", document.getElementById("contact").value);
}

//Variables
let destinationValue = "Africa";
let currencyValue = "USD";
let companionsValue = 1;
let daysValue = 1;

//Destination
const destinationText = document.getElementById("location");
destinationText.addEventListener("click", () => {
  destinationValue = document.getElementById("location").value;
  sessionStorage.setItem("destino", document.getElementById("location").value);
  calculateValue(destinationValue, currencyValue, companionsValue, daysValue);
});

//Currency
const currencyText = document.getElementById("currency");
currencyText.addEventListener("click", () => {
  currencyValue = document.getElementById("currency").value;
  sessionStorage.setItem("moneda", document.getElementById("currency").value);
  calculateValue(destinationValue, currencyValue, companionsValue, daysValue);
});

//Companions
const companionsText = document.getElementById("companions");
companionsText.addEventListener("click", () => {
  companionsValue = parseInt(document.getElementById("companions").value);
  sessionStorage.setItem(
    "acompaniado",
    document.getElementById("companions").value
  );
  calculateValue(destinationValue, currencyValue, companionsValue, daysValue);
});

//Days
const daysText = document.getElementById("days");
daysText.addEventListener("click", () => {
  daysValue = parseInt(document.getElementById("days").value);
  sessionStorage.setItem("dias", document.getElementById("days").value);
  calculateValue(destinationValue, currencyValue, companionsValue, daysValue);
});

//Filtro mediante input
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#myDIV .card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
