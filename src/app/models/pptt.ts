export class Pttt {
    public id: number;
    public tenPhuongthuc: string;
    public created_at: Date;
    public updated_at: Date;
    constructor (id: number, tenPhuongthuc: string, created_at: Date, updated_at: Date) {
        this.id = id;
        this.tenPhuongthuc = tenPhuongthuc;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}