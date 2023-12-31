// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const { readFile } = require('node:fs/promises');

async function init () {
  console.log('**Leyendo el primer archivo...**');
  const text = await readFile('./file.txt', 'utf-8');
  console.log('primer texto:', text);

  console.log('**--> Hacer cosas mientras lee el archivo...**');

  console.log('**Leyendo el segundo archivo...**');
  const secondText = await readFile('./file2.txt', 'utf-8');
  console.log('Segundo texto:', secondText);
}

console.log('*** Antes de llamar la función');
init();
console.log('*** Despues de llamar la función');

// IIFE - Inmediatly Invoked Function Expression
// ;(
//   async () => {
//     console.log('**Leyendo el primer archivo...**')
//     const text = await readFile('./file.txt', 'utf-8')
//     console.log('primer texto:', text)

//     console.log('**--> Hacer cosas mientras lee el archivo...**')

//     console.log('**Leyendo el segundo archivo...**')
//     const secondText = await readFile('./file2.txt', 'utf-8')
//     console.log('Segundo texto:', secondText)
//   }
// )()
