"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const EmptyNameError_1 = require("../error/EmptyNameError");
class Coach extends Person_1.default {
    constructor(name, birthDate) {
        if (!name.trim()) {
            throw new EmptyNameError_1.EmptyNameError('Coach');
        }
        super(name, birthDate);
    }
    getSummary() {
        return `${this.getName()} | Coach`;
    }
}
exports.default = Coach;
