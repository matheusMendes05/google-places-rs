import { Request, Response } from "express";
import { AddressUseCase } from "./addressUseCase";

class AddressController {
  constructor(private addressUseCase: AddressUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const x_api_key = request.headers['x-api-key'];

    if (!x_api_key || x_api_key != process.env.X_API_KEY) return response.status(400).json({ error: "x-api-key inválido." })

    const { latitude, longitude } = request.body;

    if (!request.body.latitude || !request.body.longitude) return response.status(400).json({ error: "Parâmetros necessários (latitude e longitude) no corpo da requisição." })

    const data = await this.addressUseCase.execute(latitude, longitude);

    return response.status(200).json(data);
  }
}

export { AddressController }
