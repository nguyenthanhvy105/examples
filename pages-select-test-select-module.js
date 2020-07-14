(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-select-test-select-module"],{

/***/ "./src/app/pages/select/mutil/select-multi.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/select/mutil/select-multi.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectMultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultiComponent", function() { return SelectMultiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/data.service */ "./src/app/pages/data/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var inet_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inet-ui */ "./node_modules/inet-ui/fesm5/inet-ui.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectMultiComponent = /** @class */ (function () {
    function SelectMultiComponent(dataService, fb) {
        this.dataService = dataService;
        this.fb = fb;
        this.selectedPeople1 = [];
        this.selectedPeople2 = [];
        this.selectedPeople3 = [];
        this.selectedPeople4 = [];
        this.selectedPeople5 = [];
        this.disable = true;
        this.selectedUsers1 = [];
        this.selectedUsers2 = [];
        this.people = [];
        this.selectedPeople = [];
    }
    SelectMultiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demoForm = this.fb.group({
            tag1: [null, null],
            tag2: [null, null],
            tag3: [null, null],
            tag4: [null, null],
            tag5: [null, null],
            tag6: [null, null]
        });
        this.people$1 = this.dataService.getPeople();
        this.people$2 = this.dataService.getPeople();
        this.githubUsers$ = this.dataService.getGithubAccounts('anjm');
        this.selectedPeople1 = [
            { id: '5a15b13c663ea0af9ad0dae8', name: 'Mendoza Ruiz' },
            { id: "5a15b13ca51b0aaf8a99c05a", name: "Franklin James" }
        ];
        this.people$4 = this.dataService.getPeople();
        this.selectedPeople4 = [
            { id: '5a15b13c2340978ec3d2c0ea', name: 'Rochelle Estes', disabled: true },
            { id: '5a15b13c663ea0af9ad0dae8', name: 'Mendoza Ruiz' }
            // , { id: '5a15b13c728cd3f43cc0fe8a', name: 'Marquez Nolan', disabled: true }
        ];
        this.people$1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x.filter(function (y) { return !y.disabled; }); }))
            .subscribe(function (res) {
            _this.people = res;
            _this.selectedPeople = [_this.people[0].id, _this.people[1].id];
        });
    };
    SelectMultiComponent.prototype.changeModel = function () {
        if (!this.changed) {
            var newArr = [{ id: '5a15b13cc3b9381ffcb1d6f7', name: 'Elsa Bradley' }];
            this.selectedPeople1 = this.selectedPeople1.concat(newArr);
            this.changed = true;
        }
    };
    SelectMultiComponent.prototype.onChange = function ($event) {
        console.log($event);
        this.changed = this.selectedPeople1.length !== 0;
    };
    SelectMultiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-multi',
            template: __webpack_require__(/*! ./select-mutil.component.html */ "./src/app/pages/select/mutil/select-mutil.component.html")
        }),
        Object(inet_ui__WEBPACK_IMPORTED_MODULE_3__["Logger"])(),
        __metadata("design:paramtypes", [_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SelectMultiComponent);
    return SelectMultiComponent;
}());



/***/ }),

