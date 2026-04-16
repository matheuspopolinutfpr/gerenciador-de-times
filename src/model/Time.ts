import Jogador from "./Jogador";
import Tecnico from "./Tecnico";
import { EmptyNameError } from "../error/EmptyNameError";

export default class Time {
    private nome: string = "";
    private tecnico: Tecnico | null = null;
    private jogadores: Jogador[] = [];

    constructor(nome: string) {
        if (!nome.trim()) {
            throw new EmptyNameError('Time');
        }
        this.nome = nome;
    }   

    public getNome(): string {
        return this.nome;
    }
}