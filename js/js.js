const pepper = "papel"
const rock = "roca"
const scissor = "tijera"
const machin = ["papel", "roca", "tijera"]
const win = "Ganaste"
const lost = "Perdiste"


let selectUser = prompt("Escoge piedra, papel o tijera")

const playing=(selected) => {
  const machineOptions = machin[ Math.floor(Math.random() * 3)]

  if (selected === machineOptions) {
    alert("Empate");
  } else if (selected === rock) {
    if (machineOptions === pepper) alert(`${lost} la maquina eligio ${machineOptions}`);
    if (machineOptions === scissor) alert(`${win} la maquina eligio ${machineOptions}`);

  } else if (selected === pepper) {
    if (machineOptions === rock) alert(`${win} la maquina eligio ${machineOptions}`);
    if (machineOptions === scissor) alert(`${lost} la maquina eligio ${machineOptions}`);

  } else if (selected === scissor) {
    if (machineOptions === pepper) alert(`${win} la maquina eligio ${machineOptions}`);
    if (machineOptions === rock) alert(`${lost} la maquina eligio ${machineOptions}`);
  }
}

playing(selectUser);

