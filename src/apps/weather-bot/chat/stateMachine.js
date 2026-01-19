const logger = require('../shared/logger');

const startState = require('./states/startState');
const askCityState = require('./states/askCityState');
const fetchWeatherState = require('./states/fetchWeatherState');
const showResultState = require('./states/showResultState');

class StateMachine {
  constructor(weatherService, context) {
    this.weatherService = weatherService;
    this.context = context;

    this.states = {
      START: startState,
      ASK_CITY: askCityState,
      FETCH_WEATHER: fetchWeatherState,
      SHOW_RESULT: showResultState
    };

    this.currentState = 'START';
  }

  async transition(nextState, input = '') {
    logger.info('Transição de estado', {
      from: this.currentState,
      to: nextState,
      input
    });

    this.currentState = nextState;
    await this.states[this.currentState](
      this.context,
      input,
      this.weatherService,
      this
    );
  }

  async handle(input) {
    await this.states[this.currentState](
      this.context,
      input,
      this.weatherService,
      this
    );
  }
}

module.exports = StateMachine;
