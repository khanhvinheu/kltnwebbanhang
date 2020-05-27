import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DanhMuc } from 'src/app/models/danhmuc';
import { Subscription } from 'rxjs';
import { DanhmucService } from '../service/danhmuc.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../service/confirm-dialog.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { DanhmucAddComponent } from './danhmuc-add/danhmuc-add.component';
import { DanhmucEditComponent } from './danhmuc-edit/danhmuc-edit.component';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.sass']
})
export class DanhMucComponent implements OnInit,OnDestroy {
  expand = false;
  columnsToDisplay = this.expand
        ? ['id', 'ten', 'parent', 'hinh'  ]
        : ['id', 'ten', 'parent', 'hinh' ];
  danhmucs: DanhMuc[] = [];
  subscriptions: Subscription[] = [];
  dataSource;
  isLoading = false;
  //paginator: any;
 // sort: any;
  constructor(
        private danhMucService: DanhmucService,
        public dialog: MatDialog,
        private confirmDialogService: ConfirmDialogService
  ) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  ngOnInit(): void {
      this.loadData();   
      this.danhMucService.getAll();      
   // this.onExpand();
  }
  getDanhMuc(id: number) {
    let sp = null;
    this.danhmucs.forEach(e => {
        if (e.id === id) {
            sp = e;
            return false;
        }
    });
    return sp;
}
loadData() {
    this.subscriptions.push(
        this.danhMucService.itemsObs.subscribe(
            data => {
                this.danhmucs = data;
                this.dataSource = new MatTableDataSource<DanhMuc>(
                    this.danhmucs
                );
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                this.isLoading = false;
            },
            () => {}
        ),
        this.danhMucService.isLoadingObs.subscribe(data => {
            this.isLoading = data;
        })
    );
}

ngOnDestroy() {
    if (this.subscriptions) {
        this.subscriptions.forEach(e => e.unsubscribe());
    }
}
onDelete(danhmuc: DanhMuc) {
    this.confirmDialogService.openDialog().then(result => {
        if (result) {
            this.danhMucService.delete(danhmuc);       
        }
    });
    
    

}
applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
onExpand() {
    this.expand = !this.expand;
    this.columnsToDisplay = this.expand
        ? [
              'id',
              'ten',
              'parent',
              'hinh',
              // 'created_at',
              // 'updated_at',
              'action'
          ]
        : ['id', 'ten', 'parent', 'hinh', 'action'];
}
onAdd() {
    this.dialog.open(DanhmucAddComponent, {
        width: '400px'
    });
}
onEdit(item) {
    this.dialog.open(DanhmucEditComponent, {
        width: '400px',
        data: item
    });
}
trackByFn(index, item) {
    return index;
}

}
