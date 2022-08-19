let value = {
  pepper: "papel",
  rock: "roca",
  scissor: "tijera",
};


const machin = ["papel", "roca", "tijera"];
const win = "Ganaste";
const lost = "Perdiste";

const rockButton = document.getElementById("rock");
const pepperButton = document.getElementById("pepper");
const scissorButton = document.getElementById("scissor");

const resultado = document.getElementById("resultado");
const mostrarNombres = document.getElementById("nombres");
const mostrarApellido = document.getElementById("apellido");
const buttonDelete = document.getElementById("buttonDelete");
const formPeople = document.getElementById("formPeople");
const inputNombres = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");

let personas = [];

if (localStorage.getItem("personas")) {
  personas = JSON.parse(localStorage.getItem("personas"));
} else {
  localStorage.setItem("personas", JSON.stringify(personas));
}

//Fetch para mostra nombres ya cargados en usuarios.json
if (personas.length === 0) {
  window.onload = monstrarNombresFinal()
  function monstrarNombresFinal() {
    fetch("./js/usuarios.json")
      .then((promise) => promise.json())
      .then((data) => {
        console.log(data);
        personas.push(...data);
        localStorage.setItem("personas", JSON.stringify(personas));
      });
  }
}

export {
  value,
  machin,
  win,
  lost,
  personas,
  rockButton,
  pepperButton,
  scissorButton,
  resultado,
  mostrarNombres,
  mostrarApellido,
  buttonDelete,
  formPeople,
  inputNombres,
  inputApellido,
};