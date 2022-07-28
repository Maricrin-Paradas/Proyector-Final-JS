import { value, machin, win, lost, nombres } from "./data.js";

const rockButton = document.getElementById("rock");
const pepperButton = document.getElementById("pepper");
const scissorButton = document.getElementById("scissor");

const resultado = document.getElementById("resultado");
const mostrarNombres = document.getElementById("nombres");
const inputNombres = document.getElementById("input");



const playing = (selected) => {
  const machineOptions = machin[Math.floor(Math.random() * 3)];

  if (selected === machineOptions) {
    resultado.innerHTML =
    Swal.fire({
      icon: "error",
      title: "Empate",
    });
  }
  else if (selected === value.rock) {
    if (machineOptions === value.pepper)
      resultado.innerHTML = Swal.fire({
        icon: "error",
        title: `${lost} la maquina eligio ${machineOptions}`,
      });

    if (machineOptions === value.scissor)
      resultado.innerHTML = Swal.fire({
        icon: "error",
        title: `${win} la maquina eligio ${machineOptions}`,
      });
  }
  else if (selected === value.pepper) {
    if (machineOptions === value.rock)
      resultado.innerHTML = Swal.fire({
        icon: "error",
        title: `${win} la maquina eligio ${machineOptions}`,
      });
    if (machineOptions === value.scissor)
      resultado.innerHTML = Swal.fire({
        icon: "error",
        title: `${lost} la maquina eligio ${machineOptions}`,
      });
  }
  else if (selected === value.scissor) {
    if (machineOptions === value.pepper)
      resultado.innerHTML = Swal.fire({
        icon: "error",
        title: `${win} la maquina eligio ${machineOptions}`,
      });
    if (machineOptions === value.rock)
      resultado.innerHTML = Swal.fire({
        icon: "error",
        title: `${lost} la maquina eligio ${machineOptions}`,
      });
  }
};

rockButton.onclick = () => {
  playing(value.rock);
  console.log(value.rock);
};

pepperButton.onclick = () => {
  playing(value.pepper);
  console.log(value.pepper);
};

scissorButton.onclick = () => {
  playing(value.scissor);
  console.log(value.scissor);
};


window.onload = () => {
  let result = JSON.parse(localStorage.getItem("nombres"));
  mostrarNombres.innerHTML = "";

  for (let i = 0; i < result.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = result[i].name;
    mostrarNombres.appendChild(list);
  }
};

inputNombres.onchange = (e) => {
  console.log(e.target.value);
  nombres.push({ name: e.target.value });
  localStorage.setItem("nombres", JSON.stringify(nombres));
  let result = JSON.parse(localStorage.getItem("nombres"));
  mostrarNombres.innerHTML = "";

  for (let i = 0; i < result.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = result[i].name;
    mostrarNombres.appendChild(list);
  }
};
