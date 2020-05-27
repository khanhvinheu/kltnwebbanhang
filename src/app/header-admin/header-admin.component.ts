import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.sass']
})
export class HeaderAdminComponent implements OnInit {

  count = 0;
  mobileQuery: MediaQueryList;
  fillerNav = [
      { name: 'Bảng điều khiển', link: 'dashboard' },
      // { name: 'Phân quyền', link: 'phanquyen' },
      // { name: 'Báo cáo', link: 'baocao' },
      // { name: 'Nhà Cung Cấp', link: 'nhacungcap' },
      // { name: 'Nhà Sản Xuất', link: 'nhasanxuat' },
      { name: 'Danh Mục', link: 'danhmuc' },
      { name: 'Danh mục hình', link: 'danhmuchinh' },
      // { name: 'Sản phẩm', link: 'sanpham' },
      { name: 'Khuyến mãi', link: 'khuyenmai' },
      { name: 'Chi tiết khuyến mãi', link: 'chitietkhuyenmai' },
      { name: 'Quyền', link: 'quyen' },
      // { name: 'Đánh giá', link: 'danhgia' },
      // { name: 'Hóa đơn nhập', link: 'hoadonnhap' },
      // { name: 'Hóa đơn xuất', link: 'reset-pass-admin' },
      { name: 'Địa điểm', link: 'login' },
      // { name: 'Trạng Thái', link: 'trangthai' },
      { name: 'Phương thức thanh toán', link: 'pttt'},
  ];
  _mobileQueryListener: () => void;
  constructor(
      changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher,
     
      private router: Router,     
   
  ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    
  }
  ngOnInit(): void {
     
  }
  ngOnDestroy(): void {
    
  }
  onLogout() {
      
      this.router.navigate(['/']);
  }
  getCountDH() {
    //   return this.count;
  }

}
