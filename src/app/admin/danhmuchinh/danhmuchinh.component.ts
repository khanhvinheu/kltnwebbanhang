import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DanhMucHinh } from 'src/app/models/danhmuchinh';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmDialogService } from '../service/confirm-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { ThongbaoService } from '../service/thongbao.service';
import { DanhmuchinhService } from '../service/danhmuchinh.service';
import { SanphamService } from '../service/sanpham.service';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { DanhmuchinhCreateComponent } from './danhmuchinh-create/danhmuchinh-create.component';
import { DanhmuchinhEditComponent } from './danhmuchinh-edit/danhmuchinh-edit.component';


@Component({
    selector: 'app-danhmuchinh',
    templateUrl: './danhmuchinh.component.html',
    styleUrls: ['./danhmuchinh.component.sass']
})
export class DanhmuchinhComponent implements OnInit, OnDestroy {
    [x: string]: any;

    api_url = environment.api_img;
    expand = false;
    columnsToDisplay = this.expand
        ? ['id', 'hinh', 'sanpham', 'created_at', 'updated_at',]
        : ['id', 'hinh', 'sanpham',];
    danhmuchinhs: DanhMucHinh[] = [];
    subscriptions: Subscription[] = [];
    dataSource;
    isLoading = false;
    sanphams: any[] = [];
    constructor(
        private sanphamService: SanphamService,
        private danhmuchinhService: DanhmuchinhService,
        private thongbaoService: ThongbaoService,
        public dialog: MatDialog,
        private confirmDialogService: ConfirmDialogService
    ) { }
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatTable, { static: true }) table: MatTable<any>;
    ngOnInit() {
        this.danhmuchinhService.getAll();
        this.sanphamService.getAll();
        this.loadData();

    }
    loadData() {
        this.subscriptions.push(
            this.sanphamService.itemsObs.subscribe(data => {
                this.sanphams = data;
            }),
            this.danhmuchinhService.itemsObs.subscribe(
                data => {
                    this.danhmuchinhs = data;
                    this.dataSource = new MatTableDataSource<DanhMucHinh>(
                        this.danhmuchinhs
                    );
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    this.isLoading = false;
                },
                () => { }
            ),
            this.danhmuchinhService.isLoadingObs.subscribe(data => {
                this.isLoading = data;
            })
        );
    }
    ngOnDestroy(): void {
        if (this.subscriptions) {
            this.subscriptions.forEach(subscription =>
                subscription.unsubscribe()
            );
        }
    }
    onDelete(danhmuc: DanhMucHinh) {
        this.confirmDialogService.openDialog().then(result => {
            if (result) {
                this.danhmuchinhService.delete(danhmuc);
            }
        });
    }
    updateTable(danhmuc) {
        this.dataSource.data = this.dataSource.data.filter((value, key) => {
            return Number.parseInt(value.id) !== Number.parseInt(danhmuc.id);
        });
        this.table.renderRows();
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onExpand() {
        this.expand = !this.expand;
        this.columnsToDisplay = this.expand
            ? ['id', 'hinh', 'sanpham', 'created_at', 'updated_at', 'action']
            : ['id', 'hinh', 'sanpham', 'action'];
    }
    onAdd() {
        this.dialog.open(DanhmuchinhCreateComponent, {
            width: '400px',
            data: { sanphams: this.sanphams }
        });
    }
    onEdit(data) {
        this.dialog.open(DanhmuchinhEditComponent, {
            width: '400px',
            data: {
                sanphams: this.sanphams,
                danhmuchinh: data
            }
        });
    }
    trackByFn(index, item) {
        return index;
    }

}
