(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-test-form-module"],{

/***/ "./src/app/pages/form/attachment/attachment.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/form/attachment/attachment.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"fileInput.click()\" class=\"btn btn-success btn-sm\" style=\"margin-bottom: 10px;\">\n    <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Chọn tài liệu đính kèm...\n</button>\n<span class=\"attachment-zone\">\n  <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple/>\n</span>\n<table class=\"table\" *ngIf=\"attachments?.length>0 || uploader.queue?.length>0\">\n    <thead>\n    <tr>\n        <th style=\"width: 20px\"></th>\n        <th>Tên tài liệu</th>\n        <th style=\"width: 120px;\"></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let attachment of attachments\">\n        <td><img [src]=\"attachment.name | fileIcon\" class=\"file-icon\"></td>\n        <td><strong><a href=\"javascript:;\" appViewer\n                       [docId]=\"attachment.contentUuid\"\n                       [ext]=\"attachment.name | fileExt\"\n                       (click)=\"download(attachment)\"\n                       [files]=\"attachments\">{{attachment.name }}</a></strong></td>\n        <td nowrap class=\"text-right\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\"\n                    (click)=\"removeAttachment(attachment)\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n        </td>\n    </tr>\n    <tr *ngFor=\"let item of uploader.queue\">\n        <td colspan=\"3\" *ngIf=\"uploader.options.isHTML5\">\n            <div class=\"progress\" style=\"margin-bottom: 0;\">\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n            </div>\n        </td>\n    </tr>\n    </tbody>\n\n</table>\n\n<app-confirm-dialog iconCls=\"icon-trash\"\n                    title=\"Xóa ?\"\n                    [content]=\"confirmMessage\">\n</app-confirm-dialog>\n\n"

/***/ }),

/***/ "./src/app/pages/form/attachment/attachment.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/form/attachment/attachment.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attachment-zone {\n  visibility: hidden;\n  position: absolute;\n  overflow: hidden;\n  width: 0;\n  height: 0;\n  border: none;\n  margin: 0;\n  padding: 0; }\n\nimg.file-icon {\n  width: 20px;\n  height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9uZ3V5ZW50aGFuaHZ5MTA1L2V4YW1wbGVzL3NyYy9hcHAvcGFnZXMvZm9ybS9hdHRhY2htZW50L2F0dGFjaG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vYXR0YWNobWVudC9hdHRhY2htZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0dGFjaG1lbnQtem9uZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW1nLmZpbGUtaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/form/attachment/attachment.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/form/attachment/attachment.component.ts ***!
  \***************************************************************/
/*! exports provided: AttachmentComponent, Attachment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentComponent", function() { return AttachmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attachment", function() { return Attachment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var inet_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inet-ui */ "./node_modules/inet-ui/esm5/inet-ui.js");
/* harmony import */ var inet_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inet-core */ "./node_modules/inet-core/esm5/inet-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AttachmentComponent = /** @class */ (function () {
    function AttachmentComponent(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.attachments = [];
        this.onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmMessage = '';
        this.url = {
            upload: iNet.getPUrl('docx/upload'),
            download: iNet.getPUrl('docx/download')
        };
    }
    AttachmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new inet_ui__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
            url: this.url.upload,
            method: 'POST',
            itemAlias: 'FileUpload',
            autoUpload: true
        });
        this.uploader.response.subscribe(function (res) {
            var response = JSON.parse(res);
            var files = [];
            if (response.elements) {
                for (var _i = 0, _a = response.elements; _i < _a.length; _i++) {
                    var file = _a[_i];
                    files.push(new Attachment(file.uuid, file.name, file.mimetype));
                }
            }
            _this.onUpload.emit(files);
        });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            item.remove();
        };
        var modalDeleteActions = [
            new inet_ui__WEBPACK_IMPORTED_MODULE_3__["DialogAction"]('Đồng ý', 'btn-danger', 'fa fa-check', this.onDelete.bind(this)),
            new inet_ui__WEBPACK_IMPORTED_MODULE_3__["DialogAction"]('Đóng', 'btn-cancel', 'fa fa-times', this.confirmDialog.hide)
        ];
        this.confirmDialog.setActions(modalDeleteActions);
    };
    AttachmentComponent.prototype.onDelete = function () {
        var attachment = new Attachment();
        Object.assign(attachment, this.confirmDialog.getData());
        this.confirmDialog.hide();
        this.onRemove.emit(attachment);
    };
    AttachmentComponent.prototype.removeAttachment = function (att) {
        this.confirmMessage = "B\u1EA1n c\u00F3 ch\u1EAFc l\u00E0 \u0111\u1ED3ng \u00FD mu\u1ED1n x\u00F3a t\u1EC7p <b>" + att.name + "</b> kh\u00F4ng ? ";
        this.confirmDialog.setData(att);
        this.confirmDialog.show();
    };
    AttachmentComponent.prototype.download = function (att) {
        this.http.downloadFile(this.url.download, { docID: att.contentUuid });
    };
    AttachmentComponent.prototype.back = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(inet_ui__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]),
        __metadata("design:type", inet_ui__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"])
    ], AttachmentComponent.prototype, "confirmDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AttachmentComponent.prototype, "attachments", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onUpload'),
        __metadata("design:type", Object)
    ], AttachmentComponent.prototype, "onUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onRemove'),
        __metadata("design:type", Object)
    ], AttachmentComponent.prototype, "onRemove", void 0);
    AttachmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attachment',
            template: __webpack_require__(/*! ./attachment.component.html */ "./src/app/pages/form/attachment/attachment.component.html"),
            styles: [__webpack_require__(/*! ./attachment.component.scss */ "./src/app/pages/form/attachment/attachment.component.scss")]
        }),
        __metadata("design:paramtypes", [inet_core__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AttachmentComponent);
    return AttachmentComponent;
}());

