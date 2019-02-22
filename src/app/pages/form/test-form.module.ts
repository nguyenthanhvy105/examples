import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestFormRoutingModule} from './test-form-routing.module';
import {FormElementsComponent} from './form-elements/form-elements.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FileUploadComponent } from './file-upload/file-upload.component';
import {AttachmentModule} from "./attachment/attachment.module";
import { NumberFormatComponent } from './number-format/number-format.component';
import {NumberFormatModule} from "inet-ui";

@NgModule({
    declarations: [FormElementsComponent, FileUploadComponent, NumberFormatComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TestFormRoutingModule,
        AttachmentModule,
        NumberFormatModule
    ]
})
export class TestFormModule {
}
