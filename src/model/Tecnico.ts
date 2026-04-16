import Pessoa from "./Pessoa";
import { EmptyNameError } from "../error/EmptyNameError";

export default class Tecnico extends Pessoa {
    constructor(nome: string, dataNascimento: Date) {
        if (!nome.trim()) {
            throw new EmptyNameError('Técnico');
        }
        super(nome, dataNascimento);
    }

    public getResumo(): string {
        return `${this.getNome()} | Técnico`;
    }
}