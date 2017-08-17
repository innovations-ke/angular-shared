import { Http, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
export declare class HttpService {
    private http;
    /**
     * Creates an instance of HttpService.
     * @param {Http} http
     * @memberof HttpService
     */
    constructor(http: Http);
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
    post<TRequest, TResponse>(url: string, payload: TRequest): Observable<any>;
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
    put<TRequest, TResponse>(url: string, payload: TRequest): Observable<any>;
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
    patch<TRequest, TResponse>(url: string, payload: TRequest): Observable<any>;
    /**
     * This method is used to send a GET request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TResponse
     * @param {string} url url
     * @returns Subscribe
     * @memberof HttpService
     */
    get<TResponse>(url: string): Observable<TResponse>;
    /**
     * This method is used to send a GET request to the server. The request is excpected to create a new object in the sever.
     *
     * @template TResponse
     * @param {string} url url
     * @returns Subscribe
     * @memberof HttpService
     */
    delete<TResponse>(url: string): Observable<any>;
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
    updateHttpHeaders<RQ>(url: string, payLoad: RQ, method: RequestMethod): any;
    /**
     * Remove nullables from the request
     *
     * @param {*} obj
     * @returns
     * @memberof HttpService
     */
    removeNullables(obj: any): any;
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
    processResponse<RS>(res: Response): RS;
    /**
     * This method is used to handle request exceptions.
     *
     * @param {*} exception
     * @memberof HttpService
     */
    handleException(error: any): Observable<any>;
}
