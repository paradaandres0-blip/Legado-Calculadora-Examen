// === Calculadora ===
const display = document.getElementById("display");
let operacion = "";
let ultimoOperador = "";

document.querySelector(".buttons").addEventListener("click", (event) => {
  const target = event.target;
  const value = target.dataset.value;

  if (!target.classList.contains("btn")) return;

  if (value) {
    operacion += value;
    display.value = operacion;
  } else if (target.id === "clear") {
    operacion = "";
    display.value = "";
  } else if (target.id === "equal") {
    try {
      display.value = eval(operacion);
      operacion = display.value;
    } catch (error) {
      display.value = "Error";
      operacion = "";
    }
  }
});

// === Lista de Tareas ===
const btnAgregar = document.getElementById("agregarTarea");
const inputTarea = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
  const textoTarea = inputTarea.value.trim();
  if (textoTarea === "") return;

  const li = document.createElement("li");
  li.textContent = textoTarea;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "❌";
  btnEliminar.className = "btn-eliminar";

  const btnHecho = document.createElement("button");
  btnHecho.textContent = "✔";
  btnHecho.className = "btn-hecho";

  li.appendChild(btnHecho);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  inputTarea.value = "";
});

listaTareas.addEventListener("click", (event) => {
  const target = event.target;
  const li = target.closest("li");
  if (!li) return;

  if (target.classList.contains("btn-eliminar")) {
    li.remove();
  } else if (target.classList.contains("btn-hecho")) {
    li.classList.toggle("completada");
  }
});
