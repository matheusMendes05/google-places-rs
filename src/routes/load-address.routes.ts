import { Router } from "express";
import addressController from '../app/useCase/address'


const loadAddressRoutes = Router();

loadAddressRoutes.get('/', (request, response) => {
  return response.status(200).json('Hello word');
});

loadAddressRoutes.post('/', (request, response) => {
  return addressController().handle(request, response);
});

export { loadAddressRoutes }
