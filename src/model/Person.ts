import ISquadMember from "../interface/ISquadMember";

export default abstract class Person implements ISquadMember {
    private name: string;
    private birthDate: Date;

    constructor(name: string, birthDate: Date) {
        this.name = name;
        this.birthDate = birthDate;
    }

    public getName(): string {
        return this.name;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public getSummary(): string {
        return `${this.getName()}`;
    }
}
