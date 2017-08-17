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
var core_1 = require("@angular/core");
var UtilitiesService = (function () {
    /**
     * Creates an instance of UtilitiesService.
     * @memberof UtilitiesService
     */
    function UtilitiesService() {
    }
    /**
     * Sort items alphatically
     *
     * @param {Array<KeyValue>} list
     * @param {string} column
     *
     * @memberOf ReportsComponent
     */
    UtilitiesService.prototype.sortAlphabetically = function (list, column) {
        if (list.length > 0) {
            var withoutColumn = list.filter(function (col) { return col[column] === undefined; });
            var withColumn = list.filter(function (col) { return col[column] !== undefined; });
            var sortedArr = withColumn.sort(function (a, b) {
                if (a[column].toLowerCase() < b[column].toLowerCase()) {
                    return -1;
                }
                if (a[column].toLowerCase() > b[column].toLowerCase()) {
                    return 1;
                }
                return 0;
            });
            for (var i = 0; i < withoutColumn.length; i++) {
                sortedArr.push(withoutColumn[i]);
            }
            return sortedArr;
        }
        return list;
    };
    /**
     * Sort numbers
     *
     * @param {Array<KeyValue>} list
     * @param {string} column
     *
     * @memberOf ReportsComponent
     */
    UtilitiesService.prototype.sortNumerically = function (list, column) {
        if (list.length > 0) {
            var withoutColumn = list.filter(function (col) { return col[column] === undefined; });
            var withColumn = list.filter(function (col) { return col[column] !== undefined; });
            var sortedArr = withColumn.sort(function (a, b) {
                if (a[column] < b[column]) {
                    return -1;
                }
                if (a[column] > b[column]) {
                    return 1;
                }
                return 0;
            });
            for (var i = 0; i < withoutColumn.length; i++) {
                sortedArr.push(withoutColumn[i]);
            }
            return sortedArr;
        }
        return list;
    };
    return UtilitiesService;
}());
UtilitiesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UtilitiesService);
exports.UtilitiesService = UtilitiesService;
//# sourceMappingURL=utilities.service.js.map