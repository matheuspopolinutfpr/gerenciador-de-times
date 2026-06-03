"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Position_1 = require("../enum/Position");
const EmptyNameError_1 = require("../error/EmptyNameError");
class FirstScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
        this.mainMenu();
    }
    mainMenu() {
        console.log('Bem-vindo ao Gerenciador de Times');
        while (true) {
            console.log('\nEscolha uma opção:');
            console.log('1 - Criar Time');
            console.log('2 - Listar Times');
            console.log('3 - Criar Jogador');
            console.log('4 - Listar Jogadores');
            console.log('5 - Criar Técnico');
            console.log('6 - Listar Técnicos');
            console.log('7 - Buscar jogador(es) por número');
            console.log('0 - Sair');
            const opt = this.prompt('> ');
            switch (opt) {
                case '1': {
                    try {
                        const name = this.prompt('Nome do time: ');
                        const t = this.controller.createTeam(name);
                        console.log(`Time criado: ${t.getName()}`);
                    }
                    catch (error) {
                        if (error instanceof EmptyNameError_1.EmptyNameError) {
                            console.log(error.message);
                        }
                        else {
                            console.log('Erro inesperado:', error);
                        }
                    }
                    break;
                }
                case '2': {
                    console.log(this.controller.listTeams());
                    break;
                }
                case '3': {
                    try {
                        const name = this.prompt('Nome do jogador: ');
                        const dataStr = this.prompt('Data de nascimento (YYYY-MM-DD): ');
                        const numeroStr = this.prompt('Número do jogador: ');
                        console.log('Posições:');
                        const positions = Object.values(Position_1.Position);
                        positions.forEach((p, i) => console.log(`${i + 1} - ${p}`));
                        const posOpt = this.prompt('Escolha a posição (número): ');
                        const posIndex = parseInt(posOpt || '1', 10) - 1;
                        const position = Object.values(Position_1.Position)[posIndex];
                        const data = new Date(dataStr);
                        const number = parseInt(numeroStr || '0', 10);
                        const j = this.controller.createPlayer(name, data, position, number);
                        console.log(`Joagador criado: ${j.getSummary()}`);
                    }
                    catch (error) {
                        if (error instanceof EmptyNameError_1.EmptyNameError) {
                            console.log(error.message);
                        }
                        else {
                            console.log('Erro inesperado:', error);
                        }
                    }
                    break;
                }
                case '4': {
                    console.log(this.controller.listPlayers());
                    break;
                }
                case '5': {
                    try {
                        const name = this.prompt('Nome do técnico: ');
                        const dataStr = this.prompt('Data de nascimento (YYYY-MM-DD): ');
                        const data = new Date(dataStr);
                        const tec = this.controller.createCoach(name, data);
                        console.log(`Técnico criado: ${tec.getName()}`);
                    }
                    catch (error) {
                        if (error instanceof EmptyNameError_1.EmptyNameError) {
                            console.log(error.message);
                        }
                        else {
                            console.log('Erro inesperado:', error);
                        }
                    }
                    break;
                }
                case '6': {
                    console.log(this.controller.listCoaches());
                    break;
                }
                case '7': {
                    const numStr = this.prompt('Número da camisa: ');
                    const players = this.controller.findPlayersByNumber(numStr);
                    if (players.length === 0) {
                        console.log('Nenhum jogafor encontrado com esse número.');
                    }
                    else {
                        console.log(players.map((j) => j.getSummary()).join('\n'));
                    }
                    break;
                }
                case '0': {
                    console.log('Saindo...');
                    return;
                }
                default:
                    console.log('Opção inválida');
            }
        }
    }
}
exports.default = FirstScreen;
