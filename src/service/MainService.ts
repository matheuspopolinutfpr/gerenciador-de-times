import IDatabase from "../interface/IDatabase";
import Player from "../model/Player";
import Coach from "../model/Coach";
import Team from "../model/Team";
import { Position } from "../enum/Position";

export default class MainService {

    public database: IDatabase;

    constructor(database: IDatabase) {
        this.database = database;
    }

    public createTeam(name: string): Team {
        const team = new Team(name);
        this.database.teams.add(team);
        this.database.save();
        return team;
    }

    public listTeams(): string {
        if (this.database.teams.length === 0) {
            return "Nenhum time registrado";
        }

        return this.database.teams
            .list()
            .map((t, i) => `${i + 1} - ${t.getName()}`)
            .join("\n");
    }

    public createPlayer(
        name: string,
        birthDate: Date,
        position: Position,
        number: number
    ): Player {

        const player = new Player(
            name,
            birthDate,
            position,
            number
        );

        this.database.players.add(player);
        this.database.save();

        return player;
    }

    public listPlayers(): string {
        if (this.database.players.length === 0) {
            return "Nenhum jogador registrado";
        }

        return this.database.players
            .list()
            .map((j, i) => `${i + 1} - ${j.getSummary()}`)
            .join("\n");
    }

    public findPlayersByNumber(number: number): Player[];
    public findPlayersByNumber(number: string): Player[];

    public findPlayersByNumber(
        number: number | string
    ): Player[] {

        const n =
            typeof number === "string"
                ? parseInt(number, 10)
                : number;

        if (Number.isNaN(n)) {
            return [];
        }

        return this.database.players.filter(
            (j) => j.getNumber() === n
        );
    }

    public createCoach(
        name: string,
        birthDate: Date
    ): Coach {

        const coach = new Coach(
            name,
            birthDate
        );

        this.database.coaches.add(coach);
        this.database.save();

        return coach;
    }

    public listCoaches(): string {
        if (this.database.coaches.length === 0) {
            return "Nenhum técnico registrado";
        }

        return this.database.coaches
            .list()
            .map((t, i) => `${i + 1} - ${t.getSummary()}`)
            .join("\n");
    }
}