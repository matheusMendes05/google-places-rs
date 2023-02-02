"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GoogleService_1 = require("../../services/google/implement/GoogleService");
const addressController_1 = require("./addressController");
const addressUseCase_1 = require("./addressUseCase");
exports.default = () => {
    const googleService = new GoogleService_1.GoogleService();
    const addressUseCase = new addressUseCase_1.AddressUseCase(googleService);
    const addressController = new addressController_1.AddressController(addressUseCase);
    return addressController;
};
