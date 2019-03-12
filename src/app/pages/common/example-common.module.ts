import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {CoreModule} from "inet-core";
import {CloudTranslateModule, InterceptorModule} from 'inet-ui';
import {HttpClientModule} from '@angular/common/http';
import {CustomTranslateLoader} from "../../i18n/custom-translate-loader";
import {LayoutService} from "./layout.service";

@NgModule({
    imports: [
        CloudTranslateModule.forRoot({
            loader: CustomTranslateLoader
        }),
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
    providers: [LayoutService]
})
export class ExampleCommonModule {
}
