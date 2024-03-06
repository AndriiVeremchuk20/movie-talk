import axios from 'axios';
import {SERVER_URL} from '@env';

const baseURL =  SERVER_URL;

if (!SERVER_URL) {
  throw new Error('Key not found');
}

const client = axios.create({
  baseURL,
  headers: {'Content-Type': 'application/json'},
});

export default client;
