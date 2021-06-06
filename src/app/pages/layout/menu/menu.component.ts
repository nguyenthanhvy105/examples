import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Subscription} from "rxjs/Rx";
import {filter} from "rxjs/operators";

@Component({
    selector: 'app-example-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
    private _router: Subscription;
    @Input() expandedMenu = false;
    @Output() onToggleMenu = new EventEmitter<boolean>();

    constructor(private router: Router,
                private location: Location,
    ) {

    }

    ngOnInit() {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd)
        ).subscribe((e: NavigationEnd) => {
        });
    }

    ngOnDestroy(): void {
        this._router.unsubscribe();
    }

    back() {
        this.location.back();
    }

    toggleMenu($event) {
        this.onToggleMenu.emit(this.expandedMenu);
    }
}
