import {Component, OnInit} from '@angular/core';
import {LayoutService} from "./pages/common/layout.service";

@Component({
    selector: 'app-root',
    template: `
        <app-layout [theme]="theme" [homeRouterLink]="'home'">
            <ng-template #menu>
                <app-example-menu></app-example-menu>
            </ng-template>
        </app-layout>`
})
export class AppComponent implements OnInit {
    theme: string;
    constructor(private layoutService: LayoutService) {
        this.theme = this.layoutService.getTheme();
    }
    ngOnInit() {
        this.layoutService.onChangeTheme.subscribe(theme => {
            this.theme = theme;
        });
    }
}
