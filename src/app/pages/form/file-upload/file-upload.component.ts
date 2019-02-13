import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
    frmFileUpload: FormGroup;
    @ViewChild('fileUpload') fileUpload: ElementRef;
    fileName: string;
    url: string;
    data: any;
    @Input() files: Array<any> = [];

    constructor(private fb: FormBuilder) {
        this.files = [{
            "name": "Angular Package Format.docx",
            "contentUuid": "5bff9faa291385169085e156",
            "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "uuid": "5bff9fb3291385169085e15a"
        }, {
            "name": "run.png",
            "contentUuid": "5bff9faa291385169085e157",
            "mimetype": "image/png",
            "uuid": "5bff9fb3291385169085e15b"
        }, {
            "name": "sample.pdf",
            "contentUuid": "5bff9faa291385169085e158",
            "mimetype": "application/pdf",
            "uuid": "5bff9fb3291385169085e15c"
        }];
    }

    ngOnInit() {
        this.frmFileUpload = this.fb.group({
            fileUpload: [null, Validators.required]
        });

        this.frmFileUpload.valueChanges.subscribe(v => {
            console.log('[onChange]', v);
            this.data = {...v};
        });

    }

    changeFile($event) {
        const files = $event.target.files;
        if (files.length > 0) {
            const image = files[0];
            if (image) {
                this.fileName = image['name'];
                const reader = new FileReader();
                reader.onload = (e: any) => {
                    image.url = e.target.result;
                    this.url = image.url;
                };
                reader.readAsDataURL(image);
            }
        } else {
            this.url = null;
        }
    }

    clearForm() {
        if (this.fileUpload.nativeElement.value) {
            this.fileUpload.nativeElement.value = '';
            this.fileName = '';
            this.data = null;
        }
    }

    onRemove($event: any) {
        console.log('[onRemove]', $event);

        this.files.forEach((item, index) => {
            if (item.uuid === $event['uuid']) {
                this.files.splice(index, 1);
            }
        });
    }

    onUpload(files: Array<any>) {
        this.files = this.files.concat(files);
    }
}
