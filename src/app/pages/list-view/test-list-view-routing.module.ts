import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListViewBasicComponent} from "./list-view-basic/list-view-basic.component";

const routes: Routes = [
    {path: '', redirectTo: 'basic', pathMatch: 'full'},
    {
        path: 'basic',
        component: ListViewBasicComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestListViewRoutingModule {
}
