import { Http, Request, Response, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
// models
import { HttpException } from '../models/http.exception';
import { GeneralResponse } from '../models/general.response';

@Injectable()
export class HttpService {

    /**
     * Creates an instance of HttpService.
     * @param {Http} http
     * @memberof HttpService
     */
    constructor(private http: Http) { }

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
    post<TRequest, TResponse>(url: string, payload: TRequest) {
        const postReq = this.updateHttpHeaders<TRequest>(url, payload, RequestMethod.Post);
        return this.http.request(postReq)
            .map((res: Response) => this.processResponse<TResponse>(res))
            .catch((error: any) => this.handleException(error));
    }

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
    put<TRequest, TResponse>(url: string, payload: TRequest) {
        const postReq = this.updateHttpHeaders<TRequest>(url, payload, RequestMethod.Put);
        return this.http.request(postReq)
            .map((res: Response) => this.processResponse<TResponse>(res))
            .catch((error: any) => this.handleException(error));
    }


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
    patch<TRequest, TResponse>(url: string, payload: TRequest) {
        const patchReq = this.updateHttpHeaders<TRequest>(url, payload, RequestMethod.Patch);
        return this.http.request(patchReq)
            .map((res: Response) => this.processResponse<TResponse>(res))
            .catch((error: any) => this.handleException(error));
    }

    /**
     * This method is used to send a GET request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TResponse
     * @param {string} url url
     * @returns Subscribe
     * @memberof HttpService
     */
    get<TResponse>(url: string): Observable<TResponse> {
        const getReq = this.updateHttpHeaders(url, {}, RequestMethod.Get);
        return this.http.request(getReq)
            .map((res: Response) => this.processResponse<TResponse>(res))
            .catch((error: any) => this.handleException(error));

    }

    /**
     * This method is used to send a GET request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TResponse
     * @param {string} url url
     * @returns Subscribe
     * @memberof HttpService
     */
    delete<TResponse>(url: string) {
        const getReq = this.updateHttpHeaders(url, {}, RequestMethod.Delete);
        return this.http.request(getReq)
            .map((res: Response) => this.processResponse<TResponse>(res))
            .catch((error: any) => this.handleException(error));
    }

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
    updateHttpHeaders<RQ>(url: string, payLoad: RQ, method: RequestMethod): any {
        try {
            const headers = new Headers();
            const options = new RequestOptions({
                method: method,
                url: url
            });
            headers.append('locale', 'en_GB');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('Access-Control-Allow-Origin', '*');
            options.headers = headers;

            if (method === RequestMethod.Post || method === RequestMethod.Put) {
                options.body = this.removeNullables((payLoad as RQ));
            }

            const request = new Request(options);
            return request;
        } catch (error) {
            return Observable.throw(new HttpException(0, 0, 'An error occured', []));
        }
    }

    /**
     * Remove nullables from the request
     *
     * @param {*} obj
     * @returns
     * @memberof HttpService
     */
    removeNullables(obj: any) {
        for (const i in obj) {
            if (obj[i] === null) {
                delete obj[i];
            } else if (typeof obj[i] === 'object') {
                this.removeNullables(obj[i]);
            }
        }
        return obj;
    }

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
    processResponse<RS>(res: Response) {
        const body = res.json() as GeneralResponse;
        if (!body) {
            Observable.throw(new HttpException(0, res.status, 'No data has been received from the server. Please try again.', []));
        }
        return body.content as RS;
    }

    /**
     * This method is used to handle request exceptions.
     *
     * @param {*} exception
     * @memberof HttpService
     */
    handleException(error: any): Observable<any> {
        return Observable.throw(new HttpException(0, 0, error.json().error, []));
    }

}
