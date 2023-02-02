"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
class AddressController {
    constructor(addressUseCase) {
        this.addressUseCase = addressUseCase;
    }
    async handle(request, response) {
        const x_api_key = request.headers['x-api-key'];
        if (!x_api_key && x_api_key != process.env.X_API_KEY)
            return response.status(400).json({ error: "x-api-key inválido." });
        const { latitude, longitude } = request.body;
        if (!request.body.latitude || !request.body.longitude)
            return response.status(400).json({ error: "Parâmetros necessários (latitude e longitude) no corpo da requisição." });
        const data = await this.addressUseCase.execute(latitude, longitude);
        return response.status(200).json(data);
    }
}
exports.AddressController = AddressController;
