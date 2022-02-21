"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var env = process.env;
var db = new pg_1.Pool({
    host: env.DB_HOST,
    database: env.NODE_DEV === 'dev' ? env.DB_DEV : env.DB_TEST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    port: parseInt(env.DB_PORT)
});
exports.default = db;
