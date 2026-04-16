"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
const EmptyNameError_1 = require("../error/EmptyNameError");
class Jogador extends Pessoa_1.default {
    constructor(nome, dataNascimento, posicao, numero) {
        if (!nome.trim()) {
            throw new EmptyNameError_1.EmptyNameError('Jogador');
        }
        super(nome, dataNascimento);
        this.posicao = posicao;
        this.numero = numero;
    }
    getPosicao() {
        return this.posicao;
    }
    getNumero() {
        return this.numero;
    }
    getResumo() {
        return `${this.getNome()} | ${this.getPosicao()} | #${this.getNumero()}`;
    }
}
exports.default = Jogador;
