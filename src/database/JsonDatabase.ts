import * as fs from 'fs';
import IDatabase from '../interface/IDatabase';
import Repository from "../service/Repository";
import Jogador from "../model/Jogador";
import Tecnico from "../model/Tecnico";
import Time from "../model/Time";

export default class JsonDatabase implements IDatabase {
    public times: Repository<Time> = new Repository<Time>();
    public jogadores: Repository<Jogador> = new Repository<Jogador>();
    public tecnicos: Repository<Tecnico> = new Repository<Tecnico>();

    constructor() {
        this.load();
    }

    private load() {
        if (!fs.existsSync('database.json')) return;

        const data = fs.readFileSync('database.json', 'utf-8');
        if (data.trim() === '') return;

        const parsed = JSON.parse(data);

        if (parsed.times) {
            for (const t of parsed.times) {
                const time = new Time(t.nome);
                Object.assign(time, t);
                this.times.add(time);
            }
        }
        if (parsed.jogadores) {
            for (const j of parsed.jogadores) {
                const jog = new Jogador(j.nome, new Date(j.dataNascimento), j.posicao, j.numero);
                Object.assign(jog, j);
                this.jogadores.add(jog);
            }
        }
        if (parsed.tecnicos) {
            for (const t of parsed.tecnicos) {
                const tec = new Tecnico(t.nome, new Date(t.dataNascimento));
                Object.assign(tec, t);
                this.tecnicos.add(tec);
            }
        }
    }

    public salvar() {
        const data = {
            times: this.times.list(),
            jogadores: this.jogadores.list(),
            tecnicos: this.tecnicos.list()
        };
        fs.writeFileSync('database.json', JSON.stringify(data, null, 2), 'utf-8');
    }
}
