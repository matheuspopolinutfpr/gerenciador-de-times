"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FirstScreen_1 = __importDefault(require("../view/FirstScreen"));
const MainService_1 = __importDefault(require("../service/MainService"));
class MainController {
    constructor() {
        this.mainService = new MainService_1.default();
        this.firstScreen = new FirstScreen_1.default(this);
    }
    criarTime(name) {
        return this.mainService.criarTime(name);
    }
    listarTimes() {
        return this.mainService.listarTimes();
    }
    criarJogador(nome, dataNascimento, posicao, numero) {
        return this.mainService.criarJogador(nome, dataNascimento, posicao, numero);
    }
    listarJogadores() {
        return this.mainService.listarJogadores();
    }
    buscarJogadoresPorNumero(numero) {
        return this.mainService.buscarJogadoresPorNumero(numero);
    }
    criarTecnico(nome, dataNascimento) {
        return this.mainService.criarTecnico(nome, dataNascimento);
    }
    listarTecnicos() {
        return this.mainService.listarTecnicos();
    }
}
exports.default = MainController;
