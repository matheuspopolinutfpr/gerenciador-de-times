import { Posicao } from "../enum/EnumPosicao";
import Pessoa from "./Pessoa";
import { EmptyNameError } from "../error/EmptyNameError";

export default class Jogador extends Pessoa {
    private posicao: Posicao;
    private numero: number;

    constructor(nome: string, dataNascimento: Date, posicao: Posicao, numero: number) {
        if (!nome.trim()) {
            throw new EmptyNameError('Jogador');
        }
        super(nome, dataNascimento);
        this.posicao = posicao;
        this.numero = numero;
    }

    public getPosicao(): Posicao {
        return this.posicao;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getResumo(): string {
        return `${this.getNome()} | ${this.getPosicao()} | #${this.getNumero()}`;
    }
}