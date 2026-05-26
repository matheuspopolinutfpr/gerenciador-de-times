import Database from "../Database";
import Jogador from "../model/Jogador";
import Tecnico from "../model/Tecnico";
import Time from "../model/Time";
import { Posicao } from "../enum/EnumPosicao";

export default class MainService {

    public database: Database = new Database();

    public criarTime(name: string): Time {
        const time = new Time(name);
        this.database.times.add(time);
        return time;
    }

    public listarTimes(): string {
        if (this.database.times.length === 0) {
            return "Nenhum time cadastrado.";
        }

        return this.database.times
            .list()
            .map((t, i) => `${i + 1} - ${t.getNome()}`)
            .join("\n");
    }

    public criarJogador(
        nome: string,
        dataNascimento: Date,
        posicao: Posicao,
        numero: number
    ): Jogador {

        const jogador = new Jogador(
            nome,
            dataNascimento,
            posicao,
            numero
        );

        this.database.jogadores.add(jogador);

        return jogador;
    }

    public listarJogadores(): string {
        if (this.database.jogadores.length === 0) {
            return "Nenhum jogador cadastrado.";
        }

        return this.database.jogadores
            .list()
            .map((j, i) => `${i + 1} - ${j.getResumo()}`)
            .join("\n");
    }

    public buscarJogadoresPorNumero(numero: number): Jogador[];
    public buscarJogadoresPorNumero(numero: string): Jogador[];

    public buscarJogadoresPorNumero(
        numero: number | string
    ): Jogador[] {

        const n =
            typeof numero === "string"
                ? parseInt(numero, 10)
                : numero;

        if (Number.isNaN(n)) {
            return [];
        }

        return this.database.jogadores.filter(
            (j) => j.getNumero() === n
        );
    }

    public criarTecnico(
        nome: string,
        dataNascimento: Date
    ): Tecnico {

        const tecnico = new Tecnico(
            nome,
            dataNascimento
        );

        this.database.tecnicos.add(tecnico);

        return tecnico;
    }

    public listarTecnicos(): string {
        if (this.database.tecnicos.length === 0) {
            return "Nenhum técnico cadastrado.";
        }

        return this.database.tecnicos
            .list()
            .map((t, i) => `${i + 1} - ${t.getResumo()}`)
            .join("\n");
    }
}