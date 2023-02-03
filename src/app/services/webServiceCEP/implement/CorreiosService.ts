import axios from "axios";
import { ICorreiosService } from "../ICorreiosService";

class CorreiosService implements ICorreiosService {

  async getAddress(cep: string): Promise<any> {
    try {

      if (!cep) return { error: "CEP nao encontrado" }

      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      return data;

    } catch (error: any) {
      return error.message;
    }
  }
}

export { CorreiosService }
