let value = {
  pepper: "papel",
  rock: "roca",
  scissor: "tijera",
};


const machin = ["papel", "roca", "tijera"];
const win = "Ganaste";
const lost = "Perdiste";

let personas = [];

if (localStorage.getItem("personas")) {
  personas = JSON.parse(localStorage.getItem("personas"));
} else {
  localStorage.setItem("personas", JSON.stringify(personas));
}

console.log(personas)

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

export { value, machin, win, lost, personas };