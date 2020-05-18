import { Router } from 'express';
var request = require('request');
const url = require('url');

export const Routes = () => {
  const routes = new Router();
  const characterList = [];

  routes.get('/api/characterList', (_req, resp) => {
    const queryObject = url.parse(_req.url, true).query;
    console.log(queryObject, 'this is queryObject');
    request(
      { url: 'https://rickandmortyapi.com/api/character/', qs: queryObject },
      (error, response, body) => {
        if (error) {
          console.log('error:', error); // Print the error if one occurred
        } else if (response && body) {
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          resp.json(JSON.parse(body).results); // Print JSON response.
        }
      }
    );
  });

  return routes;
};
