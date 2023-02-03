import { IGoogleService } from "../IGoogleService";
import axios from "axios";

class GoogleService implements IGoogleService {

  async getCEP(latitude: string, longitude: string): Promise<any> {
    try {
      const { data } = await axios.get(`${process.env.GOOGLE_BASE_URL}latlng=${latitude},${longitude}&location_type=ROOFTOP&result_type=street_address&key=${process.env.GOOGLE_API_KEY}`);
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
}

export { GoogleService }
