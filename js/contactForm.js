document.getElementById("email").value = sessionStorage.getItem("email");
document.getElementById("nombre").value = sessionStorage.getItem("nombre");
console.log(document.getElementById("email").text);
console.log(document.getElementById("nombre").text);
//Con este if me aseguro de que las variables fueron almacenadas en algun momento de la sesion, ya que sino se
//mostrara como null en el lugar de las variables, dando una mala UX.
if (sessionStorage.length > 4) {
  document.getElementById(
    "splash"
  ).value = `Destino al que voy a viajar: "${sessionStorage.getItem(
    "destino"
  )}" - Cantidad de personas que me van a acompañar: "${
    sessionStorage.getItem("acompaniado") - 1
  }" - Cantidad de dias que voy a viajar: "${sessionStorage.getItem(
    "dias"
  )}" - Moneda con la que voy a pagar: "${sessionStorage.getItem(
    "moneda"
  )}" \n¡Espero con muchas ansias una respuesta, saludos! 👋🏼😄`;
}
