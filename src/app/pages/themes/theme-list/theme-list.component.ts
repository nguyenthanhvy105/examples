import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../../common/layout.service";

@Component({
    selector: 'app-theme-list',
    templateUrl: './theme-list.component.html',
    styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {
    currentTheme: string;
    constructor(private layoutService: LayoutService) {
    }

    ngOnInit() {
        this.currentTheme = this.layoutService.getTheme();
    }

    changeTheme(theme: string) {
        this.layoutService.changeTheme(theme);
        this.currentTheme = theme;
    }
}
