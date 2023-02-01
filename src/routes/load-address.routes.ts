import { Router } from "express";


const loadAddressRoutes = Router();

loadAddressRoutes.get('/', (request, response) => {
  return response.status(200).json('Hello word');
});

loadAddressRoutes.post('/', (request, response) => {
  return response.status(200).json('implementar rota');
});

export { loadAddressRoutes }
