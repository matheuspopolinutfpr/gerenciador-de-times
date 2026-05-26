import MainService from "../service/MainService";
import { expect, test, describe, beforeEach } from "@jest/globals";
import { Posicao } from "../enum/EnumPosicao";

describe("Testes do MainService", () => {

    let service: MainService;

    beforeEach(() => {
        service = new MainService();
    });

    test("Deve criar um time corretamente", () => {

        const time = service.criarTime("Flamengo");

        expect(time.getNome()).toBe("Flamengo");
        expect(service.database.times.length).toBe(1);
    });

    test("Deve listar times corretamente", () => {

        service.criarTime("Flamengo");
        service.criarTime("Palmeiras");

        expect(service.listarTimes()).toBe(
            "1 - Flamengo\n2 - Palmeiras"
        );
    });

    test("Deve retornar mensagem quando não houver times", () => {

        expect(service.listarTimes()).toBe(
            "Nenhum time cadastrado."
        );
    });

    test("Deve criar um jogador corretamente", () => {

        const jogador = service.criarJogador(
            "Neymar",
            new Date("1992-02-05"),
            Posicao.ATACANTE,
            10
        );

        expect(jogador.getNumero()).toBe(10);
        expect(service.database.jogadores.length).toBe(1);
    });

    test("Deve listar jogadores corretamente", () => {

        service.criarJogador(
            "Neymar",
            new Date("1992-02-05"),
            Posicao.ATACANTE,
            10
        );

        const lista = service.listarJogadores();

        expect(lista).toContain("1 -");
        expect(lista).toContain("Neymar");
    });

    test("Deve retornar mensagem quando não houver jogadores", () => {

        expect(service.listarJogadores()).toBe(
            "Nenhum jogador cadastrado."
        );
    });

    test("Deve buscar jogador pelo número", () => {

        service.criarJogador(
            "Neymar",
            new Date("1992-02-05"),
            Posicao.ATACANTE,
            10
        );

        const jogadores = service.buscarJogadoresPorNumero(10);

        expect(jogadores.length).toBe(1);
        expect(jogadores[0].getNumero()).toBe(10);
    });

    test("Deve buscar jogador pelo número usando string", () => {

        service.criarJogador(
            "Messi",
            new Date("1987-06-24"),
            Posicao.ATACANTE,
            30
        );

        const jogadores = service.buscarJogadoresPorNumero("30");

        expect(jogadores.length).toBe(1);
        expect(jogadores[0].getNumero()).toBe(30);
    });

    test("Deve retornar array vazio para número inválido", () => {

        const jogadores = service.buscarJogadoresPorNumero("abc");

        expect(jogadores.length).toBe(0);
    });

    test("Deve criar um técnico corretamente", () => {

        const tecnico = service.criarTecnico(
            "Tite",
            new Date("1961-05-25")
        );

        expect(tecnico).toBeDefined();
        expect(service.database.tecnicos.length).toBe(1);
    });

    test("Deve listar técnicos corretamente", () => {

        service.criarTecnico(
            "Tite",
            new Date("1961-05-25")
        );

        const lista = service.listarTecnicos();

        expect(lista).toContain("1 -");
        expect(lista).toContain("Tite");
    });

    test("Deve retornar mensagem quando não houver técnicos", () => {

        expect(service.listarTecnicos()).toBe(
            "Nenhum técnico cadastrado."
        );
    });

});