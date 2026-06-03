"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const EmptyNameError_1 = require("../error/EmptyNameError");
class Player extends Person_1.default {
    constructor(name, birthDate, position, number) {
        if (!name.trim()) {
            throw new EmptyNameError_1.EmptyNameError('Player');
        }
        super(name, birthDate);
        this.position = position;
        this.number = number;
    }
    getPosition() {
        return this.position;
    }
    getNumber() {
        return this.number;
    }
    getSummary() {
        return `${this.getName()} | ${this.getPosition()} | #${this.getNumber()}`;
    }
}
exports.default = Player;
