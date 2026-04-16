"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
const EmptyNameError_1 = require("../error/EmptyNameError");
class Tecnico extends Pessoa_1.default {
    constructor(nome, dataNascimento) {
        if (!nome.trim()) {
            throw new EmptyNameError_1.EmptyNameError('Técnico');
        }
        super(nome, dataNascimento);
    }
    getResumo() {
        return `${this.getNome()} | Técnico`;
    }
}
exports.default = Tecnico;
