import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quyen } from 'src/app/models/quyen';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuyenService } from '../../service/quyen.service';
import { ResultValidatorService } from '../../service/result-validator.service';
import { QuyenComponent } from '../quyen.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quyen-edit',
  templateUrl: './quyen-edit.component.html',
  styleUrls: ['./quyen-edit.component.sass']
})
export class QuyenEditComponent implements OnInit, OnDestroy{

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
        this.Quyen = this.dataDialog;
        this.createForm();
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
            id: [this.Quyen.id],
            tenQuyen: [
                this.Quyen.tenQuyen,
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
        const formData = new FormData();
        formData.append('_method', 'put');
        for (const key in this.frm.value) {
            formData.append(key, this.frm.value[key]);
        }
        this.quyenService.update(formData);
        this.is_loading = false;
    }
    onReset() {
        this.frm.controls['tenQuyen'].setValue(this.Quyen.tenQuyen);
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
