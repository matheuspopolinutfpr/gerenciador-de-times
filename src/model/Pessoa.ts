import IMembroElenco from "../interface/IMembroElenco";

export default abstract class Pessoa implements IMembroElenco {
    private nome: string;
    private dataNascimento: Date;

    constructor(nome: string, dataNascimento: Date) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public getResumo(): string {
        return `${this.getNome()}`;
    }
}
