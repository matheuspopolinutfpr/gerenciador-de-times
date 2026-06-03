"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const Repository_1 = __importDefault(require("../service/Repository"));
const Player_1 = __importDefault(require("../model/Player"));
const Coach_1 = __importDefault(require("../model/Coach"));
const Team_1 = __importDefault(require("../model/Team"));
class JsonDatabase {
    constructor() {
        this.teams = new Repository_1.default();
        this.players = new Repository_1.default();
        this.coaches = new Repository_1.default();
        this.load();
    }
    load() {
        if (!fs.existsSync('database.json'))
            return;
        const data = fs.readFileSync('database.json', 'utf-8');
        if (data.trim() === '')
            return;
        const parsed = JSON.parse(data);
        if (parsed.teams) {
            for (const t of parsed.teams) {
                const team = new Team_1.default(t.name);
                Object.assign(team, t);
                this.teams.add(team);
            }
        }
        if (parsed.players) {
            for (const j of parsed.players) {
                const jog = new Player_1.default(j.name, new Date(j.birthDate), j.position, j.number);
                Object.assign(jog, j);
                this.players.add(jog);
            }
        }
        if (parsed.coaches) {
            for (const t of parsed.coaches) {
                const tec = new Coach_1.default(t.name, new Date(t.birthDate));
                Object.assign(tec, t);
                this.coaches.add(tec);
            }
        }
    }
    save() {
        const data = {
            teams: this.teams.list(),
            players: this.players.list(),
            coaches: this.coaches.list()
        };
        fs.writeFileSync('database.json', JSON.stringify(data, null, 2), 'utf-8');
    }
}
exports.default = JsonDatabase;
