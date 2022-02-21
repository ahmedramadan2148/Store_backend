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
exports.hashPassword = void 0;
var index_1 = __importDefault(require("../database/index"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var hashPassword = function (password) { return __awaiter(void 0, void 0, void 0, function () {
    var salt, pepper, passwordHash;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                salt = parseInt(process.env.SALT);
                pepper = process.env.BYCRYPT_PASSWORD;
                return [4 /*yield*/, bcrypt_1.default.hash("".concat(password).concat(pepper), salt)];
            case 1:
                passwordHash = _a.sent();
                return [2 /*return*/, passwordHash];
        }
    });
}); };
exports.hashPassword = hashPassword;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.create = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, query, hash, created_user, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, index_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "INSERT INTO users(firstName,lastName,userName,email,password) values($1,$2,$3,$4,$5) returning *;";
                        query = "select * from users where id= $1;";
                        return [4 /*yield*/, (0, exports.hashPassword)(user.password)];
                    case 2:
                        hash = _a.sent();
                        return [4 /*yield*/, connection.query(sql, [
                                user.firstname,
                                user.lastname,
                                user.username,
                                user.email,
                                hash
                            ])];
                    case 3:
                        created_user = _a.sent();
                        return [4 /*yield*/, connection.query(query, [created_user.rows[0].id])];
                    case 4:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 5:
                        err_1 = _a.sent();
                        throw new Error("can not created user");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.readOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, query, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, index_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        query = "select * from users where id= $1;";
                        return [4 /*yield*/, connection.query(query, [id])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("can not created user");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.readAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, query, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, index_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        query = "select * from users ;";
                        return [4 /*yield*/, connection.query(query)];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_3 = _a.sent();
                        throw new Error("can not readall user");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, query, result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, index_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        query = "delete from users where id=$1 returning id,username,firstname,lastname,email;";
                        return [4 /*yield*/, connection.query(query, [id])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        err_4 = _a.sent();
                        throw new Error("can not delete user");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.update = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, query, update_user, _a, _b, _c, _d, result, err_5;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, index_1.default.connect()];
                    case 1:
                        connection = _e.sent();
                        sql = "update users SET firstName=$1,lastName=$2,userName=$3,email=$4,password=$5 \n            where id=$6 returning *; ";
                        query = "select * from users where id= $1;";
                        _b = (_a = connection).query;
                        _c = [sql];
                        _d = [user.firstname,
                            user.lastname,
                            user.username,
                            user.email];
                        return [4 /*yield*/, (0, exports.hashPassword)(user.password)];
                    case 2: return [4 /*yield*/, _b.apply(_a, _c.concat([_d.concat([
                                _e.sent(),
                                user.id
                            ])]))];
                    case 3:
                        update_user = _e.sent();
                        return [4 /*yield*/, connection.query(query, [update_user.rows[0].id])];
                    case 4:
                        result = _e.sent();
                        connection.release();
                        return [2 /*return*/, result.rows[0]];
                    case 5:
                        err_5 = _e.sent();
                        throw new Error("can not update user");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.auth = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, isPasswordValid, sql_1, result_1, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, index_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "SELECT password from users where email=$1;";
                        return [4 /*yield*/, connection.query(sql, [email])];
                    case 2:
                        result = _a.sent();
                        isPasswordValid = bcrypt_1.default.compareSync("".concat(password).concat(process.env.BYCRYPT_PASSWORD), result.rows[0].password);
                        if (!isPasswordValid) return [3 /*break*/, 4];
                        sql_1 = "select id,userName,firstName,lastName from users where email=$1;";
                        return [4 /*yield*/, connection.query(sql_1, [email])];
                    case 3:
                        result_1 = _a.sent();
                        return [2 /*return*/, result_1.rows[0]];
                    case 4:
                        connection.release();
                        return [2 /*return*/, null];
                    case 5:
                        err_6 = _a.sent();
                        return [2 /*return*/, null];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return User;
}());
exports.default = User;
