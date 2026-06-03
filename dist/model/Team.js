"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmptyNameError_1 = require("../error/EmptyNameError");
class Team {
    constructor(name) {
        this.name = "";
        this.coach = null;
        this.players = [];
        if (!name.trim()) {
            throw new EmptyNameError_1.EmptyNameError('Team');
        }
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.default = Team;
