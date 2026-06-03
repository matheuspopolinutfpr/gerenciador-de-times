import MainService from "../service/MainService";
import MemoryDatabase from "../database/MemoryDatabase";
import { expect, test, describe, beforeEach } from "@jest/globals";
import { Position } from "../enum/Position";

describe("MainService tests", () => {

    let service: MainService;

    beforeEach(() => {
        service = new MainService(new MemoryDatabase());
    });

    test("Should create a team correctly", () => {

        const team = service.createTeam("Flamengo");

        expect(team.getName()).toBe("Flamengo");
        expect(service.database.teams.length).toBe(1);
    });

    test("Should list teams correctly", () => {

        service.createTeam("Flamengo");
        service.createTeam("Palmeiras");

        expect(service.listTeams()).toBe(
            "1 - Flamengo\n2 - Palmeiras"
        );
    });

    test("Should return message when there are no teams", () => {

        expect(service.listTeams()).toBe(
            "Nenhum time registrado"
        );
    });

    test("Should create a player correctly", () => {

        const player = service.createPlayer(
            "Neymar",
            new Date("1992-02-05"),
            Position.FORWARD,
            10
        );

        expect(player.getNumber()).toBe(10);
        expect(service.database.players.length).toBe(1);
    });

    test("Should list players correctly", () => {

        service.createPlayer(
            "Neymar",
            new Date("1992-02-05"),
            Position.FORWARD,
            10
        );

        const list = service.listPlayers();

        expect(list).toContain("1 -");
        expect(list).toContain("Neymar");
    });

    test("Should return message when there are no players", () => {

        expect(service.listPlayers()).toBe(
            "Nenhum jogador registrado"
        );
    });

    test("Should find player by number", () => {

        service.createPlayer(
            "Neymar",
            new Date("1992-02-05"),
            Position.FORWARD,
            10
        );

        const players = service.findPlayersByNumber(10);

        expect(players.length).toBe(1);
        expect(players[0].getNumber()).toBe(10);
    });

    test("Should find player by number using string", () => {

        service.createPlayer(
            "Messi",
            new Date("1987-06-24"),
            Position.FORWARD,
            30
        );

        const players = service.findPlayersByNumber("30");

        expect(players.length).toBe(1);
        expect(players[0].getNumber()).toBe(30);
    });

    test("Should return empty array for invalid number", () => {

        const players = service.findPlayersByNumber("abc");

        expect(players.length).toBe(0);
    });

    test("Should create a coach correctly", () => {

        const coach = service.createCoach(
            "Tite",
            new Date("1961-05-25")
        );

        expect(coach).toBeDefined();
        expect(service.database.coaches.length).toBe(1);
    });

    test("Should list coaches correctly", () => {

        service.createCoach(
            "Tite",
            new Date("1961-05-25")
        );

        const list = service.listCoaches();

        expect(list).toContain("1 -");
        expect(list).toContain("Tite");
    });

    test("Should return message when there are no coaches", () => {

        expect(service.listCoaches()).toBe(
            "Nenhum técnico registrado"
        );
    });

});