import { GoogleService } from "../../services/google/implement/GoogleService";
import { AddressController } from "./addressController";
import { AddressUseCase } from "./addressUseCase";

export default (): AddressController => {
    const googleService = new GoogleService();
    const addressUseCase = new AddressUseCase(googleService);
    const addressController = new AddressController(addressUseCase);
    return addressController;
}