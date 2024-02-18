// Manejo del DOM
// En caso de no reconocer los elementos por el scope usamos window.onload()
// asi esperamos que todo el contenido nos cargue o podemos utilizar defer
// window.onload = () => {
//   const parrafo = document.getElementById("parrafo");
//   console.log(parrafo.innerHTML);
// };
// Ingresamos al DOM por medio de Document
// getElementById ->tomamos los elementos por el id
// getElementByClassName ->tomamos los elementos por la clase
const titulo = document.getElementById("titulo");
console.log(titulo.innerText);
// manipulación del texto
titulo.innerText = "Titulo del elemento cambiado";
// titulo.innerHTML = '<h1>Agregado por Dom</h1>'

// Practica Todo List Básico

window.onload = () => {
  render();
};
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const formulario = document.getElementById("formulario");

const render = () => {
  const tareas = document.querySelector("#tareas");
  const todosTemplate = todos.map((t) => {
    return "<li>" + t + "</li>";
  });
  tareas.innerHTML = todosTemplate.join("");
  const elementos = document.querySelectorAll("#tareas li");
  elementos.forEach((el, index) => {
    el.addEventListener("click", () => {
      el.parentNode.removeChild(el);
      todos.splice(index, 1);
      todoString = JSON.stringify(todos);
      localStorage.setItem("todos", todoString);
      render();
    });
  });
};

formulario.onsubmit = (e) => {
  e.preventDefault();

  const texto = document.getElementById("texto");
  let textoContenido = texto.value;
  texto.value = "";
  todos.push(textoContenido);
  const todoString = JSON.stringify(todos);
  localStorage.setItem("todos", todoString);
  render();
  // 1ra Forma
  // for (let index = 0; index < todos.length; index++) {
  //   tareas.innerHTML +='<li>'+  todos[index]+'</li>'
  // }

  // console.log(Array.from(elementos))
};
