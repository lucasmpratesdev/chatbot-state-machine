module.exports = async (context, input, weatherService, machine) => {
  const { city, temperature, description } = context.weather;

  console.log(`Clima em ${city}:`);
  console.log(`Temperatura: ${temperature}°C`);
  console.log(`Condição: ${description}`);
  console.log('\nDigite outra cidade para nova consulta.');

  await machine.transition('ASK_CITY');
};
