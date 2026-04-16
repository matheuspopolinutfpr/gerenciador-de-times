"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmptyNameError_1 = require("../error/EmptyNameError");
class Time {
    constructor(nome) {
        this.nome = "";
        this.tecnico = null;
        this.jogadores = [];
        if (!nome.trim()) {
            throw new EmptyNameError_1.EmptyNameError('Time');
        }
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
}
exports.default = Time;
