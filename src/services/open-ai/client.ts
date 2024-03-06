import axios from 'axios';
import {OPEN_AI_API_KEY} from '@env';

const baseURL = 'https://api.openai.com/v1/';

console.log(OPEN_AI_API_KEY);

if (!OPEN_AI_API_KEY) {
  throw new Error('Key not found');
}

const Authorization = `Bearer ${OPEN_AI_API_KEY}`;

const OpenAiClient = axios.create({
  baseURL,
  headers: {'Content-Type': 'application/json', Authorization},
});

export default OpenAiClient;
