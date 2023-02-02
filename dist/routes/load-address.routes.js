"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAddressRoutes = void 0;
const express_1 = require("express");
const address_1 = __importDefault(require("../app/useCase/address"));
const loadAddressRoutes = (0, express_1.Router)();
exports.loadAddressRoutes = loadAddressRoutes;
loadAddressRoutes.get('/', (request, response) => {
    return response.status(200).json('Hello word');
});
loadAddressRoutes.post('/', (request, response) => {
    return (0, address_1.default)().handle(request, response);
});
