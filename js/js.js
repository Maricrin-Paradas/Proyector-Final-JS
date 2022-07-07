import { value, machin, win, lost ,nombres} from "./data.js";


const rockButton = document.getElementById("rock");
const pepperButton = document.getElementById("pepper");
const scissorButton = document.getElementById("scissor");

const resultado = document.getElementById("resultado")
const mostrarNombres = document.getElementById("nombres")
const inputNombres = document.getElementById("input")
//let selectUser = prompt("Escoge roca, papel o tijera");

const playing = (selected) => {
  const machineOptions = machin[Math.floor(Math.random() * 3)];

  if (selected === machineOptions) {
    resultado.innerHTML = "Empate";
  } else if (selected === value.rock) {
    if (machineOptions === value.pepper)
      resultado.innerHTML = (`${lost} la maquina eligio ${machineOptions}`);
    if (machineOptions === value.scissor)
      resultado.innerHTML = (`${win} la maquina eligio ${machineOptions}`);
  } else if (selected === value.pepper) {
    if (machineOptions === value.rock)
      resultado.innerHTML = (`${win} la maquina eligio ${machineOptions}`);
    if (machineOptions === value.scissor)
      resultado.innerHTML = (`${lost} la maquina eligio ${machineOptions}`);
  } else if (selected === value.scissor) {
    if (machineOptions === value.pepper)
      resultado.innerHTML = (`${win} la maquina eligio ${machineOptions}`);
    if (machineOptions === value.rock)
      resultado.innerHTML = (`${lost} la maquina eligio ${machineOptions}`);
  }
};

rockButton.onclick = () => {
  playing(value.rock)
  console.log(value.rock);
}

pepperButton.onclick = () =>{
  playing(value.pepper)
  console.log(value.pepper);
};

scissorButton.onclick = () => {
  playing(value.scissor)
  console.log(value.scissor);
};

//playing(selectUser);

inputNombres.onchange = (e) => {
  console.log(e.target.value);
  nombres.push(e.target.value);
  console.log(nombres)
}

for (let i = 0; i < nombres.length; i++){
  let list = document.createElement("li")
  list.innerHTML = nombres[i]
  mostrarNombres.appendChild(list)
}