var Attachment = /** @class */ (function () {
    function Attachment(contentUuid, name, mimetype) {
        this.contentUuid = contentUuid;
        this.name = name;
        this.mimetype = mimetype;
    }
    return Attachment;
}());



/***/ }),

/***/ "./src/app/pages/form/attachment/attachment.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/form/attachment/attachment.module.ts ***!
  \************************************************************/
/*! exports provided: AttachmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentModule", function() { return AttachmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _attachment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachment.component */ "./src/app/pages/form/attachment/attachment.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var inet_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inet-ui */ "./node_modules/inet-ui/esm5/inet-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AttachmentModule = /** @class */ (function () {
    function AttachmentModule() {
    }
    AttachmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                inet_ui__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                inet_ui__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
                inet_ui__WEBPACK_IMPORTED_MODULE_5__["FileModule"]
            ],
            exports: [
                _attachment_component__WEBPACK_IMPORTED_MODULE_2__["AttachmentComponent"]
            ],
            declarations: [_attachment_component__WEBPACK_IMPORTED_MODULE_2__["AttachmentComponent"]]
        })
    ], AttachmentModule);
    return AttachmentModule;
}());



/***/ }),

/***/ "./src/app/pages/form/file-upload/file-upload.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/form/file-upload/file-upload.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-layout\">\n    <div class=\"nav-fixed-top cp-toolbar\">\n        <h5><i class=\"fa fa-cube\" aria-hidden=\"true\"></i> File Upload</h5>\n    </div>\n    <div class=\"cp-content\">\n        <div class=\"row-fluid pt-2\">\n            <form [formGroup]=\"frmFileUpload\">\n                <div class=\"row-fluid\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group row\">\n                            <label class=\"control-label col-form-label col-sm-4 font-weight-bold\">\n                                File Input :\n                            </label>\n                            <div class=\"col-sm-8 pl-0\">\n                                <label class=\"i-file-input\">\n                                    <input #fileUpload [formControl]=\"frmFileUpload.controls['fileUpload']\" required\n                                           name=\"fileUpload\" type=\"file\" accept=\"image/*\" (change)=\"changeFile($event)\"\n                                           class=\"form-control form-control-sm col-xs-12 col-sm-12\">\n                                    <span class=\"i-file-container\" [ngClass]=\"{'selected': fileName}\"\n                                          [attr.data-title]=\"'Choose...'\">\n                                                            <span class=\"i-file-name\"\n                                                                  [attr.data-title]=\"fileName || 'No File...'\">\n                                                                <i class=\"file-icon fa fa-upload\"></i>\n                                                            </span>\n                                                        </span>\n                                    <a class=\"remove\" *ngIf=\"fileName\" href=\"javascript:;\" (click)=\"clearForm()\">\n                                        <i class=\"fa fa-times\"></i>\n                                    </a>\n                                </label>\n                                <p class=\"pt-2\" *ngIf=\"data\">{{data | json}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row-fluid\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group row\">\n                            <label class=\"control-label col-form-label col-sm-2 font-weight-bold\">\n                                Custom Upload :\n                            </label>\n                            <div class=\"col-sm-10 pl-0\">\n                                <app-attachment [attachments]=\"files\" (onUpload)=\"onUpload($event)\" (onRemove)=\"onRemove($event)\"></app-attachment>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/form/file-upload/file-upload.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/form/file-upload/file-upload.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/form/file-upload/file-upload.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/form/file-upload/file-upload.component.ts ***!
  \*****************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(fb) {
        this.fb = fb;
        this.files = [];
        this.files = [{
                "name": "Angular Package Format.docx",
                "contentUuid": "5bff9faa291385169085e156",
                "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "uuid": "5bff9fb3291385169085e15a"
            }, {
                "name": "run.png",
                "contentUuid": "5bff9faa291385169085e157",
                "mimetype": "image/png",
                "uuid": "5bff9fb3291385169085e15b"
            }, {
                "name": "sample.pdf",
                "contentUuid": "5bff9faa291385169085e158",
                "mimetype": "application/pdf",
                "uuid": "5bff9fb3291385169085e15c"
            }];
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.frmFileUpload = this.fb.group({
            fileUpload: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.frmFileUpload.valueChanges.subscribe(function (v) {
            console.log('[onChange]', v);
            _this.data = __assign({}, v);
        });
    };
    FileUploadComponent.prototype.changeFile = function ($event) {
        var _this = this;
        var files = $event.target.files;
        if (files.length > 0) {
            var image_1 = files[0];
            if (image_1) {
                this.fileName = image_1['name'];
                var reader = new FileReader();
                reader.onload = function (e) {
                    image_1.url = e.target.result;
                    _this.url = image_1.url;
                };
                reader.readAsDataURL(image_1);
            }
        }
        else {
            this.url = null;
        }
    };
    FileUploadComponent.prototype.clearForm = function () {
        if (this.fileUpload.nativeElement.value) {
            this.fileUpload.nativeElement.value = '';
            this.fileName = '';
            this.data = null;
        }
    };
    FileUploadComponent.prototype.onRemove = function ($event) {
        var _this = this;
        console.log('[onRemove]', $event);
        this.files.forEach(function (item, index) {
            if (item.uuid === $event['uuid']) {
                _this.files.splice(index, 1);
            }
        });
    };
    FileUploadComponent.prototype.onUpload = function (files) {
        this.files = this.files.concat(files);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileUpload'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FileUploadComponent.prototype, "fileUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FileUploadComponent.prototype, "files", void 0);
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/pages/form/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/pages/form/file-upload/file-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/pages/form/form-elements/form-elements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/form/form-elements/form-elements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-layout\">\n    <div class=\"nav-fixed-top cp-toolbar\">\n        <h5><i class=\"fa fa-cube\" aria-hidden=\"true\"></i> Forms Elements</h5>\n    </div>\n    <div class=\"cp-content\">\n        <div class=\"row-fluid\">\n            <div class=\"col-sm-12\">{{person | json}}</div>\n        </div>\n        <hr>\n        <form [formGroup]=\"demoForm\">\n            <div class=\"row-fluid\">\n                <div class=\"col-sm-6\">\n                    <div class=\"form-group row\">\n                        <label class=\"control-label col-form-label col-sm-3 lbl-bold\">Name <i class=\"required\"></i>: </label>\n                        <div class=\"col-sm-9 pl-0\">\n                            <input [formControl]=\"demoForm.controls['name']\"\n                                   name=\"name\" class=\"form-control col-xs-12 col-sm-12\" maxlength=\"128\"\n                                   [ngClass]=\"{'is-invalid':demoForm.controls['name'].hasError('required') && demoForm.controls['name'].touched}\"\n                            />\n                            <div *ngIf=\"demoForm.controls['name'].hasError('required') && demoForm.controls['name'].touched\"\n                                 class=\"text-danger col-sm-12 pl-0\">\n                                <i class=\"fa fa-exclamation-triangle\"></i> Name field is required\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label col-form-label col-sm-3 lbl-bold\">Gender : </label>\n                        <div class=\"col-sm-9 pl-0\">\n                            <select name=\"gender\" [formControl]=\"demoForm.controls['gender']\" class=\"form-control col-xs-12 col-sm-12 \">\n                                <option value=\"male\">Male</option>\n                                <option value=\"female\">Female</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"control-label col-form-label col-sm-3 lbl-bold\">Phone : </label>\n                        <div class=\"col-sm-9 pl-0\">\n                            <input [formControl]=\"demoForm.controls['phone']\"\n                                   name=\"phone\" class=\"form-control col-xs-12 col-sm-12\" maxlength=\"64\"/>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"control-label col-form-label col-sm-3 lbl-bold\">Email : </label>\n                        <div class=\"col-sm-9 pl-0\">\n                            <input [formControl]=\"demoForm.controls['email']\"\n                                   name=\"email\" class=\"form-control col-xs-12 col-sm-12\" maxlength=\"64\"\n                                   type=\"email\"\n                                   [ngClass]=\"{'is-invalid': demoForm.controls['email'].hasError('pattern')\n                           && demoForm.controls['email'].touched}\" />\n                            <div *ngIf=\"demoForm.controls['email'].hasError('email') && demoForm.controls['email'].touched\"\n                                 class=\"pl-0 ml-0 col-xs-12 col-sm-12 text-danger\">\n                                <i class=\"fa fa-exclamation-triangle\"></i> Email must be a valid email\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"control-label col-form-label col-sm-3 lbl-bold\">Status : </label>\n                        <div class=\"col-sm-9 pl-0\">\n                            <input [formControl]=\"demoForm.controls['status']\" name=\"status\" class=\"switch switch-success\" type=\"checkbox\">\n                            <span class=\"lbl\"></span>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label col-form-label col-sm-3 lbl-bold\">Checkboxes : </label>\n                        <div class=\"col-sm-9 pl-0 pt-1\">\n                            <input type=\"checkbox\" id=\"checkbox1\"><label class=\"mb-0 lbl\" for=\"checkbox1\">Choice 1</label>\n                            <input type=\"checkbox\" id=\"checkbox2\"><label class=\"ml-1 mb-0 lbl\" for=\"checkbox2\">Choice 2</label>\n                            <input type=\"checkbox\" id=\"checkbox3\" disabled><label class=\"ml-1 mb-0 lbl\" for=\"checkbox3\">Choice 2 (disabled)</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"control-label col-form-label col-sm-3 lbl-bold\">Radio : </label>\n                        <div class=\"col-sm-9 pl-0 pt-1\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                            <label class=\"lbl form-check-label\" for=\"inlineRadio1\">Option 1</label>\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n                            <label class=\"lbl form-check-label ml-1\" for=\"inlineRadio2\">Option 2</label>\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\" disabled>\n                            <label class=\"lbl form-check-label ml-1\" for=\"inlineRadio3\">Option 3 (disabled)</label>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </form>\n        <div class=\"row-fluid\">\n            <h5>FormData:</h5>\n            <div class=\"col-sm-12\">{{data | json}}</div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/form/form-elements/form-elements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/form/form-elements/form-elements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CSS3 on/off switches */\ninput[type=checkbox].switch {\n  width: 55px;\n  height: 25px; }\ninput[type=checkbox].switch + .lbl {\n  margin: 0 4px;\n  min-height: 24px; }\ninput[type=checkbox].switch + .lbl::before {\n  font-family: 'Open Sans';\n  content: \"ON\\a0\\a0\\a0\\a0\\a0\\a0\\a0\\a0\\a0OFF\";\n  color: #999;\n  text-shadow: 0 0 0 #999;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 17px;\n  height: 20px;\n  overflow: hidden;\n  border-radius: 12px;\n  background-color: #F5F5F5;\n  box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.15);\n  border: 1px solid #CCC;\n  text-align: left;\n  padding: 0;\n  width: 52px;\n  text-indent: -21px;\n  margin-right: 0;\n  transition: text-indent .3s ease;\n  top: auto; }\ninput[type=checkbox].switch + .lbl::after {\n  font-family: 'Open Sans';\n  content: 'III';\n  font-size: 12px;\n  font-weight: normal;\n  letter-spacing: 0;\n  color: #AAA;\n  text-shadow: none;\n  background-color: #FFF;\n  border-radius: 100%;\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n  text-align: center;\n  position: absolute;\n  top: -2px;\n  left: -3px;\n  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);\n  transition: left .3s ease; }\ninput[type=checkbox].switch:checked + .lbl::before {\n  text-indent: 8px;\n  color: #FFF;\n  text-shadow: 0 0 0 #FFF;\n  background-color: #8ab2c9;\n  border-color: #6a8ca8; }\ninput[type=checkbox].switch:checked + .lbl::after {\n  left: 34px;\n  background-color: #FFF;\n  color: #98A0A5; }\ninput[type=checkbox].switch.switch-success + .lbl {\n  position: relative; }\ninput[type=checkbox].switch.switch-success + .lbl::before {\n  font-family: FontAwesome;\n  content: \"\\f00d\";\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  box-shadow: none;\n  border-width: 0;\n  font-weight: lighter;\n  font-size: 16px;\n  border-radius: 12px;\n  display: inline-block;\n  background-color: #888;\n  color: #F2F2F2;\n  width: 52px;\n  height: 22px;\n  line-height: 21px;\n  text-indent: 32px;\n  transition: background 0.1s ease; }\ninput[type=checkbox].switch.switch-success + .lbl::after {\n  content: '';\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  position: absolute;\n  top: 2px;\n  left: 3px;\n  border-radius: 12px;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  width: 18px;\n  height: 18px;\n  text-align: center;\n  background-color: #F2F2F2;\n  border: 4px solid #F2F2F2;\n  transition: left 0.2s ease; }\ninput[type=checkbox].switch.switch-success:checked + .lbl::before {\n  content: \"\\f00c\";\n  text-indent: 6px;\n  color: #FFF;\n  border-color: #b7d3e5;\n  background-color: #2abb2a; }\ninput[type=checkbox].switch.switch-success:checked + .lbl::after {\n  left: 32px;\n  background-color: #FFF;\n  border: 4px solid #FFF;\n  text-shadow: 0 -1px 0 rgba(0, 200, 0, 0.25); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9uZ3V5ZW50aGFuaHZ5MTA1L2V4YW1wbGVzL25vZGVfbW9kdWxlcy9pbmV0LXVpL3Njc3MvX3N3aXRjaGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQUE7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHZDtFQUNFLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHdCQUF3QjtFQUN4QiwyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFFekIsaURBQWlEO0VBQ2pELHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUdmLGdDQUFnQztFQUNoQyxTQUFTLEVBQUE7QUFHWDtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFFViw4Q0FBMEM7RUFHMUMseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFHakIsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUd6QiwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBMEIsRUFBQTtBQUc1QjtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDJDQUEyQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybS9mb3JtLWVsZW1lbnRzL2Zvcm0tZWxlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDU1MzIG9uL29mZiBzd2l0Y2hlcyAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0uc3dpdGNoIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0uc3dpdGNoICsgLmxibCB7XG4gIG1hcmdpbjogMCA0cHg7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLnN3aXRjaCArIC5sYmw6OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgY29udGVudDogXCJPTlxcYTBcXGEwXFxhMFxcYTBcXGEwXFxhMFxcYTBcXGEwXFxhME9GRlwiO1xuICBjb2xvcjogIzk5OTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwICM5OTk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGhlaWdodDogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogNTJweDtcbiAgdGV4dC1pbmRlbnQ6IC0yMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IHRleHQtaW5kZW50IC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAuM3MgZWFzZTtcbiAgdG9wOiBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XS5zd2l0Y2ggKyAubGJsOjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgY29udGVudDogJ0lJSSc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjQUFBO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IC0zcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogbGVmdCAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogbGVmdCAuM3MgZWFzZTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0uc3dpdGNoOmNoZWNrZWQgKyAubGJsOjpiZWZvcmUge1xuICB0ZXh0LWluZGVudDogOHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YWIyYzk7XG4gIGJvcmRlci1jb2xvcjogIzZhOGNhODtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0uc3dpdGNoOmNoZWNrZWQgKyAubGJsOjphZnRlciB7XG4gIGxlZnQ6IDM0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGNvbG9yOiAjOThBMEE1O1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF0uc3dpdGNoLnN3aXRjaC1zdWNjZXNzICsgLmxibCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0uc3dpdGNoLnN3aXRjaC1zdWNjZXNzICsgLmxibDo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcZjAwZFwiO1xuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gIGNvbG9yOiAjRjJGMkYyO1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgdGV4dC1pbmRlbnQ6IDMycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjFzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMXMgZWFzZTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0uc3dpdGNoLnN3aXRjaC1zdWNjZXNzICsgLmxibDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBib3JkZXI6IDRweCBzb2xpZCAjRjJGMkYyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4ycyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBsZWZ0IDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjJzIGVhc2U7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLnN3aXRjaC5zd2l0Y2gtc3VjY2VzczpjaGVja2VkICsgLmxibDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMGNcIjtcbiAgdGV4dC1pbmRlbnQ6IDZweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1jb2xvcjogI2I3ZDNlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogICMyYWJiMmE7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLnN3aXRjaC5zd2l0Y2gtc3VjY2VzczpjaGVja2VkICsgLmxibDo6YWZ0ZXIge1xuICBsZWZ0OiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDRweCBzb2xpZCAjRkZGO1xuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAyMDAsIDAsIDAuMjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/form/form-elements/form-elements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/form/form-elements/form-elements.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormElementsComponent, Developer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsComponent", function() { return FormElementsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Developer", function() { return Developer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/data.service */ "./src/app/pages/data/data.service.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormElementsComponent = /** @class */ (function () {
    function FormElementsComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        this.person = new Developer();
    }
    FormElementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demoForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: [],
            phone: [],
            gender: [],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].email])],
        });
        this.dataService.getPeople().subscribe(function (items) {
            _this.person = items[Math.floor(Math.random() * items.length)];
            _this.demoForm.controls['name'].setValue(_this.person.name);
            _this.demoForm.controls['status'].setValue(_this.person.isActive);
            _this.demoForm.controls['gender'].setValue(_this.person.gender);
            _this.demoForm.controls['phone'].setValue(_this.person.phone);
            _this.demoForm.controls['email'].setValue(_this.person.email);
        });
        this.demoForm.valueChanges.subscribe(function (v) {
            console.log('[onChange]', v);
            _this.data = __assign({}, _this.person, v);
        });
    };
    FormElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-elements',
            template: __webpack_require__(/*! ./form-elements.component.html */ "./src/app/pages/form/form-elements/form-elements.component.html"),
            styles: [__webpack_require__(/*! ./form-elements.component.scss */ "./src/app/pages/form/form-elements/form-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], FormElementsComponent);
    return FormElementsComponent;
}());

