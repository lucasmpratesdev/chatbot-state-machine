const logger = require('../../shared/logger');

module.exports = async (context, input, weatherService, machine) => {
  try {
    logger.info('Chamando serviço de clima', {
      city: context.city,
      sessionId: context.sessionId
    });

    const weather = await weatherService.getWeather(context.city);
    context.weather = weather;

    await machine.transition('SHOW_RESULT');
  } catch (error) {
    console.log('Não foi possível obter os dados. Tente novamente mais tarde.');
    await machine.transition('ASK_CITY');
  }
};
