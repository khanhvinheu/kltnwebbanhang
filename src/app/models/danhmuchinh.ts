export class DanhMucHinh {
    public id: number;
    public hinhAnh: string;
    public idSanPham: number;
    public created_at: Date;
    public updated_at: Date;
    constructor (id: number, hinhAnh: string, idSanPham: number, created_at: Date, updated_at: Date) {
        this.id = id;
        this.hinhAnh = hinhAnh;
        this.idSanPham = idSanPham;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
