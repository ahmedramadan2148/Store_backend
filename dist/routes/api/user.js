"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("../../controller/user"));
var authenticate_valid_1 = __importDefault(require("../../middleware/authenticate_valid"));
var routes = (0, express_1.Router)();
routes.route('/')
    .get(authenticate_valid_1.default, user_1.default.index)
    .post(user_1.default.createUser)
    .patch(user_1.default.update);
routes.route('/:id')
    .get(user_1.default.show)
    .delete(user_1.default.delete_user);
routes.route("/auth").post(user_1.default.auth_user);
exports.default = routes;
