(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-themes-themes-module"],{

/***/ "./src/app/pages/themes/theme-list/theme-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/themes/theme-list/theme-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-layout\">\n  <div class=\"nav-fixed-top cp-toolbar\">\n    <h5><i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i> Themes</h5>\n  </div>\n  <div class=\"cp-content\">\n    <div class=\"p-2\">\n      <p class=\"m-2\">Choose Theme:</p>\n      <div class=\"card-deck mb-3 text-center\">\n        <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-header\">\n            <h4 class=\"my-0 font-weight-normal\">Silver theme</h4>\n          </div>\n          <div class=\"card-body\">\n            <h1 class=\"card-title pricing-card-title\">$0 <small class=\"text-muted\">/ mo</small></h1>\n            <ul class=\"list-unstyled mt-3 mb-4\">\n              <li>Lifetime free updates</li>\n              <li>Based on Bootstrap 4</li>\n              <li>Fully Responsive</li>\n              <li>Help center access</li>\n            </ul>\n            <button (click)=\"changeTheme('theme-silver')\" [disabled]=\"currentTheme=='theme-silver'\" type=\"button\" class=\"btn btn-lg btn-block btn-primary\">Apply</button>\n          </div>\n        </div>\n        <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-header light-header\">\n            <h4 class=\"my-0 font-weight-normal\">Light theme</h4>\n          </div>\n          <div class=\"card-body\">\n            <h1 class=\"card-title pricing-card-title\">$0 <small class=\"text-muted\">/ mo</small></h1>\n            <ul class=\"list-unstyled mt-3 mb-4\">\n              <li>Lifetime free updates</li>\n              <li>Based on Bootstrap 4</li>\n              <li>Fully Responsive</li>\n              <li>Help center access</li>\n            </ul>\n            <button (click)=\"changeTheme('theme-light')\" [disabled]=\"currentTheme=='theme-light'\" type=\"button\" class=\"btn btn-lg btn-block btn-primary\">Apply</button>\n          </div>\n        </div>\n        <div class=\"card mb-4 shadow-sm\">\n          <div class=\"card-header dark-header\">\n            <h4 class=\"my-0 font-weight-normal\">Dark theme</h4>\n          </div>\n          <div class=\"card-body\">\n            <h1 class=\"card-title pricing-card-title\">$0 <small class=\"text-muted\">/ mo</small></h1>\n            <ul class=\"list-unstyled mt-3 mb-4\">\n              <li>Lifetime free updates</li>\n              <li>Based on Bootstrap 4</li>\n              <li>Fully Responsive</li>\n              <li>Help center access</li>\n            </ul>\n            <button (click)=\"changeTheme('theme-dark')\" [disabled]=\"currentTheme=='theme-dark'\" type=\"button\" class=\"btn btn-lg btn-block btn-primary\">Apply</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/themes/theme-list/theme-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/themes/theme-list/theme-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-header {\n  color: #eee;\n  background-color: #343a40 !important; }\n\n.light-header {\n  color: #fff;\n  background-color: #438EB9 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9uZ3V5ZW50aGFuaHZ5MTA1L2V4YW1wbGVzL3NyYy9hcHAvcGFnZXMvdGhlbWVzL3RoZW1lLWxpc3QvdGhlbWUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90aGVtZXMvdGhlbWUtbGlzdC90aGVtZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhcmstaGVhZGVyIHtcbiAgY29sb3I6ICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDtcbn1cbi5saWdodC1oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOEVCOSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/themes/theme-list/theme-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/themes/theme-list/theme-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ThemeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeListComponent", function() { return ThemeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/layout.service */ "./src/app/pages/common/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeListComponent = /** @class */ (function () {
    function ThemeListComponent(layoutService) {
        this.layoutService = layoutService;
    }
    ThemeListComponent.prototype.ngOnInit = function () {
        this.currentTheme = this.layoutService.getTheme();
    };
    ThemeListComponent.prototype.changeTheme = function (theme) {
        this.layoutService.changeTheme(theme);
        this.currentTheme = theme;
    };
    ThemeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-theme-list',
            template: __webpack_require__(/*! ./theme-list.component.html */ "./src/app/pages/themes/theme-list/theme-list.component.html"),
            styles: [__webpack_require__(/*! ./theme-list.component.scss */ "./src/app/pages/themes/theme-list/theme-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], ThemeListComponent);
    return ThemeListComponent;
}());



/***/ }),

/***/ "./src/app/pages/themes/themes-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/themes/themes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ThemesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesRoutingModule", function() { return ThemesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_list_theme_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-list/theme-list.component */ "./src/app/pages/themes/theme-list/theme-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: 'list',
        component: _theme_list_theme_list_component__WEBPACK_IMPORTED_MODULE_2__["ThemeListComponent"]
    }
];
var ThemesRoutingModule = /** @class */ (function () {
    function ThemesRoutingModule() {
    }
    ThemesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ThemesRoutingModule);
    return ThemesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/themes/themes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/themes/themes.module.ts ***!
  \***********************************************/
/*! exports provided: ThemesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesModule", function() { return ThemesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _themes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes-routing.module */ "./src/app/pages/themes/themes-routing.module.ts");
/* harmony import */ var _theme_list_theme_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-list/theme-list.component */ "./src/app/pages/themes/theme-list/theme-list.component.ts");
/* harmony import */ var _common_example_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/example-common.module */ "./src/app/pages/common/example-common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ThemesModule = /** @class */ (function () {
    function ThemesModule() {
    }
    ThemesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_theme_list_theme_list_component__WEBPACK_IMPORTED_MODULE_3__["ThemeListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_example_common_module__WEBPACK_IMPORTED_MODULE_4__["ExampleCommonModule"],
                _themes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThemesRoutingModule"]
            ]
        })
    ], ThemesModule);
    return ThemesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-themes-themes-module.js.map