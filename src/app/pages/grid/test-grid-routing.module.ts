import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GridBasicComponent} from "./grid-basic/grid-basic.component";
import {GridEditableComponent} from "./grid-editable/grid-editable.component";
import {GridGroupingComponent} from "./grid-grouping/grid-grouping.component";

const routes: Routes = [
    {path: '', redirectTo: 'basic', pathMatch: 'full'},
    {
        path: 'basic',
        component: GridBasicComponent
    },
    {
        path: 'editable',
        component: GridEditableComponent
    },
    {
        path: 'grouping',
        component: GridGroupingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestGridRoutingModule {
}
