// Mas Funciones de Javascript
// Spread Operator ... ->copia de un objeto (no mutable)

const lista = {color:'rojo',manga:'larga',radio:'pequeño'}
const listaCompleta = {...lista, peso:45, completado:true}
console.log(lista)
console.log(listaCompleta)

// Promesas
// terminación o fracaso de una operación asyncrona
// Async  - await 

Promise.resolve(10)
  .then(val => console.log(val))
  .catch(e=>  console.error(e))