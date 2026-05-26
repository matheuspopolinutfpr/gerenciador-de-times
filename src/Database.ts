import Repository from "./service/Repository";
import Jogador from "./model/Jogador";
import Tecnico from "./model/Tecnico";
import Time from "./model/Time";

// simulador do SGBD usando repositórios genéricos
export default class Database {
    public times: Repository<Time> = new Repository<Time>();
    public jogadores: Repository<Jogador> = new Repository<Jogador>();
    public tecnicos: Repository<Tecnico> = new Repository<Tecnico>();
}