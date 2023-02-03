import { GoogleService } from "../../services/google/implement/GoogleService";
import { CorreiosService } from "../../services/webServiceCEP/implement/CorreiosService";

class AddressUseCase {
  constructor(private googleService: GoogleService, private correiosService: CorreiosService) { }

  async execute(latitude: string, logitude: string): Promise<Object> {

    // obter cep atraves da lat e long com o Geolocation API
    const cep = await this.googleService.getCEP(latitude, logitude);

    // API do Google retorna erro quando nao consegue especificar o endereco apartir da lat e long
    if (cep.status !== 'OK') return { error: "Endereco nao encontrado" }

    for (const iterator of cep.results[0].address_components) {

      if (iterator.types[0] === 'postal_code') {

        const address = await this.correiosService.getAddress(iterator.long_name);

        if (!address) return { error: "Endereco nao encontrado - (WebServiceCEP)" }

        const endereco = {
          rua: address.logradouro,
          bairro: address.bairro,
          cidade: address.localidade,
          cep: address.cep
        }

        return { address: endereco, formatted_address: cep.results[0].formatted_address };

      }
    }

    return cep
  }
}

export { AddressUseCase }

