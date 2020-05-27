export class Chitietkhuyenmai {
    public id: number;
    public idKhuyenMai: number;
    public idSanPham: number;
    public NgayBD: Date;
    public NgayKT: Date;
    public created_at: Date;
    public updated_at: Date;
    constructor (id: number, idKhuyenMai: number,idSanPham:number,NgayBD: Date,NgayKT: Date, created_at: Date, updated_at: Date) {
        this.id = id;
        this.idKhuyenMai = idKhuyenMai;
        this.idSanPham=idSanPham;
        this.NgayKT=NgayKT;
        this.idSanPham=idSanPham;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}