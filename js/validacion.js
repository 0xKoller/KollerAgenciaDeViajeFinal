const form = document.getElementById("form");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
form.addEventListener("submit", (e) => {
  let flagEmail = false;
  let flagPhone = false;
  if (
    email.value.indexOf("@") == -1 ||
    email.value.toLowerCase().indexOf(".com") == -1
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Recuerda de colocar un email valido!",
    });
  } else {
    flagEmail = true;
  }
  if (
    (telefono.value.length < 10 ||
      Number.isInteger(parseInt(telefono.value)) == false) &&
    flagEmail == true
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Recuerda de colocar un telefono valido!",
    });
  } else {
    flagPhone = true;
  }
  //Estas banderas y console log se usa nomas para demostrar que se enviaron los datos
  if (flagEmail == true && flagPhone == true) {
    console.log("succesfull");
  }
  e.preventDefault();
});
