import IDatabase from '../interface/IDatabase';
import Repository from "../service/Repository";
import Jogador from "../model/Jogador";
import Tecnico from "../model/Tecnico";
import Time from "../model/Time";

export default class MemoryDatabase implements IDatabase {
    public times: Repository<Time> = new Repository<Time>();
    public jogadores: Repository<Jogador> = new Repository<Jogador>();
    public tecnicos: Repository<Tecnico> = new Repository<Tecnico>();

    public salvar() {
        // Não faz nada, a persistência é apenas em memória!
    }
}
