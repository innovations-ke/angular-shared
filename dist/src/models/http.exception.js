"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class represents an exception to be thrown whenever there is a error
 * during an http call
 *
 * @export
 * @class HttpException
 */
var HttpException = (function () {
    /**
     * Creates an instance of HttpException.
     * @param {number} result
     * @param {number} httpStatus
     * @param {string} message
     * @param {Array<any>} errors
     * @memberof HttpException
     */
    function HttpException(result, httpStatus, message, errors) {
        /**
         * The API result of the http call. This is not the http status code.
         * See http://docs.savixplatformapi.apiary.io/#introduction/response-object
         *
         * @type {number}
         * @memberOf RequestException
        */
        this.result = 0;
        /**
         * This is the http status for the call.
         * See https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
         *
         * @type {number}
         * @memberOf RequestException
         */
        this.httpStatus = 0;
        this.result = result;
        this.httpStatus = httpStatus;
        this.message = message;
        this.errors = errors;
    }
    return HttpException;
}());
exports.HttpException = HttpException;
//# sourceMappingURL=http.exception.js.map