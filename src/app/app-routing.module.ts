import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'select', loadChildren: './pages/select/test-select.module#TestSelectModule'},
    {path: 'grid', loadChildren: './pages/grid/test-grid.module#TestGridModule'},
    {path: 'list-view', loadChildren: './pages/list-view/test-list-view.module#TestListViewModule'},
    {path: 'form', loadChildren: './pages/form/test-form.module#TestFormModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
