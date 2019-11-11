import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService, Person} from "../../data/data.service";
import {CustomValidators} from "ng2-validation";

@Component({
    selector: 'app-form-elements',
    templateUrl: './form-elements.component.html',
    styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {
    demoForm: FormGroup;
    person: Developer = new Developer();
    data: Developer;
    color: '#000';
    constructor(private fb: FormBuilder, private dataService: DataService) {
    }

    ngOnInit() {
        this.demoForm = this.fb.group({
            name: [null, Validators.required],
            status: [],
            phone: [],
            gender: [],
            email: [null, Validators.compose([CustomValidators.email])],
        });

        this.dataService.getPeople().subscribe((items: any) => {
            this.person = items[Math.floor(Math.random() * items.length)] as Developer;
            this.demoForm.controls['name'].setValue(this.person.name);
            this.demoForm.controls['status'].setValue(this.person.isActive);
            this.demoForm.controls['gender'].setValue(this.person.gender);
            this.demoForm.controls['phone'].setValue(this.person.phone);
            this.demoForm.controls['email'].setValue(this.person.email);
        });

        this.demoForm.valueChanges.subscribe(v => {
            console.log('[onChange]', v);
            this.data = {...this.person, ...v};
        });

    }

}

export class Developer implements Person {
    id: string;
    isActive: boolean;
    age: number;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    disabled?: boolean;
    picture: string;
    constructor(name?: string) {
        this.name = name;
    }
}
