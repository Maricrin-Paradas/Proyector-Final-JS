import {
  value, machin, win, lost, personas, rockButton, pepperButton, scissorButton, resultado, mostrarNombres,
  mostrarApellido, buttonDelete, formPeople, inputNombres, inputApellido,
} from "./data.js";


//Funcion para mostrar los nombres
const getNombres = () => {
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
}

getNombres();

//Funcionalidad de juego en caso de empate
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

  //Funcionalidad del juego en caso de escoger Rock
  else if (selected === value.rock) {
    if (machineOptions === value.pepper) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/lose.png",
      imageHeight: 300,
      title: `${lost} la maquina eligio Papel`,
    });
    if (machineOptions === value.scissor) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/trofeo.png",
      imageHeight: 300,
      title: `${win} la maquina eligio Tijera`,
    });
  }

  // Funcuonalidad de juego en caso de escoger Pepper
  else if (selected === value.pepper) {
    if (machineOptions === value.scissor) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/lose.png",
      imageHeight: 300,
      title: `${lost} la maquina eligio Tijera`,
    });
    if (machineOptions === value.rock) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/trofeo.png",
      imageHeight: 300,
      title: `${win} la maquina eligio Roca`,
    });
  }
  // Funcuonalidad de juego en caso de escoger Scissor
  else if (selected === value.scissor) {
    if (machineOptions === value.rock) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/lose.png",
      imageHeight: 300,
      title: `${lost} la maquina eligio Roca`,
    });
    if (machineOptions === value.pepper) resultado.innerHTML = "";
    Swal.fire({
      imageUrl: "img/trofeo.png",
      imageHeight: 300,
      title: `${win} la maquina eligio Papel`,
    });
  }
};

//Boton de Roca
rockButton.onclick = () => {
  playing(value.rock);
  console.log(value.rock);
};

//Boton de Papel
pepperButton.onclick = () => {
  playing(value.pepper);
  console.log(value.pepper);
};

//Boton de Tijera
scissorButton.onclick = () => {
  playing(value.scissor);
  console.log(value.scissor);
};

formPeople.addEventListener("submit", (event) => {
  event.preventDefault();
  if(inputNombres.value != "" && inputApellido.value != "" ) {
    let persona = {nombre: inputNombres.value, apellido: inputApellido.value };
    personas.push(persona);
    console.log(personas)
    localStorage.setItem("personas", JSON.stringify(personas));
    getNombres();
    inputNombres.value = ""
    inputApellido.value = ""
  }
});


//Boton para limpiar el local Storage
buttonDelete.addEventListener( "click", (event) => {
  localStorage.clear();
  getNombres();
}
)
