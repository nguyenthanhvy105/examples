import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestFormRoutingModule} from './test-form-routing.module';
import {FormElementsComponent} from './form-elements/form-elements.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FileUploadComponent } from './file-upload/file-upload.component';
import {AttachmentModule} from "./attachment/attachment.module";

@NgModule({
    declarations: [FormElementsComponent, FileUploadComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TestFormRoutingModule,
        AttachmentModule
    ]
})
export class TestFormModule {
}
