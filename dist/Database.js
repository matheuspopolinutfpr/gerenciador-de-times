"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const Repository_1 = __importDefault(require("./service/Repository"));
const Jogador_1 = __importDefault(require("./model/Jogador"));
const Tecnico_1 = __importDefault(require("./model/Tecnico"));
const Time_1 = __importDefault(require("./model/Time"));
class Database {
    constructor() {
        this.times = new Repository_1.default();
        this.jogadores = new Repository_1.default();
        this.tecnicos = new Repository_1.default();
        this.load();
    }
    load() {
        if (!fs.existsSync('database.json'))
            return;
        const data = fs.readFileSync('database.json', 'utf-8');
        if (data.trim() === '')
            return;
        const parsed = JSON.parse(data);
        if (parsed.times) {
            for (const t of parsed.times) {
                const time = new Time_1.default(t.nome);
                Object.assign(time, t);
                this.times.add(time);
            }
        }
        if (parsed.jogadores) {
            for (const j of parsed.jogadores) {
                const jog = new Jogador_1.default(j.nome, new Date(j.dataNascimento), j.posicao, j.numero);
                Object.assign(jog, j);
                this.jogadores.add(jog);
            }
        }
        if (parsed.tecnicos) {
            for (const t of parsed.tecnicos) {
                const tec = new Tecnico_1.default(t.nome, new Date(t.dataNascimento));
                Object.assign(tec, t);
                this.tecnicos.add(tec);
            }
        }
    }
    salvar() {
        const data = {
            times: this.times.list(),
            jogadores: this.jogadores.list(),
            tecnicos: this.tecnicos.list()
        };
        fs.writeFileSync('database.json', JSON.stringify(data, null, 2), 'utf-8');
    }
}
exports.default = Database;
