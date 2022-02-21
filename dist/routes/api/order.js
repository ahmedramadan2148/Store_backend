"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_1 = __importDefault(require("../../controller/order"));
var routus = (0, express_1.Router)();
routus.route('/').post(order_1.default.create);
routus.route("/:id").get(order_1.default.current_order);
exports.default = routus;
