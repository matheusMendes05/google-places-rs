"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleService = void 0;
const axios_1 = __importDefault(require("axios"));
class GoogleService {
    async getSearchAddress(latitude, longitude) {
        try {
            const { data } = await axios_1.default.get(`${process.env.GOOGLE_BASE_URL}latlng=${latitude},${longitude}&key=${process.env.GOOGLE_API_KEY}`);
            return data;
        }
        catch (error) {
            return error.message;
        }
    }
}
exports.GoogleService = GoogleService;
