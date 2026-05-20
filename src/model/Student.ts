export default class Student{

    private ra!: number;

    public getRa(): number{
        return this.ra;
    }
    public setRa(ra: number): void{
       this.ra = ra;
    }

    public getDouble(n: number): number{
        return n*2;
    }
    public getString(): string{
        return("teste");
    }
}