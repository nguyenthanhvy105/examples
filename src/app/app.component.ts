import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
        <app-layout [homeRouterLink]="'home'">
            <ng-template #menu>
                <app-example-menu></app-example-menu>
            </ng-template>
        </app-layout>`
})
export class AppComponent {}
