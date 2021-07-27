function conversion(currency, cantidad) {
  //Use la tasa de google, ojala estuviera eso el peso :(
  //No use API todavia para evitar adelantar :D
  let ratio = 0;
  switch (currency) {
    case "USD":
      ratio = 1 / parseInt(sessionStorage.getItem("dolar"));
      break;
    case "BTC":
      ratio = 1 / parseInt(sessionStorage.getItem("btc"));
      break;
    default:
      ratio = 1;
      break;
  }
  return Math.round(cantidad * ratio);
}

function mostrar(nombre, dias, gastototal, personas, destino, moneda) {
  alert(
    "👋🏼 Hola " +
      nombre +
      " gracias por usar nuestro cotizador online a continuacion veras toda la informacion de tu destino seleccionado.\n✈ Destino: " +
      destino +
      "\n📆 Dias :" +
      dias +
      "\n👤 Acompañantes: " +
      personas +
      "\n💵 Total: $" +
      moneda +
      " " +
      gastototal
  );
}

//Filtro mediante input
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#myDIV .card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//Cotizacion especifica
function cotizar(destino) {
  const nombre = prompt("✍🏼 Ingrese su nombre:");
  if (nombre !== "" && nombre !== null && nombre !== " ") {
    const divisas = ["USD", "EUR", "BTC", "ARS"];
    let moneda = prompt(
      "💵 Ingrese la moneda con la que desea pagar" + "\nUSD, EUR, BTC o ARS "
    );
    moneda = moneda.toUpperCase();
    while (!divisas.includes(moneda)) {
      moneda = prompt(
        "💵 Ingrese UNA moneda VALIDA con la que desea pagar" +
          "\nUSD, EUR, BTC o ARS"
      );
      moneda = moneda.toUpperCase();
    }
    let personas = prompt(
      "👪 Ingrese la cantidad de personas con las que viajaria"
    );

    while (personas < 1) {
      personas = prompt(
        "👪 Ingrese UNA CANTIDAD de personas VALIDA con las que viajaria"
      );
    }
    let dias = prompt("📆 Ingrese la cantidad de dias que va a viajar");
    while (dias < 1) {
      dias = prompt("📆 Ingrese UNA CANTIDAD de dias VALIDA que va a viajar");
    }
    switch (destino) {
      case "Africa":
        cantidad = 5000;
        break;
      case "Polonia y Rusia":
        cantidad = 3000;
        break;
      case "India":
        cantidad = 6000;
        break;
      case "New York":
        cantidad = 2500;
        break;
      case "Grecia":
        cantidad = 8000;
        break;
    }
    const valor = conversion(moneda, cantidad);
    const gastototal = conversion(moneda, cantidad) * personas;
    mostrar(nombre, dias, gastototal, personas, destino, moneda);
  }
}

let botonNY = document.getElementById("cotizarNY");
botonNY.addEventListener("click", () => cotizar("New York"));
let botonAfr = document.getElementById("cotizarAfrica");
botonAfr.addEventListener("click", () => cotizar("Africa"));
let botonInd = document.getElementById("cotizarIndia");
botonInd.addEventListener("click", () => cotizar("India"));
let botonGrec = document.getElementById("cotizarGrecia");
botonGrec.addEventListener("click", () => cotizar("Grecia"));
let botonPR = document.getElementById("cotizarPolRu");
botonPR.addEventListener("click", () => cotizar("Polonia y Rusia"));
