
const test = require("node:test");
const assert = require("node:assert/strict");

const {
  celsiusParaFahrenheit,
  fahrenheitParaCelsius
} = require("./converter_temp");

test("Converte 25 Celsius para 77 Fahrenheit", () => {
  assert.equal(celsiusParaFahrenheit(25), 77);
});

test("Converte 100 Fahrenheit para 37.78 Celsius", () => {
  assert.ok(
    Math.abs(fahrenheitParaCelsius(100) - 37.77777777777778) < 0.000001
  );
});
