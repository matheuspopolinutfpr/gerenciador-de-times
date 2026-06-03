import FirstScreen from "../view/FirstScreen";
import MainService from "../service/MainService";
import JsonDatabase from "../database/JsonDatabase";
import Player from "../model/Player";
import Coach from "../model/Coach";
import Team from "../model/Team";
import { Position } from "../enum/Position";

export default class MainController {

    private firstScreen: FirstScreen;
    private mainService: MainService;

    constructor() {
        this.mainService = new MainService(new JsonDatabase());
        this.firstScreen = new FirstScreen(this);
    }

    public createTeam(name: string): Team {
        return this.mainService.createTeam(name);
    }

    public listTeams(): string {
        return this.mainService.listTeams();
    }

    public createPlayer(
        name: string,
        birthDate: Date,
        position: Position,
        number: number
    ): Player {

        return this.mainService.createPlayer(
            name,
            birthDate,
            position,
            number
        );
    }

    public listPlayers(): string {
        return this.mainService.listPlayers();
    }

    public findPlayersByNumber(number: number): Player[];
    public findPlayersByNumber(number: string): Player[];

    public findPlayersByNumber(
        number: number | string
    ): Player[] {

        return this.mainService.findPlayersByNumber(number as any);
    }

    public createCoach(
        name: string,
        birthDate: Date
    ): Coach {

        return this.mainService.createCoach(
            name,
            birthDate
        );
    }

    public listCoaches(): string {
        return this.mainService.listCoaches();
    }
}