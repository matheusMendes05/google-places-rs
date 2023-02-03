
interface ICorreiosService {
  getAddress(cep: string): Promise<any>;
}

export { ICorreiosService }
