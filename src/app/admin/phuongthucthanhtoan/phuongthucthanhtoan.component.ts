import { Component, OnInit, ViewChild } from '@angular/core';
import { Pttt } from 'src/app/models/pptt';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../service/confirm-dialog.service';
import { ThongbaoService } from '../service/thongbao.service';
import { Subscription } from 'rxjs';
import { PtttService } from '../service/pttt.service';
import { PtttCreateComponent } from './pttt-create/pttt-create.component';
import { PtttEditComponent } from './pttt-edit/pttt-edit.component';

@Component({
  selector: 'app-phuongthucthanhtoan',
  templateUrl: './phuongthucthanhtoan.component.html',
  styleUrls: ['./phuongthucthanhtoan.component.sass']
})
export class PhuongthucthanhtoanComponent implements OnInit {

 
  title = 'PHƯƠNG THỨC THANH TOÁN';
  expand = false;
  columnsToDisplay = this.expand
      ? ['id', 'ten', 'created_at', 'updated_at', 'action']
      : ['id', 'ten', 'action'];
  Pttts: Pttt[] = [];
  subscriptions: Subscription[] = [];
  dataSource;
  isLoading = false;
  constructor(
      private ptttService: PtttService,
      private thongbaoService: ThongbaoService,
      public dialog: MatDialog,
      private confirmDialogService: ConfirmDialogService
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  ngOnInit() {
      this.ptttService.getAll();
      this.loadData();
  }
  loadData() {
      this.subscriptions.push(
          this.ptttService.itemsObs.subscribe(
              data => {
                  this.Pttts = data;
                  this.dataSource = new MatTableDataSource<Pttt>(
                      this.Pttts
                  );
                  this.dataSource.paginator = this.paginator;
                  this.dataSource.sort = this.sort;
                  this.isLoading = false;
              },
              () => {}
          )
      );
  }
  ngOnDestroy(): void {
      if (this.subscriptions) {
          this.subscriptions.forEach(e => {
              e.unsubscribe();
          });
      }
  }
  onDelete(Pttt: Pttt) {
      this.confirmDialogService.openDialog().then(result => {
          if (result) {
              this.ptttService.delete(Pttt);
          }
      });
  }
  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onExpand() {
      this.expand = !this.expand;
      this.columnsToDisplay = this.expand
          ? ['id', 'ten', 'created_at', 'updated_at', 'action']
          : ['id', 'ten', 'action'];
  }
  onAdd() {
      this.dialog.open(PtttCreateComponent, {
          width: '400px'
      });
  }
  onEdit(item) {
      this.dialog.open(PtttEditComponent, {
          width: '400px',
          data: item
      });
  }
  trackByFn(index, item) {
      return index;
  }

}
