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
var core_2 = require("@crud/core");
var material_1 = require("@angular/material");
var CrudModule_1 = require("./CrudModule");
var CrudMaterialToastModule = /** @class */ (function () {
    function CrudMaterialToastModule($crud, snackBar) {
        $crud.config(function (config) {
            config.callbacks.notify = function (_a) {
                var message = _a.message, type = _a.type;
                return new Promise(function (resolve) {
                    snackBar.open(message, "Hide", {
                        panelClass: type + "-snackbar",
                        duration: 3000
                    });
                });
            };
            return config;
        });
    }
    CrudMaterialToastModule = __decorate([
        core_1.NgModule({
            imports: [
                CrudModule_1.CrudModule
            ]
        }),
        __metadata("design:paramtypes", [core_2.CrudRequest, material_1.MatSnackBar])
    ], CrudMaterialToastModule);
    return CrudMaterialToastModule;
}());
exports.CrudMaterialToastModule = CrudMaterialToastModule;
