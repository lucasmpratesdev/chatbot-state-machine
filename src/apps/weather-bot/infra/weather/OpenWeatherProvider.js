const axios = require('axios');
const WeatherService = require('../../domain/services/WeatherService');
const logger = require('../../shared/logger');

console.log('API KEY:', process.env.OPENWEATHER_API_KEY);

class OpenWeatherProvider extends WeatherService {
  async getWeather(city) {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: city,
            appid: process.env.OPENWEATHER_API_KEY,
            units: 'metric',
            lang: 'pt_br'
          }
        }
      );

      const data = response.data;

      return {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description
      };
    } catch (error) {
      logger.error('Weather provider failure', {
        city,
        message: error.message
      });
      throw error;
    }
  }
}

module.exports = OpenWeatherProvider;
