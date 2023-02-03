
interface IGoogleService {
  getCEP(latitude: string, longitude: string): Promise<any>;
}

export { IGoogleService }
