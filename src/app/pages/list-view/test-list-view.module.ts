import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestListViewRoutingModule} from './test-list-view-routing.module';
import {ListViewBasicComponent} from './list-view-basic/list-view-basic.component';
import {ListViewModule} from "inet-ui";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [ListViewBasicComponent],
    imports: [
        CommonModule,
        TestListViewRoutingModule,
        FormsModule,
        ListViewModule
    ]
})
export class TestListViewModule {
}
