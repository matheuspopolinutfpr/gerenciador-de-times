import Person from "./Person";
import { EmptyNameError } from "../error/EmptyNameError";

export default class Coach extends Person {
    constructor(name: string, birthDate: Date) {
        if (!name.trim()) {
            throw new EmptyNameError('Coach');
        }
        super(name, birthDate);
    }

    public getSummary(): string {
        return `${this.getName()} | Coach`;
    }
}