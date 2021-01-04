import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ConfirmDialogComponent, DialogAction, FileUploader, ResponseUploadFile} from 'inet-ui';
import {HttpClientService} from 'inet-core';

@Component({
    selector: 'app-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {

    @ViewChild(ConfirmDialogComponent) confirmDialog: ConfirmDialogComponent;
    @Input() attachments: Array<any> = [];
    @Output('onUpload') onUpload = new EventEmitter<Array<Attachment>>();
    @Output('onRemove') onRemove = new EventEmitter<Attachment>();

    confirmMessage = '';
    uploader: FileUploader;

    private url = {
        upload: iNet.getPUrl('docx/upload'),
        download: iNet.getPUrl('docx/download')
    };

    constructor(
        private http: HttpClientService,
        private router: Router,
        private location: Location,
    ) {

    }

    ngOnInit() {
        this.uploader = new FileUploader({
            url: this.url.upload,
            method: 'POST',
            itemAlias: 'FileUpload',
            autoUpload: true
        });

        this.uploader.response.subscribe(res => {
            const response = JSON.parse(res) as ResponseUploadFile;
            const files: Array<Attachment> = [];
            if (response.elements) {
                for (const file of response.elements) {
                    files.push(new Attachment(file.uuid, file.name, file.mimetype));
                }
            }
            this.onUpload.emit(files);
        });

        this.uploader.onCompleteItem = function (item, response, status, headers) {
            item.remove();
        };

        const modalDeleteActions = [
            new DialogAction('Đồng ý', 'btn-danger', 'fa fa-check', this.onDelete.bind(this)),
            new DialogAction('Đóng', 'btn-cancel', 'fa fa-times', this.confirmDialog.hide)
        ];

        this.confirmDialog.setActions(modalDeleteActions);

    }

    onDelete() {
        const attachment = new Attachment();
        Object.assign(attachment, this.confirmDialog.getData());
        this.confirmDialog.hide();
        this.onRemove.emit(attachment);
    }

    removeAttachment(att: Attachment) {
        this.confirmMessage = `Bạn có chắc là đồng ý muốn xóa tệp <b>${att.name}</b> không ? `;
        this.confirmDialog.setData(att);
        this.confirmDialog.show();
    }

    download(att: Attachment) {
        this.http.downloadFile(this.url.download, {docID: att.contentUuid});
    }

    back() {
        this.location.back();
    }
}

export class Attachment {
    private uuid: string;
    contentUuid: string;
    name: string;
    mimetype: string;

    constructor(
        contentUuid?: string,
        name?: string,
        mimetype?: string
    ) {
        this.contentUuid = contentUuid;
        this.name = name;
        this.mimetype = mimetype;
    }
}
