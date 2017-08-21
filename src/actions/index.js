import axios from 'axios';
import API_key from '../config.js';
const weather_key = API_key.keys[0].weather;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${weather_key}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    // promise is automatically unwrapped once sent as a payload

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}