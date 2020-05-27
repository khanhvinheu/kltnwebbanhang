import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import * as MESS from '../../constants';
import { ThongbaoService } from './thongbao.service';
import { Khuyenmai } from 'src/app/models/khuyenmai';
import { Chitietkhuyenmai } from 'src/app/models/chitietkhuyenmai';
@Injectable({
    providedIn: 'root'
})
export class ChitietkhuyenmaiService {
    private API: string = environment.api_url + '/admin/chitietkhuyenmai';
    public itemsSub: BehaviorSubject<Chitietkhuyenmai[]>;
    public itemsObs: Observable<Chitietkhuyenmai[]>;
    public isLoadingSub: BehaviorSubject<boolean>;
    public isLoadingObs: Observable<boolean>;
    public itemSub: BehaviorSubject<Chitietkhuyenmai>;
    public itemObs: Observable<Chitietkhuyenmai>;
    constructor(
        public http: HttpClient,
        private thongbaoService: ThongbaoService
    ) {
        this.itemsSub = new BehaviorSubject<Chitietkhuyenmai[]>([]);
        this.itemsObs = this.itemsSub.asObservable();
        this.itemSub = new BehaviorSubject<Chitietkhuyenmai>(null);
        this.itemObs = this.itemSub.asObservable();
        this.isLoadingSub = new BehaviorSubject<boolean>(false);
        this.isLoadingObs = this.isLoadingSub.asObservable();
    }
    findIndex(array, id: number) {
        return array.findIndex(e => e.id === id);
    }
    referById(id: number) {
        const url = `${this.API}/${id}`;
        this.http.get<Chitietkhuyenmai>(url);
    }
    getAll() {
        this.isLoadingSub.next(true);
        return this.http.get<Chitietkhuyenmai[]>(this.API).subscribe(
            res => {
                if (res['status'] === 'OK') {
                    this.itemsSub.next(res['data']);
                }
            },
            () => {},
            () => this.isLoadingSub.next(false)
        );
    }
    createNew(values: any) {
        this.isLoadingSub.next(true);
        this.http.post<Chitietkhuyenmai>(this.API, values).subscribe(
            res => {                
                if (res['status'] === 'OK') {
                    this.itemsSub.value.push(res['data']);
                    this.itemsSub.next(this.itemsSub.value);
                    this.thongbaoService.open(
                        MESS.INSERT_SUCCESS,
                        'bg-success'
                    );
                }
                this.getAll();
            },
            () => {},
            () => this.isLoadingSub.next(false)
        );
    }
    delete(value) {
        const url = `${this.API}/${value.id}`;
        this.isLoadingSub.next(true);
        this.http.delete(url).subscribe(
            data => {
                if (data['status'] === 'OK') {
                    const index = this.findIndex(this.itemsSub.value, value.id);
                    if (index !== -1) {
                        this.itemsSub.value.splice(index, 1);
                        this.itemsSub.next(this.itemsSub.value);
                        this.thongbaoService.open(
                            MESS.DELETE_SUCCESS,
                            'bg-success'
                        );
                    }
                }
            },
            () => {},
            () => this.isLoadingSub.next(false)
        );
    }
    update(value) {
        value.append('_method', 'put');       
        const url = `${this.API}/${value.get('id')}`;
        this.isLoadingSub.next(true);
        this.http.post<Chitietkhuyenmai>(url, value).subscribe(
            res => {
                if (res['status'] === 'OK') {
                    const index = this.findIndex(
                        this.itemsSub.value,
                        Number.parseInt(value.get('id') + '')
                    );
                    if (index !== -1) {
                        this.itemsSub.value[index] = res['data'];
                        this.itemsSub.next(this.itemsSub.value);
                        this.thongbaoService.open(
                            MESS.UPDATE_SUCCESS,
                            'bg-success'
                        );
                    }
                    this.getAll();
                }
            },
            () => {},
            () => this.isLoadingSub.next(false)
        );
     }
}
