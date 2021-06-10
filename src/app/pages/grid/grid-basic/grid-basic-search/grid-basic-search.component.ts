import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-grid-basic-search',
    templateUrl: './grid-basic-search.component.html',
    styleUrls: ['./grid-basic-search.component.scss']
})
export class GridBasicSearchComponent implements OnInit {
    @Input() keyword;
    @Output() toggle = new EventEmitter<boolean>();
    @Output() search = new EventEmitter<any>();
    expandedAdvSearch = false;

    constructor() {
    }

    ngOnInit() {
      console.log('[GridBasicSearchComponent]--ngOnInit--');
    }

    onToggleSearch($event) {
        this.expandedAdvSearch = !this.expandedAdvSearch;
        this.toggle.emit(this.expandedAdvSearch);
    }

    onSearch($event) {
        this.search.emit({keyword: this.keyword});
    }
}
