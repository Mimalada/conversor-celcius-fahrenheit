
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusParaFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

function fahrenheitParaCelsius(f) {
  return (f - 32) * 5 / 9;
}

if(require.main === module) {
rl.question("Digite a temperatura: ", (valor) => {
  rl.question("Converter para Celsius (C) ou Fahrenheit (F)? ", (tipo) => {
    const temperatura = Number(valor);

    if (!Number.isFinite(temperatura) || valor.trim() === "") {
      console.log("Temperatura inválida!");
    } else if (tipo.toUpperCase() === "C") {
      console.log(`Resultado: ${fahrenheitParaCelsius(temperatura).toFixed(2)} °C`);
    } else if (tipo.toUpperCase() === "F") {
      console.log(`Resultado: ${celsiusParaFahrenheit(temperatura).toFixed(2)} °F`);
    } else {
      console.log("Opção inválida!");
    }

    rl.close();
  });
});
}

module.exports = {
  celsiusParaFahrenheit,
  fahrenheitParaCelsius
};