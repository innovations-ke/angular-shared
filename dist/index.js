"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_service_1 = require("./src/services/http.service");
var utilities_service_1 = require("./src/services/utilities.service");
__export(require("./src/services/http.service"));
__export(require("./src/services/utilities.service"));
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                http_service_1.HttpService,
                utilities_service_1.UtilitiesService
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=index.js.map