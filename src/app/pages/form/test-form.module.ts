import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestFormRoutingModule} from './test-form-routing.module';
import {FormElementsComponent} from './form-elements/form-elements.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FileUploadComponent } from './file-upload/file-upload.component';
import {AttachmentModule} from "./attachment/attachment.module";
import { NumberFormatComponent } from './number-format/number-format.component';
import {NumberFormatModule} from "inet-ui";
import {ColorPickerModule} from "ngx-color-picker";
import { DesignIconComponent } from './design-icon/design-icon.component';

@NgModule({
    declarations: [FormElementsComponent, FileUploadComponent, NumberFormatComponent, DesignIconComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TestFormRoutingModule,
        AttachmentModule,
        NumberFormatModule,
        ColorPickerModule
    ]
})
export class TestFormModule {
}
