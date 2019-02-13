import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestGridRoutingModule} from './test-grid-routing.module';
import {GridBasicComponent} from './grid-basic/grid-basic.component';
import {DialogModule, GridModule} from "inet-ui";
import { GridEditableComponent } from './grid-editable/grid-editable.component';

@NgModule({
    declarations: [GridBasicComponent, GridEditableComponent],
    imports: [
        CommonModule,
        GridModule,
        DialogModule,
        TestGridRoutingModule
    ]
})
export class TestGridModule {
}
