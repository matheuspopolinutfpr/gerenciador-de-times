import MainController from "../control/MainController";
import promptSync from 'prompt-sync';
import { Posicao } from "../enum/EnumPosicao";
import { EmptyNameError } from "../error/EmptyNameError";

export default class FirstScreen {
    private prompt = promptSync();
    private controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
        this.mainMenu();
    }

    private mainMenu(): void {
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
                        const nome = this.prompt('Nome do time: ');
                        const t = this.controller.criarTime(nome);
                        console.log(`Time criado: ${t.getNome()}`);
                    } catch (error) {
                        if (error instanceof EmptyNameError) {
                            console.log(error.message);
                        } else {
                            console.log('Erro inesperado:', error);
                        }
                    }
                    break;
                }
                case '2': {
                    console.log(this.controller.listarTimes());
                    break;
                }
                case '3': {
                    try {
                        const nome = this.prompt('Nome do jogador: ');
                        const dataStr = this.prompt('Data de nascimento (YYYY-MM-DD): ');
                        const numeroStr = this.prompt('Número do jogador: ');
                        console.log('Posições:');
                        const posicoes = Object.values(Posicao) as string[];
                        posicoes.forEach((p, i) => console.log(`${i + 1} - ${p}`));
                        const posOpt = this.prompt('Escolha a posição (número): ');
                        const posIndex = parseInt(posOpt || '1', 10) - 1;
                        const posicao = (Object.values(Posicao) as any[])[posIndex] as Posicao;
                        const data = new Date(dataStr);
                        const numero = parseInt(numeroStr || '0', 10);
                        const j = this.controller.criarJogador(nome, data, posicao, numero);
                        console.log(`Jogador criado: ${j.getResumo()}`);
                    } catch (error) {
                        if (error instanceof EmptyNameError) {
                            console.log(error.message);
                        } else {
                            console.log('Erro inesperado:', error);
                        }
                    }
                    break;
                }
                case '4': {
                    console.log(this.controller.listarJogadores());
                    break;
                }
                case '5': {
                    try {
                        const nome = this.prompt('Nome do técnico: ');
                        const dataStr = this.prompt('Data de nascimento (YYYY-MM-DD): ');
                        const data = new Date(dataStr);
                        const tec = this.controller.criarTecnico(nome, data);
                        console.log(`Técnico criado: ${tec.getNome()}`);
                    } catch (error) {
                        if (error instanceof EmptyNameError) {
                            console.log(error.message);
                        } else {
                            console.log('Erro inesperado:', error);
                        }
                    }
                    break;
                }
                case '6': {
                    console.log(this.controller.listarTecnicos());
                    break;
                }
                case '7': {
                    const numStr = this.prompt('Número da camisa: ');
                    const jogadores = this.controller.buscarJogadoresPorNumero(numStr);
                    if (jogadores.length === 0) {
                        console.log('Nenhum jogador encontrado com esse número.');
                    } else {
                        console.log(jogadores.map((j) => j.getResumo()).join('\n'));
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

