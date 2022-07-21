let value = {
  pepper: "papel",
  rock: "roca",
  scissor: "tijera",
};


const machin = ["papel", "roca", "tijera"];
const win = "Ganaste";
const lost = "Perdiste";
let nombres = [JSON.parse(localStorage.getItem("nombres"))];

export {value, machin, win, lost, nombres, };