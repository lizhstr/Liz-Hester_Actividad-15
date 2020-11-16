/*
En el archivo funciones.js, crear el arreglo const productos=["laptop","teléfono","televisor","tablet","pantalla"]
Usando funciones de arreglos, crear un nuevo arreglo que contenga los elementos del arreglo original, pero en mayúsculas.
Usando funciones de arreglos, crear un nuevo arreglo con los elementos que inicien por la letra t
Usando funciones de arreglos, contar la cantidad total de letras dentro del arreglo.
Mostrar por consola todos los resultados.
*/

const productos=["laptop","teléfono","televisor","tablet","pantalla"];

const productosMayusculas = productos.map((producto) => producto.toUpperCase());

const productosT = productos.filter((product) => product[0] === "t"); 

const productosNumLetras = productos.reduce((total, producto) => total + producto.length, 0);

console.log(productosMayusculas);

console.log(productosT);

console.log(productosNumLetras);