import {value, machin, win, lost} from './data.js'

const rockButton = document.getElementById("rock");
const pepperButton = document.getElementById("pepper");
const scissorButton = document.getElementById("scissor");

function alert() {
  let selectUser = prompt("Escoge roca, papel o tijera");
}


const playing = (selected) => {
  const machineOptions = machin[Math.floor(Math.random() * 3)];

  if (selected === machineOptions) {
    alert("Empate");
  } else if (selected === value.rock) {
    if (machineOptions === value.pepper) alert(`${lost} la maquina eligio ${machineOptions}`);
    if (machineOptions === value.scissor) alert(`${win} la maquina eligio ${machineOptions}`);

  } else if (selected === value.pepper) {
    if (machineOptions === value.rock) alert(`${win} la maquina eligio ${machineOptions}`);
    if (machineOptions === value.scissor) alert(`${lost} la maquina eligio ${machineOptions}`);

  } else if (selected === value.scissor) {
    if (machineOptions === value.pepper) alert(`${win} la maquina eligio ${machineOptions}`);
    if (machineOptions === value.rock) alert(`${lost} la maquina eligio ${machineOptions}`);
  }
};

playing(selectUser)