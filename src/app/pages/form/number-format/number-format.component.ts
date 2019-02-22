import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NumberUtilsService} from "inet-ui";
export const DOT_SEPARATOR = '.';

@Component({
    selector: 'app-number-format',
    templateUrl: './number-format.component.html',
    styleUrls: ['./number-format.component.scss']
})
export class NumberFormatComponent implements OnInit {
    demoForm: FormGroup;
    data: any = {};
    constructor(private fb: FormBuilder,
                private numberUtilsService: NumberUtilsService) {
    }

    ngOnInit() {
        this.demoForm = this.fb.group({
            price: [null, Validators.required],
            numberSeparator: [null, null]
        });

        this.demoForm.controls['price'].setValue(2500000);
        this.demoForm.controls['numberSeparator'].setValue(300000);


        this.demoForm.valueChanges.subscribe(v => {
            for (const key in v) {
                switch (key) {
                    case 'numberSeparator':
                        this.data[key] = this.numberUtilsService.removeSeparator(v[key], DOT_SEPARATOR);
                        break;
                    default:
                        this.data[key] =  this.numberUtilsService.removeSeparator(v[key]);
                        break;
                }
            }
        });
        //  trigger change
        this.demoForm.updateValueAndValidity({ onlySelf: false, emitEvent: true });
    }

    getDotSeparator(): string {
        return DOT_SEPARATOR;
    }

}
