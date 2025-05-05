# matematicas
# 🧮 Calculadora Básica en JavaScript

Este proyecto contiene una serie de funciones básicas para realizar operaciones matemáticas elementales: **suma, resta, multiplicación y división**. Es un ejemplo simple creado como parte de un curso de fundamentos de GitHub.

## 📄 Descripción

El archivo JavaScript implementa las siguientes funciones:

- `sumar(a, b)`: Retorna la suma de dos números.
- `restar(a, b)`: Retorna la resta de dos números.
- `multiplicar(a, b)`: Retorna la multiplicación de dos números.
- `dividir(a, b)`: Retorna la división de dos números. Si el divisor es 0, lanza un error.

Todas las funciones están diseñadas para recibir dos argumentos numéricos.

## 🔧 Estructura del Código

```javascript
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}
