import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {CoreModule} from "inet-core";
import {CloudTranslateModule, InterceptorModule} from 'inet-ui';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CloudTranslateModule,
        ModalModule.forRoot()
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        HttpClientModule,
        InterceptorModule,
        CoreModule,
        CloudTranslateModule
    ],
    providers: []
})
export class ExampleCommonModule {
}
