import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-select-tags',
    templateUrl: './tags.component.html',
})
export class SelectTagsComponent implements OnInit {

    companies: any[] = [];
    loading = false;
    companiesNames = ['iNet Solutions', 'Apple Inc', 'Alphabet Inc'];

    tag1: any = 'iNet';
    tag2: any;
    tag3: any;

    ngOnInit() {
        this.companiesNames.forEach((c, i) => {
            this.companies.push({id: i, name: c});
        });
    }

    addTag(name) {
        return {name: name, tag: true};
    }

    addTagPromise(name) {
        return new Promise((resolve) => {
            this.loading = true;
            setTimeout(() => {
                resolve({id: 5, name: name, valid: true});
                this.loading = false;
            }, 1000);
        });
    }
}
