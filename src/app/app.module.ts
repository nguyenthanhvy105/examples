import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

/* App Root */
import {AppComponent} from './app.component';

import {CoreService, SecurityService} from 'inet-core';
import {environment} from '../environments/environment';
import {
    BootstrapLayoutModule, CloudTranslateModule,
    SocketService,
    WebsocketModule
} from 'inet-ui';
import {MenuComponent} from './pages/layout/menu/menu.component';
import {ExampleCommonModule} from "./pages/common/example-common.module";
import { HomeComponent } from './pages/home/home.component';
import {CustomTranslateLoader} from "./i18n/custom-translate-loader";

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CloudTranslateModule.forRoot({
            loader: CustomTranslateLoader
        }),
        ExampleCommonModule,
        BootstrapLayoutModule,
        WebsocketModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(private socketService: SocketService,
                private securityService: SecurityService,
                private coreService: CoreService) {
        this.coreService.setEnvironment(environment);
        /*
        if (this.coreService.getEnvironment().production) {
            setInterval(this.securityService.ping.bind(this), 2 * 60000);
        }
        */
    }
}
