import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService, Person} from "../../data/data.service";
import {map} from 'rxjs/operators';
import {Logger} from "inet-ui";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-select-multi',
    templateUrl: './select-mutil.component.html'
})

@Logger()
export class SelectMultiComponent implements OnInit {
    demoForm: FormGroup;

    people$1: Observable<any[]>;
    selectedPeople1 = [];

    people$2: Observable<any[]>;
    selectedPeople2 = [];

    people$3: Observable<any[]>;
    selectedPeople3 = [];

    people$4: Observable<any[]>;
    selectedPeople4 = [];

    people$5: Observable<any[]>;
    selectedPeople5 = [];
    disable = true;

    githubUsers$: Observable<any[]>;
    selectedUsers1 = [];
    selectedUsers2 = [];

    people: Person[] = [];
    selectedPeople = [];

    changed: boolean;

    constructor(private dataService: DataService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.demoForm = this.fb.group({
            tag1: [null, null],
            tag2: [null, null],
            tag3: [null, null],
            tag4: [null, null],
            tag5: [null, null],
            tag6: [null, null]
        });

        this.people$1 = this.dataService.getPeople();
        this.people$2 = this.dataService.getPeople();

        this.githubUsers$ = this.dataService.getGithubAccounts('anjm');

        this.selectedPeople1 = [
            {id: '5a15b13c663ea0af9ad0dae8', name: 'Mendoza Ruiz'},
            {id: "5a15b13ca51b0aaf8a99c05a", name: "Franklin James"}
        ];

        this.people$4 = this.dataService.getPeople();
        this.selectedPeople4 = [
            {id: '5a15b13c2340978ec3d2c0ea', name: 'Rochelle Estes', disabled: true},
            {id: '5a15b13c663ea0af9ad0dae8', name: 'Mendoza Ruiz'}
            // , { id: '5a15b13c728cd3f43cc0fe8a', name: 'Marquez Nolan', disabled: true }
        ];


        this.people$1.pipe(map(x => x.filter(y => !y.disabled)))
            .subscribe((res) => {
                this.people = res;
                this.selectedPeople = [this.people[0].id, this.people[1].id];
            });

    }

    changeModel() {
        if (!this.changed) {
            const newArr = [{id: '5a15b13cc3b9381ffcb1d6f7', name: 'Elsa Bradley'}];
            this.selectedPeople1 = [...this.selectedPeople1, ...newArr];
            this.changed = true;
        }
    }

    onChange($event) {
        console.log($event);
        this.changed = this.selectedPeople1.length !== 0 ;
    }

}


