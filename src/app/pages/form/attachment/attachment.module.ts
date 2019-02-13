import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttachmentComponent} from './attachment.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap';
import {DialogModule, FileModule, FileUploadModule} from 'inet-ui';

@NgModule({
    imports: [
        CommonModule,
        FileUploadModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        DialogModule,
        FileModule
    ],
    exports: [
        AttachmentComponent
    ],
    declarations: [AttachmentComponent]
})
export class AttachmentModule {
}
