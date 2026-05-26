"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../Database"));
const Jogador_1 = __importDefault(require("../model/Jogador"));
const Tecnico_1 = __importDefault(require("../model/Tecnico"));
const Time_1 = __importDefault(require("../model/Time"));
class MainService {
    constructor() {
        this.database = new Database_1.default();
    }
    criarTime(name) {
        const time = new Time_1.default(name);
        this.database.times.add(time);
        return time;
    }
    listarTimes() {
        if (this.database.times.length === 0) {
            return "Nenhum time cadastrado.";
        }
        return this.database.times
            .list()
            .map((t, i) => `${i + 1} - ${t.getNome()}`)
            .join("\n");
    }
    criarJogador(nome, dataNascimento, posicao, numero) {
        const jogador = new Jogador_1.default(nome, dataNascimento, posicao, numero);
        this.database.jogadores.add(jogador);
        return jogador;
    }
    listarJogadores() {
        if (this.database.jogadores.length === 0) {
            return "Nenhum jogador cadastrado.";
        }
        return this.database.jogadores
            .list()
            .map((j, i) => `${i + 1} - ${j.getResumo()}`)
            .join("\n");
    }
    buscarJogadoresPorNumero(numero) {
        const n = typeof numero === "string"
            ? parseInt(numero, 10)
            : numero;
        if (Number.isNaN(n)) {
            return [];
        }
        return this.database.jogadores.filter((j) => j.getNumero() === n);
    }
    criarTecnico(nome, dataNascimento) {
        const tecnico = new Tecnico_1.default(nome, dataNascimento);
        this.database.tecnicos.add(tecnico);
        return tecnico;
    }
    listarTecnicos() {
        if (this.database.tecnicos.length === 0) {
            return "Nenhum técnico cadastrado.";
        }
        return this.database.tecnicos
            .list()
            .map((t, i) => `${i + 1} - ${t.getResumo()}`)
            .join("\n");
    }
}
exports.default = MainService;
