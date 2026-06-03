import * as fs from 'fs';
import IDatabase from '../interface/IDatabase';
import Repository from "../service/Repository";
import Player from "../model/Player";
import Coach from "../model/Coach";
import Team from "../model/Team";

export default class JsonDatabase implements IDatabase {
    public teams: Repository<Team> = new Repository<Team>();
    public players: Repository<Player> = new Repository<Player>();
    public coaches: Repository<Coach> = new Repository<Coach>();

    constructor() {
        this.load();
    }

    private load() {
        if (!fs.existsSync('database.json')) return;

        const data = fs.readFileSync('database.json', 'utf-8');
        if (data.trim() === '') return;

        const parsed = JSON.parse(data);

        if (parsed.teams) {
            for (const t of parsed.teams) {
                const team = new Team(t.name);
                Object.assign(team, t);
                this.teams.add(team);
            }
        }
        if (parsed.players) {
            for (const j of parsed.players) {
                const jog = new Player(j.name, new Date(j.birthDate), j.position, j.number);
                Object.assign(jog, j);
                this.players.add(jog);
            }
        }
        if (parsed.coaches) {
            for (const t of parsed.coaches) {
                const tec = new Coach(t.name, new Date(t.birthDate));
                Object.assign(tec, t);
                this.coaches.add(tec);
            }
        }
    }

    public save() {
        const data = {
            teams: this.teams.list(),
            players: this.players.list(),
            coaches: this.coaches.list()
        };
        fs.writeFileSync('database.json', JSON.stringify(data, null, 2), 'utf-8');
    }
}
