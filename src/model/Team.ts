import Player from "./Player";
import Coach from "./Coach";
import { EmptyNameError } from "../error/EmptyNameError";

export default class Team {
    private name: string = "";
    private coach: Coach | null = null;
    private players: Player[] = [];

    constructor(name: string) {
        if (!name.trim()) {
            throw new EmptyNameError('Team');
        }
        this.name = name;
    }   

    public getName(): string {
        return this.name;
    }
}