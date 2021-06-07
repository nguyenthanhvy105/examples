import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService, Person} from "../../data/data.service";
import {NotificationService} from "inet-core";

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
    constructor(private fb: FormBuilder,
                private dataService: DataService,
                private notification: NotificationService) {
    }

    ngOnInit() {
        this.demoForm = this.fb.group({
            name: [null, Validators.required],
            status: [],
            phone: [],
            gender: [],
            email: [null, Validators.compose([Validators.required, Validators.email])],
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
            this.data = {...this.person, ...v};
        });

    }

    showMessage(type: string = 'success') {
        this.notification.showMessage('A primarily informational message', type, type.toUpperCase());
    }

    showMessageWithConfig() {
        const config = {disableTimeOut: true, enableHtml: true};
        this.notification.showMessage(`Toast message with config: <br>${JSON.stringify(config)}`, 'info', 'Toast title',
            config
        );
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
