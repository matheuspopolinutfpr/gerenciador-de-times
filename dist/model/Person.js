"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    getName() {
        return this.name;
    }
    getBirthDate() {
        return this.birthDate;
    }
    getSummary() {
        return `${this.getName()}`;
    }
}
exports.default = Person;
