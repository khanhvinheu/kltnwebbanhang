import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChitietkhuyenmaiCreateComponent } from './chitietkhuyenmai-create/chitietkhuyenmai-create.component';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Chitietkhuyenmai } from 'src/app/models/chitietkhuyenmai';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmDialogService } from '../service/confirm-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { ThongbaoService } from '../service/thongbao.service';
import { ChitietkhuyenmaiService } from '../service/chitietkhuyenmai.service';
import { Subscription } from 'rxjs';
import { ChitietkhuyenmaiEditComponent } from './chitietkhuyenmai-edit/chitietkhuyenmai-edit.component';
import { SanphamService } from '../service/sanpham.service';
import { environment } from 'src/app/environments/environment.prod';
import { KhuyenmaiService } from '../service/khuyenmai.service';

@Component({
  selector: 'app-chitietkhuyenmai',
  templateUrl: './chitietkhuyenmai.component.html',
  styleUrls: ['./chitietkhuyenmai.component.sass']
})
export class ChitietkhuyenmaiComponent implements OnInit ,OnDestroy{

  [x: string]: any;

  api_url = environment.api_img;
  expand = false;
  columnsToDisplay = this.expand
      ? ['id',  'sanpham','khuyenmai','ngaybd','ngaykt', 'created_at', 'updated_at', ]
      : ['id',  'sanpham','khuyenmai','ngaybd','ngaykt',];
  Chitietkhuyenmais: Chitietkhuyenmai[] = [];
  subscriptions: Subscription[] = [];
  dataSource;
  isLoading = false;
  sanphams: any[] = [];
  khuyenmais: any[] = [];
  constructor(
      private sanphamService: SanphamService,
      private chitietkhuyenmaiService: ChitietkhuyenmaiService,
      private thongbaoService: ThongbaoService,
      private khuyenmaiService:KhuyenmaiService,
      public dialog: MatDialog,
      private confirmDialogService: ConfirmDialogService
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  ngOnInit() {
      this.chitietkhuyenmaiService.getAll();
      this.sanphamService.getAll();
      this.khuyenmaiService.getAll();   
      this.loadData();
      
  }
  loadData() {
      this.subscriptions.push(
          this.sanphamService.itemsObs.subscribe(data => {
              this.sanphams = data;                
          }),
          this.khuyenmaiService.itemsObs.subscribe(data => {
            this.khuyenmais = data;   
                         
          }),
          this.chitietkhuyenmaiService.itemsObs.subscribe(
              data => {
                  this.Chitietkhuyenmais = data;
                  this.dataSource = new MatTableDataSource<Chitietkhuyenmai>(
                      this.Chitietkhuyenmais
                  );
                  this.dataSource.paginator = this.paginator;
                  this.dataSource.sort = this.sort;
                  this.isLoading = false;
              },
              () => {}
          ),
          this.chitietkhuyenmaiService.isLoadingObs.subscribe(data => {
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
  onDelete(danhmuc: Chitietkhuyenmai) {
      this.confirmDialogService.openDialog().then(result => {
          if (result) {
              this.chitietkhuyenmaiService.delete(danhmuc);
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
          ? ['id',  'sanpham','khuyenmai','ngaybd','ngaykt', 'created_at', 'updated_at', 'action']
          : ['id',  'sanpham','khuyenmai','ngaybd','ngaykt', 'action'];
  }
  onAdd() {
      this.dialog.open(ChitietkhuyenmaiCreateComponent, {
          width: '400px',
          data: { sanphams: this.sanphams }
      });
  }
  onEdit(data) {
      this.dialog.open(ChitietkhuyenmaiEditComponent, {
          width: '400px',
          data: {
              sanphams: this.sanphams,
              Chitietkhuyenmai: data
          }
      });
  }
  trackByFn(index, item) {
      return index;
  }
  

}
