import { Request, Response } from "express";


class AddressController {
  constructor() { }

  async handle(request: Request, response: Response): Promise<Response> {
    return response
  }
}

export { AddressController }
