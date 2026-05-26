"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("./service/Repository"));
// simulador do SGBD usando repositórios genéricos
class Database {
    constructor() {
        this.times = new Repository_1.default();
        this.jogadores = new Repository_1.default();
        this.tecnicos = new Repository_1.default();
    }
}
exports.default = Database;
