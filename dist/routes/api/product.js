"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_1 = __importDefault(require("../../controller/product"));
var routes = (0, express_1.Router)();
routes.route("/").get(product_1.default.index).post(product_1.default.create);
routes.route("/:id").get(product_1.default.show);
exports.default = routes;
