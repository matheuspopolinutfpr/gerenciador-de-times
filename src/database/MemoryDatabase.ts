import IDatabase from '../interface/IDatabase';
import Repository from "../service/Repository";
import Player from "../model/Player";
import Coach from "../model/Coach";
import Team from "../model/Team";

export default class MemoryDatabase implements IDatabase {
    public teams: Repository<Team> = new Repository<Team>();
    public players: Repository<Player> = new Repository<Player>();
    public coaches: Repository<Coach> = new Repository<Coach>();

    public save() {
        // Não faz nada, a persistência é apenas em memória!
    }
}
