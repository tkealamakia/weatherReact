const API_KEY = '56088dd6bd5c0abb82ac594fc1cfcaca';
const URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
