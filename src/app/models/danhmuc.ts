export class DanhMuc {
    constructor(
        public id: number,
        public tenDanhmuc: string,
        public danhMuccha: number,
        public hinh: string,
        public created_at: Date,
        public updated_at: Date,
        public NameParent: string
    ) {}
}
