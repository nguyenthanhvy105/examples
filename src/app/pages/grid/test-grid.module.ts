import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestGridRoutingModule} from './test-grid-routing.module';
import {GridBasicComponent} from './grid-basic/grid-basic.component';
import {DialogModule, GridModule} from "inet-ui";
import { GridEditableComponent } from './grid-editable/grid-editable.component';
import { GridGroupingComponent } from './grid-grouping/grid-grouping.component';
import {AngularSlickgridModule} from "angular-slickgrid";
import {ExampleCommonModule} from "../common/example-common.module";

@NgModule({
    declarations: [GridBasicComponent, GridEditableComponent, GridGroupingComponent],
    imports: [
        CommonModule,
        TestGridRoutingModule,
        ExampleCommonModule,
        GridModule,
        DialogModule,
        AngularSlickgridModule.forRoot()

    ]
})
export class TestGridModule {
}
