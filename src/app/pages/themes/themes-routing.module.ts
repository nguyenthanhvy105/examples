import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ThemeListComponent} from "./theme-list/theme-list.component";

const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {
        path: 'list',
        component: ThemeListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemesRoutingModule {
}
