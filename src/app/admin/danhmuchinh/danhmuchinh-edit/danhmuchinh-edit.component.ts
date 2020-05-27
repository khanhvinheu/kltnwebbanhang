import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { DanhMucHinh } from 'src/app/models/danhmuchinh';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DanhmuchinhService } from '../../service/danhmuchinh.service';
import { ThongbaoService } from '../../service/thongbao.service';
import { ResultValidatorService } from '../../service/result-validator.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DanhmuchinhComponent } from '../danhmuchinh.component';
import { ImageValidator } from 'src/app/myvalidator/image.validator';

@Component({
    selector: 'app-danhmuchinh-edit',
    templateUrl: './danhmuchinh-edit.component.html',
    styleUrls: ['./danhmuchinh-edit.component.sass']
})
export class DanhmuchinhEditComponent implements OnInit, OnDestroy {

    subscriptions: Subscription[] = [];
    danhmuchinhs: DanhMucHinh[] = [];
    frm: FormGroup;
    sanphams = [];
    danhmuchinh: DanhMucHinh;
    filename = '';
    file: File;
    is_loading = false;
    constructor(
        private danhmuchinhService: DanhmuchinhService,
        private _formBuilder: FormBuilder,
        private thongBaoService: ThongbaoService,
        private resultValidatorService: ResultValidatorService,
        public dialogRef: MatDialogRef<DanhmuchinhComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog: any
    ) { }
    ngOnInit() {
        this.sanphams = this.dataDialog.sanphams;
        this.danhmuchinh = this.dataDialog.danhmuchinh;
        this.filename = this.danhmuchinh.hinhAnh;
        this.createForm();
        this.loadData();
    }
    loadData() {
        this.subscriptions.push(
            this.danhmuchinhService.isLoadingObs.subscribe(data => {
                this.is_loading = data;
            })
        );
    }
    createForm() {
        this.frm = this._formBuilder.group({
            id: [this.danhmuchinh.id, []],
            hinhAnh: [
                this.danhmuchinh.hinhAnh,
                [
                    Validators.required,
                    ImageValidator.imageSizeValidator(2000000),
                    ImageValidator.imageExtensionValidator([
                        'image/jpeg',
                        'image/png'
                    ])
                ]
            ],
            idSanPham: [this.danhmuchinh.idSanPham, []]
        });
    }
    onSubmitForm() {
    
        this.is_loading = true;
        const formData = new FormData();
        for (const key in this.frm.value) {
            formData.append(key, this.frm.value[key]);
        }
        this.danhmuchinhService.update(formData);
    }
    ngOnDestroy(): void {
        if (this.subscriptions) {
            this.subscriptions.forEach(subscription =>
                subscription.unsubscribe()
            );
        }
    }
    onFileChange(e) {
        if (e.target.files.length > 0) {
            this.file = e.target.files[0];
            this.filename = this.file.name;
            this.frm.get('hinhAnh').setValue(this.file);
        }
    }
    onReset() {
        this.frm.controls['id'].setValue(this.danhmuchinh.id);
        this.frm.controls['idSanPham'].setValue(this.danhmuchinh.idSanPham);
        this.frm.controls['hinhAnh'].setValue(this.danhmuchinh.hinhAnh);
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

}
