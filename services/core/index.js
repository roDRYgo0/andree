import HttpService from './HttpService';

HttpService.setBaseURL(process.env.API_URL || 'https://pokeapi.co/api/v2');
