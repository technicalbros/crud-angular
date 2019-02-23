"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CrudModule_1 = require("./CrudModule");
var CrudMaterialToastModule = /** @class */ (function () {
    function CrudMaterialToastModule($crud, snackBar) {
        $crud.config(function (config) {
            config.baseUrl = "http://localhost/video-website/public/services/welcome/";
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
        })
    ], CrudMaterialToastModule);
    return CrudMaterialToastModule;
}());
exports.CrudMaterialToastModule = CrudMaterialToastModule;
//# sourceMappingURL=CrudMaterialToastModule.js.map