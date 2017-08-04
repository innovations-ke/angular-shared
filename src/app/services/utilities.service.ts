import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    /**
     * Creates an instance of UtilitiesService.
     * @memberof UtilitiesService
     */
    constructor() {}

    /**
     * Sort items alphatically
     *
     * @param {Array<KeyValue>} list
     * @param {string} column
     *
     * @memberOf ReportsComponent
     */
    sortAlphabetically(list: Array<any>, column: string) {
        if (list.length > 0) {
            const withoutColumn = list.filter(col => col[column] === undefined);
            const withColumn = list.filter(col => col[column] !== undefined);
            const sortedArr: Array<any> = withColumn.sort(function (a: any, b: any) {
                if (a[column].toLowerCase() < b[column].toLowerCase()) { return -1; }
                if (a[column].toLowerCase() > b[column].toLowerCase()) { return 1; }
                return 0;
            });
            for (let i = 0; i < withoutColumn.length; i++) {
                sortedArr.push(withoutColumn[i]);
            }
            return sortedArr;
        }
        return list;
    }

    /**
     * Sort numbers
     *
     * @param {Array<KeyValue>} list
     * @param {string} column
     *
     * @memberOf ReportsComponent
     */
    sortNumerically(list: Array<any>, column: string) {
        if (list.length > 0) {
            const withoutColumn = list.filter(col => col[column] === undefined);
            const withColumn = list.filter(col => col[column] !== undefined);
            const sortedArr: Array<any> = withColumn.sort(function (a: any, b: any) {
                if (a[column] < b[column]) { return -1; }
                if (a[column] > b[column]) { return 1; }
                return 0;
            });
            for (let i = 0; i < withoutColumn.length; i++) {
                sortedArr.push(withoutColumn[i]);
            }
            return sortedArr;
        }
        return list;
    }
}
