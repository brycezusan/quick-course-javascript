// Funciones

function suma(a  , b){
  return a + b
}

const sumar = (a , b)=> a + b

console.log(suma(50 ,10))
console.log(suma(40 ,50))

// funciones callback
// función que pasa a otra funcion como argumento


const adicion = ( a , b , cb)=>{
  const r = a + b

  callback(r)
}

function callback(result){
  console.log('resultado de la funcion ', result)
}

adicion(70 , 80 ,callback )
