"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../model/Player"));
const Coach_1 = __importDefault(require("../model/Coach"));
const Team_1 = __importDefault(require("../model/Team"));
class MainService {
    constructor(database) {
        this.database = database;
    }
    createTeam(name) {
        const team = new Team_1.default(name);
        this.database.teams.add(team);
        this.database.save();
        return team;
    }
    listTeams() {
        if (this.database.teams.length === 0) {
            return "Nenhum time registrado";
        }
        return this.database.teams
            .list()
            .map((t, i) => `${i + 1} - ${t.getName()}`)
            .join("\n");
    }
    createPlayer(name, birthDate, position, number) {
        const player = new Player_1.default(name, birthDate, position, number);
        this.database.players.add(player);
        this.database.save();
        return player;
    }
    listPlayers() {
        if (this.database.players.length === 0) {
            return "Nenhum jogador registrado";
        }
        return this.database.players
            .list()
            .map((j, i) => `${i + 1} - ${j.getSummary()}`)
            .join("\n");
    }
    findPlayersByNumber(number) {
        const n = typeof number === "string"
            ? parseInt(number, 10)
            : number;
        if (Number.isNaN(n)) {
            return [];
        }
        return this.database.players.filter((j) => j.getNumber() === n);
    }
    createCoach(name, birthDate) {
        const coach = new Coach_1.default(name, birthDate);
        this.database.coaches.add(coach);
        this.database.save();
        return coach;
    }
    listCoaches() {
        if (this.database.coaches.length === 0) {
            return "Nenhum técnico registrado";
        }
        return this.database.coaches
            .list()
            .map((t, i) => `${i + 1} - ${t.getSummary()}`)
            .join("\n");
    }
}
exports.default = MainService;
