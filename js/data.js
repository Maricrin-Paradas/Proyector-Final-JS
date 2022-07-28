let value = {
  pepper: "papel",
  rock: "roca",
  scissor: "tijera",
};


const machin = ["papel", "roca", "tijera"];
const win = "Ganaste";
const lost = "Perdiste";
let nombres = [];

if (localStorage.getItem("nombres")) {
  nombres = JSON.parse(localStorage.getItem("nombres"));
} else {
  localStorage.setItem("nombres", JSON.stringify(nombres));
}

export { value, machin, win, lost, nombres };