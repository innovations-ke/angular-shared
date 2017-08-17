"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
// models
var http_exception_1 = require("../models/http.exception");
var HttpService = (function () {
    /**
     * Creates an instance of HttpService.
     * @param {Http} http
     * @memberof HttpService
     */
    function HttpService(http) {
        this.http = http;
    }
    /**
     * This method is used to send a POST request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TRequest
     * @template TResponse
     * @param {string} url url
     * @param {TRequest} payload data
     * @returns Subscribe
     * @memberof HttpService
     */
    HttpService.prototype.post = function (url, payload) {
        var _this = this;
        var postReq = this.updateHttpHeaders(url, payload, http_1.RequestMethod.Post);
        return this.http.request(postReq)
            .map(function (res) { return _this.processResponse(res); })
            .catch(function (error) { return _this.handleException(error); });
    };
    /**
     * This method is used to send a PUT request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TRequest
     * @template TResponse
     * @param {string} url url
     * @param {TRequest} payload data
     * @returns Subscribe
     * @memberof HttpService
     */
    HttpService.prototype.put = function (url, payload) {
        var _this = this;
        var postReq = this.updateHttpHeaders(url, payload, http_1.RequestMethod.Put);
        return this.http.request(postReq)
            .map(function (res) { return _this.processResponse(res); })
            .catch(function (error) { return _this.handleException(error); });
    };
    /**
     * This method is used to send a PATCH request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TRequest
     * @template TResponse
     * @param {string} url url
     * @param {TRequest} payload data
     * @returns Subscribe
     * @memberof HttpService
     */
    HttpService.prototype.patch = function (url, payload) {
        var _this = this;
        var patchReq = this.updateHttpHeaders(url, payload, http_1.RequestMethod.Patch);
        return this.http.request(patchReq)
            .map(function (res) { return _this.processResponse(res); })
            .catch(function (error) { return _this.handleException(error); });
    };
    /**
     * This method is used to send a GET request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TResponse
     * @param {string} url url
     * @returns Subscribe
     * @memberof HttpService
     */
    HttpService.prototype.get = function (url) {
        var _this = this;
        var getReq = this.updateHttpHeaders(url, {}, http_1.RequestMethod.Get);
        return this.http.request(getReq)
            .map(function (res) { return _this.processResponse(res); })
            .catch(function (error) { return _this.handleException(error); });
    };
    /**
     * This method is used to send a GET request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TResponse
     * @param {string} url url
     * @returns Subscribe
     * @memberof HttpService
     */
    HttpService.prototype.delete = function (url) {
        var _this = this;
        var getReq = this.updateHttpHeaders(url, {}, http_1.RequestMethod.Delete);
        return this.http.request(getReq)
            .map(function (res) { return _this.processResponse(res); })
            .catch(function (error) { return _this.handleException(error); });
    };
    /**
     * Update the request with adding headers
     *
     * @template RQ
     * @param {string} url
     * @param {RQ} payLoad
     * @param {RequestMethod} method
     * @returns {Request}
     * @memberof HttpService
     */
    HttpService.prototype.updateHttpHeaders = function (url, payLoad, method) {
        try {
            var headers = new http_1.Headers();
            var options = new http_1.RequestOptions({
                method: method,
                url: url
            });
            headers.append('locale', 'en_GB');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('Access-Control-Allow-Origin', '*');
            options.headers = headers;
            if (method === http_1.RequestMethod.Post || method === http_1.RequestMethod.Put) {
                options.body = this.removeNullables(payLoad);
            }
            var request = new http_1.Request(options);
            return request;
        }
        catch (error) {
            return Observable_1.Observable.throw(new http_exception_1.HttpException(0, 0, 'An error occured', []));
        }
    };
    /**
     * Remove nullables from the request
     *
     * @param {*} obj
     * @returns
     * @memberof HttpService
     */
    HttpService.prototype.removeNullables = function (obj) {
        for (var i in obj) {
            if (obj[i] === null) {
                delete obj[i];
            }
            else if (typeof obj[i] === 'object') {
                this.removeNullables(obj[i]);
            }
        }
        return obj;
    };
    /**
     * Process a successfull response from the server
     *
     * @template RS The response type
     * @param {Response} res The server response
     * @param {RS} responseType The response type
     * @returns {RS} The proceesed server response
     *
     * @memberOf RequestService
     */
    HttpService.prototype.processResponse = function (res) {
        var body = res.json();
        if (!body) {
            Observable_1.Observable.throw(new http_exception_1.HttpException(0, res.status, 'No data has been received from the server. Please try again.', []));
        }
        return body.content;
    };
    /**
     * This method is used to handle request exceptions.
     *
     * @param {*} exception
     * @memberof HttpService
     */
    HttpService.prototype.handleException = function (error) {
        return Observable_1.Observable.throw(new http_exception_1.HttpException(0, 0, error.json().error, []));
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map