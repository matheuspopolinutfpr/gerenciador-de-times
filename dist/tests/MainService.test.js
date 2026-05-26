"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainService_1 = __importDefault(require("../service/MainService"));
const globals_1 = require("@jest/globals");
const EnumPosicao_1 = require("../enum/EnumPosicao");
(0, globals_1.describe)("Testes do MainService", () => {
    let service;
    (0, globals_1.beforeEach)(() => {
        service = new MainService_1.default();
    });
    (0, globals_1.test)("Deve criar um time corretamente", () => {
        const time = service.criarTime("Flamengo");
        (0, globals_1.expect)(time.getNome()).toBe("Flamengo");
        (0, globals_1.expect)(service.database.times.length).toBe(1);
    });
    (0, globals_1.test)("Deve listar times corretamente", () => {
        service.criarTime("Flamengo");
        service.criarTime("Palmeiras");
        (0, globals_1.expect)(service.listarTimes()).toBe("1 - Flamengo\n2 - Palmeiras");
    });
    (0, globals_1.test)("Deve retornar mensagem quando não houver times", () => {
        (0, globals_1.expect)(service.listarTimes()).toBe("Nenhum time cadastrado.");
    });
    (0, globals_1.test)("Deve criar um jogador corretamente", () => {
        const jogador = service.criarJogador("Neymar", new Date("1992-02-05"), EnumPosicao_1.Posicao.ATACANTE, 10);
        (0, globals_1.expect)(jogador.getNumero()).toBe(10);
        (0, globals_1.expect)(service.database.jogadores.length).toBe(1);
    });
    (0, globals_1.test)("Deve listar jogadores corretamente", () => {
        service.criarJogador("Neymar", new Date("1992-02-05"), EnumPosicao_1.Posicao.ATACANTE, 10);
        const lista = service.listarJogadores();
        (0, globals_1.expect)(lista).toContain("1 -");
        (0, globals_1.expect)(lista).toContain("Neymar");
    });
    (0, globals_1.test)("Deve retornar mensagem quando não houver jogadores", () => {
        (0, globals_1.expect)(service.listarJogadores()).toBe("Nenhum jogador cadastrado.");
    });
    (0, globals_1.test)("Deve buscar jogador pelo número", () => {
        service.criarJogador("Neymar", new Date("1992-02-05"), EnumPosicao_1.Posicao.ATACANTE, 10);
        const jogadores = service.buscarJogadoresPorNumero(10);
        (0, globals_1.expect)(jogadores.length).toBe(1);
        (0, globals_1.expect)(jogadores[0].getNumero()).toBe(10);
    });
    (0, globals_1.test)("Deve buscar jogador pelo número usando string", () => {
        service.criarJogador("Messi", new Date("1987-06-24"), EnumPosicao_1.Posicao.ATACANTE, 30);
        const jogadores = service.buscarJogadoresPorNumero("30");
        (0, globals_1.expect)(jogadores.length).toBe(1);
        (0, globals_1.expect)(jogadores[0].getNumero()).toBe(30);
    });
    (0, globals_1.test)("Deve retornar array vazio para número inválido", () => {
        const jogadores = service.buscarJogadoresPorNumero("abc");
        (0, globals_1.expect)(jogadores.length).toBe(0);
    });
    (0, globals_1.test)("Deve criar um técnico corretamente", () => {
        const tecnico = service.criarTecnico("Tite", new Date("1961-05-25"));
        (0, globals_1.expect)(tecnico).toBeDefined();
        (0, globals_1.expect)(service.database.tecnicos.length).toBe(1);
    });
    (0, globals_1.test)("Deve listar técnicos corretamente", () => {
        service.criarTecnico("Tite", new Date("1961-05-25"));
        const lista = service.listarTecnicos();
        (0, globals_1.expect)(lista).toContain("1 -");
        (0, globals_1.expect)(lista).toContain("Tite");
    });
    (0, globals_1.test)("Deve retornar mensagem quando não houver técnicos", () => {
        (0, globals_1.expect)(service.listarTecnicos()).toBe("Nenhum técnico cadastrado.");
    });
});
