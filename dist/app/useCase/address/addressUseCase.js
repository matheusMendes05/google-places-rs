"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUseCase = void 0;
class AddressUseCase {
    constructor(googleService) {
        this.googleService = googleService;
    }
    async execute(latitude, logitude) {
        const data = await this.googleService.getSearchAddress(latitude, logitude);
        return data;
    }
}
exports.AddressUseCase = AddressUseCase;
