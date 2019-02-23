"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@crud/core");
var $crud = new core_2.CrudRequest();
var CrudModule = /** @class */ (function () {
    function CrudModule() {
    }
    CrudModule = __decorate([
        core_1.NgModule({
            providers: [
                {
                    provide: core_2.CrudRequest,
                    useValue: $crud
                }
            ]
        })
    ], CrudModule);
    return CrudModule;
}());
exports.CrudModule = CrudModule;
