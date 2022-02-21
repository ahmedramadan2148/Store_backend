"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = function (err, request, response, next) {
    if (err.message) {
        err.message;
    }
    else {
        err.message = 'something wrong ';
    }
    var message = err.message;
    if (err.status_code) {
        err.status_code;
    }
    else {
        err.status_code = 500;
    }
    var statusCode = err.status_code;
    response.status(err.status_code).json({
        message: message,
        statusCode: statusCode
    });
};
exports.default = handleError;
