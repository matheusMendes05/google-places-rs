"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const express_1 = require("express");
const appRoutes = (0, express_1.Router)();
exports.appRoutes = appRoutes;
appRoutes.get("/", (request, response) => {
    return response.status(200).json([{
            "aplicação": "google-places-rs 1.0"
        }]);
});
