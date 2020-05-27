export class Quyen {
    public id: number;
    public tenQuyen: string;
    public created_at: Date;
    public updated_at: Date;
    constructor (id: number, tenQuyen: string, created_at: Date, updated_at: Date) {
        this.id = id;
        this.tenQuyen = tenQuyen;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}