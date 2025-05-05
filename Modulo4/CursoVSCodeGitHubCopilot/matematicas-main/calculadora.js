// Este es un archivo de JavaScript que contiene funciones para sumar y restar dos números
// Definimos las funciones sumar y restar
// La función sumar toma dos argumentos y devuelve su suma

function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }

  //FONALIDAD
  // La función sumar toma dos argumentos y devuelve su suma


  // La función restar toma dos argumentos y devuelve su resta
  // La función multiplicar toma dos argumentos y devuelve su multiplicación
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
  }

  // Exportamos las funciones para que puedan ser utilizadas en otros archivos
  