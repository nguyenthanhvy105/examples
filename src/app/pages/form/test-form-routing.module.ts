import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormElementsComponent} from "./form-elements/form-elements.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {NumberFormatComponent} from "./number-format/number-format.component";
import {DesignIconComponent} from "./design-icon/design-icon.component";

const routes: Routes = [
    {path: '', redirectTo: 'elements', pathMatch: 'full'},
    {
        path: 'elements',
        component: FormElementsComponent
    },
    {
        path: 'file-upload',
        component: FileUploadComponent
    },
    {
        path: 'number-format',
        component: NumberFormatComponent
    },
  {
    path: 'design-icon',
    component: DesignIconComponent
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestFormRoutingModule {
}
