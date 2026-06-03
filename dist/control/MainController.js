"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FirstScreen_1 = __importDefault(require("../view/FirstScreen"));
const MainService_1 = __importDefault(require("../service/MainService"));
const JsonDatabase_1 = __importDefault(require("../database/JsonDatabase"));
class MainController {
    constructor() {
        this.mainService = new MainService_1.default(new JsonDatabase_1.default());
        this.firstScreen = new FirstScreen_1.default(this);
    }
    createTeam(name) {
        return this.mainService.createTeam(name);
    }
    listTeams() {
        return this.mainService.listTeams();
    }
    createPlayer(name, birthDate, position, number) {
        return this.mainService.createPlayer(name, birthDate, position, number);
    }
    listPlayers() {
        return this.mainService.listPlayers();
    }
    findPlayersByNumber(number) {
        return this.mainService.findPlayersByNumber(number);
    }
    createCoach(name, birthDate) {
        return this.mainService.createCoach(name, birthDate);
    }
    listCoaches() {
        return this.mainService.listCoaches();
    }
}
exports.default = MainController;