/***/ "./src/app/pages/select/mutil/select-mutil.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/select/mutil/select-mutil.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-layout\">\n    <div class=\"nav-fixed-top cp-toolbar\">\n        <h5><i class=\"fa fa-cube\" aria-hidden=\"true\"></i> Mutil Select</h5>\n    </div>\n    <div class=\"cp-content\">\n        <form [formGroup]=\"demoForm\" class=\"p-2\">\n            <div class=\"col-sm-12 card\">\n                <div class=\"card-body\">\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Default: </label>\n                        <div class=\"col-sm-5\">\n                            <button (click)=\"changeModel()\" [disabled]=\"changed\" class=\"mb-2 btn btn-sm btn-primary\">Change model</button>\n                            <ng-select\n                                    [formControl]=\"demoForm.controls['tag1']\"\n                                    [items]=\"people$1 | async\"\n                                    [multiple]=\"true\"\n                                    [closeOnSelect]=\"false\"\n                                    [searchable]=\"false\"\n                                    bindLabel=\"name\"\n                                    name=\"tag1\"\n                                    placeholder=\"Select people\"\n                                    (change)=\"onChange($event)\"\n                                    [(ngModel)]=\"selectedPeople1\">\n                            </ng-select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{selectedPeople1 | json}}</p>\n                            <p *ngIf=\"!selectedPeople1.length\" class=\"text-danger\">\n                                <i class=\"fa fa-exclamation-triangle\"></i> Name field is required\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Hide selected : </label>\n                        <div class=\"col-sm-5\">\n                            <ng-select\n                                    [formControl]=\"demoForm.controls['tag2']\"\n                                    [items]=\"people$1 | async\"\n                                    [multiple]=\"true\"\n                                    [closeOnSelect]=\"false\"\n                                    [hideSelected]=\"true\"\n                                    bindLabel=\"name\"\n                                    name=\"tag2\"\n                                    placeholder=\"Select people\"\n                                    [ngClass]=\"{'ng-select-invalid':!selectedPeople2.length && demoForm.controls['tag2'].touched}\"\n                                    [(ngModel)]=\"selectedPeople2\">\n                            </ng-select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{selectedPeople2 | json}}</p>\n                            <p *ngIf=\"demoForm.controls['tag2'].touched && !selectedPeople2.length\"\n                                 class=\"text-danger col-sm-12 pl-0\">\n                                <i class=\"fa fa-exclamation-triangle\"></i> Tag2 field is required\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Max Selected (3): </label>\n                        <div class=\"col-sm-5\">\n                            <div class=\"alert alert-warning mb-2\" *ngIf=\"selectedPeople2.length === 3 && select.focused\">\n                                <small >Max selection reached</small>\n                            </div>\n                            <ng-select #select\n                                       [formControl]=\"demoForm.controls['tag3']\"\n                                [items]=\"people$2 | async\"\n                                [multiple]=\"true\"\n                                [maxSelectedItems]=\"3\"\n                                bindLabel=\"name\"\n                                name=\"tag3\"\n\n                                [(ngModel)]=\"selectedPeople3\">\n                            </ng-select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{selectedPeople3 | json}}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Disabled: </label>\n                        <div class=\"col-sm-5\">\n                            <ng-select\n                                    [formControl]=\"demoForm.controls['tag4']\"\n                                    [items]=\"people$3 | async\"\n                                    bindLabel=\"name\"\n                                    [multiple]=\"true\"\n                                    [disabled]=\"disable\"\n                                    name=\"tag4\"\n                                    [(ngModel)]=\"selectedPeople4\">\n                            </ng-select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{selectedPeople4 | json}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Custom template: </label>\n                        <div class=\"col-sm-5\">\n                            <ng-select\n                                    [formControl]=\"demoForm.controls['tag5']\"\n                                    [items]=\"githubUsers$ | async\"\n                                    [multiple]=\"true\"\n                                    bindLabel=\"login\"\n                                    name=\"tag5\"\n                                    [(ngModel)]=\"selectedUsers1\">\n\n                                <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\n                                    <span class=\"ng-value-label\"><img [src]=\"item.avatar_url\" width=\"20px\" height=\"20px\"> {{item.login}}</span>\n                                    <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\n                                </ng-template>\n\n                                <ng-template ng-option-tmp let-item=\"item\">\n                                    <img [src]=\"item.avatar_url\" width=\"20px\" height=\"20px\"> {{item.login}}\n                                </ng-template>\n                            </ng-select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{selectedUsers1 | json}}</p>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Checkbox & Group: </label>\n                        <div class=\"col-sm-5\">\n                            <ng-select\n                                    [formControl]=\"demoForm.controls['tag6']\"\n                                    [items]=\"people\"\n                                    [multiple]=\"true\"\n                                    bindLabel=\"name\"\n                                    groupBy=\"gender\"\n                                    [selectableGroup]=\"true\"\n                                    [selectableGroupAsModel]=\"false\"\n                                    [closeOnSelect]=\"false\"\n                                    bindValue=\"id\"\n                                    name=\"tag6\"\n                                    [(ngModel)]=\"selectedPeople\">\n                                <ng-template ng-optgroup-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                    <input id=\"item-{{index}}\" name=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\">\n                                    <label class=\"lbl\"></label> {{item.gender | uppercase}}\n                                </ng-template>\n                                <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                                    <input id=\"item-{{index}}\" name=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\"/>\n                                    <label class=\"lbl\"></label> {{item.name}}\n                                </ng-template>\n                            </ng-select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{selectedPeople | json}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/select/tags/tags.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/select/tags/tags.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-layout\">\n    <div class=\"nav-fixed-top cp-toolbar\">\n        <h5><i class=\"fa fa-cube\" aria-hidden=\"true\"></i> Tags</h5>\n    </div>\n    <div class=\"cp-content\">\n        <form class=\"p-2\">\n            <div class=\"col-sm-12 card\">\n                <div class=\"card-body\">\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Default: </label>\n                        <div class=\"col-sm-5\">\n                            <ng-select [items]=\"['iNet']\"\n                                       name=\"tag1\"\n                                       [addTag]=\"true\"\n                                       [(ngModel)]=\"tag1\">\n                            </ng-select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{tag1 | json}}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Multiple : </label>\n                        <div class=\"col-sm-5\">\n                            <ng-select [items]=\"companies\"\n                                       [addTag]=\"addTag\"\n                                       [hideSelected]=\"true\"\n                                       multiple=\"true\"\n                                       bindLabel=\"name\"\n                                       name=\"tag2\"\n                                       [(ngModel)]=\"tag2\">\n                            </ng-select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{tag2 | json}}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group margin-b-form-group row\">\n                        <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">Search : </label>\n                        <div class=\"col-sm-5\">\n                            <ng-select [items]=\"companies\"\n                                       [addTag]=\"addTagPromise\"\n                                       multiple=\"true\"\n                                       bindLabel=\"name\"\n                                       name=\"tag3\"\n                                       [loading]=\"loading\"\n                                       [(ngModel)]=\"tag3\">\n                                <ng-template ng-tag-tmp let-search=\"searchTerm\">\n                                    <b>Create new</b>: {{search}}\n                                </ng-template>\n                            </ng-select>\n\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <p class=\"p-2\">Selected value: {{tag3 | json}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/select/tags/tags.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/select/tags/tags.component.ts ***!
  \*****************************************************/
