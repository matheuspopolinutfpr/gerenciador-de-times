"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("../service/Repository"));
class MemoryDatabase {
    constructor() {
        this.times = new Repository_1.default();
        this.jogadores = new Repository_1.default();
        this.tecnicos = new Repository_1.default();
    }
    salvar() {
        // Não faz nada, a persistência é apenas em memória!
    }
}
exports.default = MemoryDatabase;
