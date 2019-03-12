import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    static instance: LayoutService;
    // Observable change theme
    private emitChangeTheme = new Subject<string>();
    public onChangeTheme: Observable<string> = this.emitChangeTheme.asObservable();
    private currentTheme = 'theme-silver';

    constructor() {
        return LayoutService.instance = LayoutService.instance || this;
    }

    changeTheme(theme: string) {
        if (theme) {
            this.emitChangeTheme.next(theme);
            this.currentTheme = theme;
        }
    }

    getTheme(): string {
        return this.currentTheme;
    }
}
