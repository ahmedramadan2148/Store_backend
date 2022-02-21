"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
var morgan_1 = __importDefault(require("morgan"));
var handleError_1 = __importDefault(require("./middleware/handleError"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT;
app.use((0, morgan_1.default)('common'));
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use(handleError_1.default);
app.listen(port, function () {
    console.log("server start on port ", port);
});
exports.default = app;
