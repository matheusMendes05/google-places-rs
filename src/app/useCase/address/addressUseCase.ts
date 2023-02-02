import { GoogleService } from "../../services/google/implement/GoogleService";

class AddressUseCase {
  constructor(private googleService: GoogleService) { }

  async execute(latitude: string, logitude: string): Promise<any> {

    const data = await this.googleService.getSearchAddress(latitude, logitude);

    return data;
  }
}

export { AddressUseCase }

