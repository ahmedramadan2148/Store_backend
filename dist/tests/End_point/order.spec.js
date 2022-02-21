"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../../index"));
var index_2 = __importDefault(require("../../database/index"));
var user_1 = __importDefault(require("../../models/user"));
var product_1 = __importDefault(require("../../models/product"));
var order_1 = __importDefault(require("../../models/order"));
var request = (0, supertest_1.default)(index_1.default);
var prodModel = new product_1.default();
var userModel = new user_1.default();
var orderModel = new order_1.default();
var Token = '';
var order;
describe("Test Order endpoint ", function () {
    var product_test = {
        prodname: "door",
        price: 256
    };
    var user_test = {
        username: "ahmed",
        lastname: "ahmed123",
        firstname: "omar",
        email: "ahmed666@gmail.com",
        password: "123password"
    };
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, prodresult, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userModel.create(user_test)];
                case 1:
                    result = _a.sent();
                    user_test.id = result.id;
                    return [4 /*yield*/, prodModel.create(product_test)];
                case 2:
                    prodresult = _a.sent();
                    product_test.id = prodresult.id;
                    return [4 /*yield*/, request.post('/api/users/auth').set('Content-type', 'Application/json')
                            .send({
                            email: "ahmed666@gmail.com",
                            password: "123password"
                        })];
                case 3:
                    response = _a.sent();
                    Token = response.body.data.token;
                    return [2 /*return*/];
            }
        });
    }); });
    it("create order ", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order =
                        {
                            "orders": {
                                user_id: user_test.id,
                                status: "passive"
                            },
                            "Prod_collection": {
                                product_id: product_test.id,
                                quantity: 6
                            }
                        };
                    return [4 /*yield*/, request.post('/api/order').set('Content-type', 'application/json')
                            .set('Authorization', "Bearer ".concat(Token)).send(order)];
                case 1:
                    response = _a.sent();
                    expect(response.body.data.user_id).toBe(user_test.id);
                    expect(response.body.data.status).toBe('passive');
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("show current order ", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/order/".concat(user_test.id)).set('Content-type', 'application/json')
                        .set('Authorization', "Bearer ".concat(Token))];
                case 1:
                    response = _a.sent();
                    expect(response.body.data.user_id).toBe(user_test.id);
                    expect(response.body.data.status).toBe('passive');
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var connection, sql;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_2.default.connect()];
                case 1:
                    connection = _a.sent();
                    sql = "delete from orders;delete from order_product;";
                    return [4 /*yield*/, connection.query(sql)];
                case 2:
                    _a.sent();
                    connection.release();
                    return [2 /*return*/];
            }
        });
    }); });
});
