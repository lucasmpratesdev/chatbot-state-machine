
module.exports = async (context, input, weatherService, machine) => {
  if (!input) {
    console.log('Por favor, informe o nome da cidade.');
    return;
  }

  context.city = input;
  await machine.transition('FETCH_WEATHER', input);
};
