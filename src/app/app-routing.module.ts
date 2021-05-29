import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'select', loadChildren: () => import('./pages/select/test-select.module').then(m => m.TestSelectModule)},
    {path: 'grid', loadChildren: () => import('./pages/grid/test-grid.module').then(m => m.TestGridModule)},
    {path: 'list-view', loadChildren: () => import('./pages/list-view/test-list-view.module').then(m => m.TestListViewModule)},
    {path: 'form', loadChildren: () => import('./pages/form/test-form.module').then(m => m.TestFormModule)},
    {path: 'themes', loadChildren: () => import('./pages/themes/themes.module').then(m => m.ThemesModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
