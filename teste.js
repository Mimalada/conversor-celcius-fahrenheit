
const assert = require("node:assert/strict");

const {
  celsiusParaFahrenheit,
  fahrenheitParaCelsius
} = require("./converter_temp");

// Caso de teste 1: Celsius para Fahrenheit
assert.equal(celsiusParaFahrenheit(25), 77);
console.log("Teste 1 passou: 25°C = 77°F");

// Caso de teste 2: Fahrenheit para Celsius
assert.ok(
  Math.abs(fahrenheitParaCelsius(100) - 37.77777777777778) < 0.000001
);
console.log("Teste 2 passou: 100°F = 37.78°C");

console.log("Todos os testes passaram!");
