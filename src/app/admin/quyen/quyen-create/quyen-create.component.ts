import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Quyen } from 'src/app/models/quyen';
import { QuyenComponent } from '../quyen.component';
import { ResultValidatorService } from '../../service/result-validator.service';
import { QuyenService } from '../../service/quyen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quyen-create',
  templateUrl: './quyen-create.component.html',
  styleUrls: ['./quyen-create.component.sass']
})
export class QuyenCreateComponent implements OnInit, OnDestroy {

  is_loading = false;
    subscriptions: Subscription[] = [];
    Quyen: Quyen = null;
    frm: FormGroup;
    constructor(
        private quyenService: QuyenService,
        private resultValidatorService: ResultValidatorService,
        private _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<QuyenComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog: Quyen
    ) {}
    ngOnInit() {
        this.createForm();
        this.loadData();
    }
    loadData() {
        this.subscriptions.push(
            this.quyenService.isLoadingObs.subscribe(data => {
                this.is_loading = data;
            })
        );
    }
    createForm() {
        this.frm = this._formBuilder.group({
          tenQuyen: [
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(50),
                    Validators.pattern(
                        '[ a-zA-Z1-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ' +
                            'ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ]*'
                    )
                ]
            ]
        });
    }
    onSubmitForm() {
        this.is_loading = true;
        this.quyenService.createNew(this.frm.value);
    }
    onValidator(controlName: string, status?: boolean) {
        return this.resultValidatorService.getResult(
            controlName,
            this.frm,
            status
        );
    }
    onValidatorBorderColor(controlName: string) {
        return this.resultValidatorService.getBorderColor(
            controlName,
            this.frm
        );
    }
    onValidatorTextColor(controlName: string) {
        return this.resultValidatorService.getTextColor(controlName, this.frm);
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.forEach(e => {
                e.unsubscribe();
            });
        }
    }

}
