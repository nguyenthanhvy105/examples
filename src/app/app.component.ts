import {Component, OnInit} from '@angular/core';
import {LayoutService} from "./pages/common/layout.service";

@Component({
    selector: 'app-root',
    template: `
        <app-layout [theme]="theme" [homeRouterLink]="'home'" (routeChange)="onChange($event)"
                    [expandedMenu]="expandedMenu" [visibleMessageIcon]="false" [visibleAppIcon]="false"
                    [hideTogglerButton]="false" [hideSearch]="false"
                    [hideCompanyMenu]="true" [hideProfileMenu]="true">
            <ng-template #menu>
                <app-example-menu (onToggleMenu)="onToggleMenu($event)" [expandedMenu]="expandedMenu"></app-example-menu>
            </ng-template>
        </app-layout>`
})
export class AppComponent implements OnInit {
    theme: string;
    expandedMenu: boolean;
    constructor(private layoutService: LayoutService) {
        this.theme = this.layoutService.getTheme();
    }
    ngOnInit() {
        this.layoutService.onChangeTheme.subscribe(theme => {
            this.theme = theme;
        });
    }

    onToggleMenu($event) {
        this.expandedMenu = !this.expandedMenu;
    }

    onChange($event) {
        this.expandedMenu = $event['expandedMenu'];
    }
}
