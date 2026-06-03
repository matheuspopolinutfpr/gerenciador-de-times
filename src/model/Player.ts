import { Position } from "../enum/Position";
import Person from "./Person";
import { EmptyNameError } from "../error/EmptyNameError";

export default class Player extends Person {
    private position: Position;
    private number: number;

    constructor(name: string, birthDate: Date, position: Position, number: number) {
        if (!name.trim()) {
            throw new EmptyNameError('Player');
        }
        super(name, birthDate);
        this.position = position;
        this.number = number;
    }

    public getPosition(): Position {
        return this.position;
    }

    public getNumber(): number {
        return this.number;
    }

    public getSummary(): string {
        return `${this.getName()} | ${this.getPosition()} | #${this.getNumber()}`;
    }
}