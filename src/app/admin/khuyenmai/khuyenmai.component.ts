import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Khuyenmai } from 'src/app/models/khuyenmai';
import { Subscription } from 'rxjs';
import { ThongbaoService } from '../service/thongbao.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../service/confirm-dialog.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { KhuyenmaiService } from '../service/khuyenmai.service';
import { KhuyenmaiCreateComponent } from './khuyenmai-create/khuyenmai-create.component';
import { KhuyenmaiEditComponent } from './khuyenmai-edit/khuyenmai-edit.component';

@Component({
  selector: 'app-khuyenmai',
  templateUrl: './khuyenmai.component.html',
  styleUrls: ['./khuyenmai.component.sass']
})
export class KhuyenmaiComponent implements OnInit ,OnDestroy{

  title = 'KHUYẾN MÃI';
  expand = false;
  columnsToDisplay = this.expand
      ? ['id', 'ten','noiDungKm', 'created_at', 'updated_at', 'action']
      : ['id', 'ten', 'noiDungKm','action'];
  Khuyenmais: Khuyenmai[] = [];
  subscriptions: Subscription[] = [];
  dataSource;
  isLoading = false;
  constructor(
      private khuyenmaiService: KhuyenmaiService,
      private thongbaoService: ThongbaoService,
      public dialog: MatDialog,
      private confirmDialogService: ConfirmDialogService
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  ngOnInit() {
      this.khuyenmaiService.getAll();
      this.loadData();
  }
  loadData() {
      this.subscriptions.push(
          this.khuyenmaiService.itemsObs.subscribe(
              data => {
                  this.Khuyenmais = data;
                  this.dataSource = new MatTableDataSource<Khuyenmai>(
                      this.Khuyenmais
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
  onDelete(Khuyenmai: Khuyenmai) {
      this.confirmDialogService.openDialog().then(result => {
          if (result) {
              this.khuyenmaiService.delete(Khuyenmai);
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
      this.dialog.open(KhuyenmaiCreateComponent, {
          width: '400px'
      });
  }
  onEdit(item) {
      this.dialog.open(KhuyenmaiEditComponent, {
          width: '400px',
          data: item
      });
  }
  trackByFn(index, item) {
      return index;
  }

}
