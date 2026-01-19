require('dotenv').config();

const readline = require('readline');
const logger = require('../shared/logger');

const StateMachine = require('../chat/stateMachine');
const OpenWeatherProvider = require('../infra/weather/OpenWeatherProvider');

// Dependências
const weatherService = new OpenWeatherProvider();

// Contexto global da conversa
const context = {
  city: null,
  weather: null,
  sessionId: Date.now().toString()
};

// Inicializa máquina de estados
const stateMachine = new StateMachine(weatherService, context);

logger.info('Chatbot iniciado', { sessionId: context.sessionId });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Chatbot Corporativo Neppo ===');

function prompt() {
  rl.question('> ', async (input) => {
    await stateMachine.handle(input.trim());
    prompt();
  });
}

prompt();
