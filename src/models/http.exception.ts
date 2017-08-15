/**
 * This class represents an exception to be thrown whenever there is a error
 * during an http call
 *
 * @export
 * @class HttpException
 */
export class HttpException {

    /**
     * The API result of the http call. This is not the http status code.
     * See http://docs.savixplatformapi.apiary.io/#introduction/response-object
     *
     * @type {number}
     * @memberOf RequestException
    */
    result = 0;

    /**
     * This is the http status for the call.
     * See https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     *
     * @type {number}
     * @memberOf RequestException
     */
    httpStatus = 0;

    /**
     * A string from the server summarizing the outcome of the request
     * See http://docs.savixplatformapi.apiary.io/#introduction/response-object
     *
     * @type {string}
     * @memberOf RequestException
     */
    message: string;

    /**
     * An array in which the server can package a descriptive list of error and/or warnings
     * See http://docs.savixplatformapi.apiary.io/#introduction/response-object
     *
     * @type {Array<any>}
     * @memberOf RequestException
     */
    errors: Array<any>;

    /**
     * Creates an instance of HttpException.
     * @param {number} result
     * @param {number} httpStatus
     * @param {string} message
     * @param {Array<any>} errors
     * @memberof HttpException
     */
    constructor(result: number, httpStatus: number, message: string, errors: Array<any>) {
        this.result = result;
        this.httpStatus = httpStatus;
        this.message = message;
        this.errors = errors;

    }
}
