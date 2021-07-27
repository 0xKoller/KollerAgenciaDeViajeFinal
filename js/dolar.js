const apiDolarSi =
  "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
let dolar = 0;
fetch(apiDolarSi)
  .then((res) => res.json())
  .then((data) => {
    dolar = data[0]["casa"].venta;
    btc = data[5]["casa"].compra;
    sessionStorage.setItem("dolar", dolar);
    sessionStorage.setItem("btc", btc);
    $("#oficial").text(dolar);
    $("#blue").text(data[1]["casa"].venta);
  });
