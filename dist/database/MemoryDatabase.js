"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("../service/Repository"));
class MemoryDatabase {
    constructor() {
        this.teams = new Repository_1.default();
        this.players = new Repository_1.default();
        this.coaches = new Repository_1.default();
    }
    save() {
        // Não faz nada, a persistência é apenas em memória!
    }
}
exports.default = MemoryDatabase;
