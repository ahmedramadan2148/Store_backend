"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_1 = __importDefault(require("../routes/api/product"));
var user_1 = __importDefault(require("../routes/api/user"));
var order_1 = __importDefault(require("../routes/api/order"));
var routes = (0, express_1.Router)();
routes.use('/users', user_1.default);
routes.use('/product', product_1.default);
routes.use('/order', order_1.default);
exports.default = routes;
