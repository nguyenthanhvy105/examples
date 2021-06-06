import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestSelectRoutingModule} from "./test-select-routing.module";
import {SelectTagsComponent} from "./tags/tags.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectMultiComponent} from "./mutil/select-multi.component";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
    declarations: [
        SelectTagsComponent, SelectMultiComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TestSelectRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestSelectModule {
}
