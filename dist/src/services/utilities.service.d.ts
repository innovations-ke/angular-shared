export declare class UtilitiesService {
    /**
     * Creates an instance of UtilitiesService.
     * @memberof UtilitiesService
     */
    constructor();
    /**
     * Sort items alphatically
     *
     * @param {Array<KeyValue>} list
     * @param {string} column
     *
     * @memberOf ReportsComponent
     */
    sortAlphabetically(list: Array<any>, column: string): any[];
    /**
     * Sort numbers
     *
     * @param {Array<KeyValue>} list
     * @param {string} column
     *
     * @memberOf ReportsComponent
     */
    sortNumerically(list: Array<any>, column: string): any[];
}
