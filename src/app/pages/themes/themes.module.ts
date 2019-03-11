import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ThemesRoutingModule} from './themes-routing.module';
import {ThemeListComponent} from './theme-list/theme-list.component';
import {ExampleCommonModule} from "../common/example-common.module";

@NgModule({
    declarations: [ThemeListComponent],
    imports: [
        CommonModule,
        ExampleCommonModule,
        ThemesRoutingModule
    ]
})
export class ThemesModule {
}
