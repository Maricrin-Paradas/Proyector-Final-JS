import { value, machin, win, lost, personas } from "./data.js";

const rockButton = document.getElementById("rock");
const pepperButton = document.getElementById("pepper");
const scissorButton = document.getElementById("scissor");

const resultado = document.getElementById("resultado");
const mostrarNombres = document.getElementById("nombres");
const mostrarApellido = document.getElementById("apellido");
const buttonSubmit = document.getElementById("buttonSubmit");
const formPeople = document.getElementById("formPeople");
const inputNombres = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");


let result = JSON.parse(localStorage.getItem("personas"));
mostrarNombres.innerHTML = "";
mostrarApellido.innerHTML = "";

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
  let list = document.createElement("li");
  let list2 = document.createElement("li");

  list.innerHTML = result[i].nombre;
  mostrarNombres.appendChild(list);

  list2.innerHTML = result[i].apellido;
  mostrarApellido.appendChild(list2);
}



const playing = (selected) => {
  const machineOptions = machin[Math.floor(Math.random() * 3)];
  if (selected === machineOptions) {
    resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/handshake.png",
      imageHeight: 300,
      title: "Empate",
    });
  }

  //Rock
  else if (selected === value.rock) {
    if (machineOptions === value.pepper) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/lose.png",
      imageHeight: 300,
      title: `${lost} la maquina eligio ${machineOptions}`,
    });
    if (machineOptions === value.scissor) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/trofeo.png",
      imageHeight: 300,
      title: `${win} la maquina eligio ${machineOptions}`,
    });
  }

  // Pepper
  else if (selected === value.pepper) {
    if (machineOptions === value.rock) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/trofeo.png",
      imageHeight: 300,
      title: `${win} la maquina eligio ${machineOptions}`,
    });
    if (machineOptions === value.scissor) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/lose.png",
      imageHeight: 300,
      title: `${lost} la maquina eligio ${machineOptions}`,
    });
  }
  //Scissor
  else if (selected === value.scissor) {
    if (machineOptions === value.pepper) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/trofeo.png",
      imageHeight: 300,
      title: `${win} la maquina eligio ${machineOptions}`,
    });
    if (machineOptions === value.rock) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/lose.png",
      imageHeight: 300,
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

formPeople.addEventListener("submit", (event) => {
  event.preventDefault();
  inputNombres.value;
  inputApellido.value;
  console.log(inputNombres.value);
  console.log(inputApellido.value);
  personas.push({ nombre: inputNombres.value, apellido: inputApellido.value });
  localStorage.setItem("nombres", JSON.stringify(personas));
});

/*inputNombres.onchange = (e) => {
  console.log(e.target.value);
  personas.push({ nombres: e.target.value });
  localStorage.setItem("nombres", JSON.stringify(nombres));
  let result = JSON.parse(localStorage.getItem("nombres"));
  mostrarNombres.innerHTML = "";

  for (let i = 0; i < result.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = result[i].name;
    mostrarNombres.appendChild(list);
  }
};*/
