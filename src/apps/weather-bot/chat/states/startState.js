module.exports = async (context, input, weatherService, machine) => {
  console.log('Olá! Informe a cidade para consulta do clima.');
  await machine.transition('ASK_CITY');
};
