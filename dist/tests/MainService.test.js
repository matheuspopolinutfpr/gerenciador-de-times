"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainService_1 = __importDefault(require("../service/MainService"));
const MemoryDatabase_1 = __importDefault(require("../database/MemoryDatabase"));
const globals_1 = require("@jest/globals");
const Position_1 = require("../enum/Position");
(0, globals_1.describe)("MainService tests", () => {
    let service;
    (0, globals_1.beforeEach)(() => {
        service = new MainService_1.default(new MemoryDatabase_1.default());
    });
    (0, globals_1.test)("Should create a team correctly", () => {
        const team = service.createTeam("Flamengo");
        (0, globals_1.expect)(team.getName()).toBe("Flamengo");
        (0, globals_1.expect)(service.database.teams.length).toBe(1);
    });
    (0, globals_1.test)("Should list teams correctly", () => {
        service.createTeam("Flamengo");
        service.createTeam("Palmeiras");
        (0, globals_1.expect)(service.listTeams()).toBe("1 - Flamengo\n2 - Palmeiras");
    });
    (0, globals_1.test)("Should return message when there are no teams", () => {
        (0, globals_1.expect)(service.listTeams()).toBe("Nenhum time registrado");
    });
    (0, globals_1.test)("Should create a player correctly", () => {
        const player = service.createPlayer("Neymar", new Date("1992-02-05"), Position_1.Position.FORWARD, 10);
        (0, globals_1.expect)(player.getNumber()).toBe(10);
        (0, globals_1.expect)(service.database.players.length).toBe(1);
    });
    (0, globals_1.test)("Should list players correctly", () => {
        service.createPlayer("Neymar", new Date("1992-02-05"), Position_1.Position.FORWARD, 10);
        const list = service.listPlayers();
        (0, globals_1.expect)(list).toContain("1 -");
        (0, globals_1.expect)(list).toContain("Neymar");
    });
    (0, globals_1.test)("Should return message when there are no players", () => {
        (0, globals_1.expect)(service.listPlayers()).toBe("Nenhum jogador registrado");
    });
    (0, globals_1.test)("Should find player by number", () => {
        service.createPlayer("Neymar", new Date("1992-02-05"), Position_1.Position.FORWARD, 10);
        const players = service.findPlayersByNumber(10);
        (0, globals_1.expect)(players.length).toBe(1);
        (0, globals_1.expect)(players[0].getNumber()).toBe(10);
    });
    (0, globals_1.test)("Should find player by number using string", () => {
        service.createPlayer("Messi", new Date("1987-06-24"), Position_1.Position.FORWARD, 30);
        const players = service.findPlayersByNumber("30");
        (0, globals_1.expect)(players.length).toBe(1);
        (0, globals_1.expect)(players[0].getNumber()).toBe(30);
    });
    (0, globals_1.test)("Should return empty array for invalid number", () => {
        const players = service.findPlayersByNumber("abc");
        (0, globals_1.expect)(players.length).toBe(0);
    });
    (0, globals_1.test)("Should create a coach correctly", () => {
        const coach = service.createCoach("Tite", new Date("1961-05-25"));
        (0, globals_1.expect)(coach).toBeDefined();
        (0, globals_1.expect)(service.database.coaches.length).toBe(1);
    });
    (0, globals_1.test)("Should list coaches correctly", () => {
        service.createCoach("Tite", new Date("1961-05-25"));
        const list = service.listCoaches();
        (0, globals_1.expect)(list).toContain("1 -");
        (0, globals_1.expect)(list).toContain("Tite");
    });
    (0, globals_1.test)("Should return message when there are no coaches", () => {
        (0, globals_1.expect)(service.listCoaches()).toBe("Nenhum técnico registrado");
    });
});
