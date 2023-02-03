import { GoogleService } from "../../services/google/implement/GoogleService";
import { CorreiosService } from "../../services/webServiceCEP/implement/CorreiosService";
import { AddressController } from "./addressController";
import { AddressUseCase } from "./addressUseCase";

export default (): AddressController => {
  // services
  const googleService = new GoogleService();
  const correiosService = new CorreiosService();

  const addressUseCase = new AddressUseCase(googleService, correiosService);
  const addressController = new AddressController(addressUseCase);
  return addressController;
}