/*! exports provided: SelectTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTagsComponent", function() { return SelectTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectTagsComponent = /** @class */ (function () {
    function SelectTagsComponent() {
        this.companies = [];
        this.loading = false;
        this.companiesNames = ['iNet Solutions', 'Apple Inc', 'Alphabet Inc'];
        this.tag1 = 'iNet';
    }
    SelectTagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companiesNames.forEach(function (c, i) {
            _this.companies.push({ id: i, name: c });
        });
    };
    SelectTagsComponent.prototype.addTag = function (name) {
        return { name: name, tag: true };
    };
    SelectTagsComponent.prototype.addTagPromise = function (name) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loading = true;
            setTimeout(function () {
                resolve({ id: 5, name: name, valid: true });
                _this.loading = false;
            }, 1000);
        });
    };
    SelectTagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/pages/select/tags/tags.component.html"),
        })
    ], SelectTagsComponent);
    return SelectTagsComponent;
}());



/***/ }),

/***/ "./src/app/pages/select/test-select-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/select/test-select-routing.module.ts ***!
  \************************************************************/
/*! exports provided: TestSelectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSelectRoutingModule", function() { return TestSelectRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/pages/select/tags/tags.component.ts");
/* harmony import */ var _mutil_select_multi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mutil/select-multi.component */ "./src/app/pages/select/mutil/select-multi.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'tags', pathMatch: 'full' },
    {
        path: 'tags',
        component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_2__["SelectTagsComponent"]
    },
    {
        path: 'multiselect',
        component: _mutil_select_multi_component__WEBPACK_IMPORTED_MODULE_3__["SelectMultiComponent"]
    }
];
var TestSelectRoutingModule = /** @class */ (function () {
    function TestSelectRoutingModule() {
    }
    TestSelectRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TestSelectRoutingModule);
    return TestSelectRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/select/test-select.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/select/test-select.module.ts ***!
  \****************************************************/
/*! exports provided: TestSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSelectModule", function() { return TestSelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _test_select_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-select-routing.module */ "./src/app/pages/select/test-select-routing.module.ts");
/* harmony import */ var inet_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inet-ui */ "./node_modules/inet-ui/fesm5/inet-ui.js");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/pages/select/tags/tags.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mutil_select_multi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mutil/select-multi.component */ "./src/app/pages/select/mutil/select-multi.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TestSelectModule = /** @class */ (function () {
    function TestSelectModule() {
    }
    TestSelectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_4__["SelectTagsComponent"], _mutil_select_multi_component__WEBPACK_IMPORTED_MODULE_6__["SelectMultiComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                inet_ui__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _test_select_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestSelectRoutingModule"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], TestSelectModule);
    return TestSelectModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-select-test-select-module.js.map