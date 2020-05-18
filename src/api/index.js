import { httpClient } from './httpClient';
import { Api } from './api';

export function apiFactory(http) {
  return {
    characterList: Api(http)
  };
}

const http = httpClient('http://localhost:3000');
export const api = apiFactory(http);
