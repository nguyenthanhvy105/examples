import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SelectTagsComponent} from "./tags/tags.component";
import {SelectMultiComponent} from "./mutil/select-multi.component";

const routes: Routes = [
    {path: '', redirectTo: 'tags', pathMatch: 'full'},
    {
        path: 'tags',
        component: SelectTagsComponent
    },
    {
        path: 'multiselect',
        component: SelectMultiComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestSelectRoutingModule {
}
