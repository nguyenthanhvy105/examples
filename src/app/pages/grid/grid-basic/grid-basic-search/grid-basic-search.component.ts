import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-grid-basic-search',
    templateUrl: './grid-basic-search.component.html',
    styleUrls: ['./grid-basic-search.component.scss']
})
export class GridBasicSearchComponent implements OnInit {
    @Input('keyword') key = '';
    @Output('onToggle') onToggle = new EventEmitter<boolean>();
    @Output('onSearch') onSearch = new EventEmitter<any>();
    expandedAdvSearch = false;

    constructor() {
    }

    ngOnInit() {
    }

    onToggleSearch($event) {
        this.expandedAdvSearch = !this.expandedAdvSearch;
        this.onToggle.emit(this.expandedAdvSearch);
    }

    search($event) {
        this.onSearch.emit({keyword: this.key});
    }
}
