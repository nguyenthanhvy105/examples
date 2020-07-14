import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService, Person} from "../../data/data.service";
import {ListViewComponent} from "inet-ui";

@Component({
    selector: 'app-list-view-basic',
    templateUrl: './list-view-basic.component.html',
    styleUrls: ['./list-view-basic.component.scss']
})
export class ListViewBasicComponent implements OnInit {
    keyword = '';
    peoples: Person[] = [];
    selectedPeople: Person[] = [];

    @ViewChild(ListViewComponent) listView: ListViewComponent;

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.dataService.getPeople().subscribe((items: any) => {
            this.peoples = items;
        });


    }

    onListSelectionChanged(items, click?: boolean) {
        this.selectedPeople = items || [];
    }

    search($event: any) {

    }

    clear() {
        this.dataService.getPeople().subscribe((items: any) => {
            this.peoples = [items[5], items[6], items[10]];
            // this.listView.selectItem(1);
        });
    }

}