var Developer = /** @class */ (function () {
    function Developer(name) {
        this.name = name;
    }
    return Developer;
}());



/***/ }),

/***/ "./src/app/pages/form/test-form-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/form/test-form-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TestFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFormRoutingModule", function() { return TestFormRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-elements/form-elements.component */ "./src/app/pages/form/form-elements/form-elements.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/pages/form/file-upload/file-upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'elements', pathMatch: 'full' },
    {
        path: 'elements',
        component: _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_2__["FormElementsComponent"]
    },
    {
        path: 'file-upload',
        component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"]
    }
];
var TestFormRoutingModule = /** @class */ (function () {
    function TestFormRoutingModule() {
    }
    TestFormRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TestFormRoutingModule);
    return TestFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/form/test-form.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/form/test-form.module.ts ***!
  \************************************************/
/*! exports provided: TestFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFormModule", function() { return TestFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _test_form_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-form-routing.module */ "./src/app/pages/form/test-form-routing.module.ts");
/* harmony import */ var _form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-elements/form-elements.component */ "./src/app/pages/form/form-elements/form-elements.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/pages/form/file-upload/file-upload.component.ts");
/* harmony import */ var _attachment_attachment_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attachment/attachment.module */ "./src/app/pages/form/attachment/attachment.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TestFormModule = /** @class */ (function () {
    function TestFormModule() {
    }
    TestFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_3__["FormElementsComponent"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__["FileUploadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _test_form_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestFormRoutingModule"],
                _attachment_attachment_module__WEBPACK_IMPORTED_MODULE_6__["AttachmentModule"]
            ]
        })
    ], TestFormModule);
    return TestFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-form-test-form-module.js.map