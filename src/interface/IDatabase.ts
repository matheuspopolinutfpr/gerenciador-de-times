import Repository from "../service/Repository";
import Jogador from "../model/Jogador";
import Tecnico from "../model/Tecnico";
import Time from "../model/Time";

export default interface IDatabase {
    times: Repository<Time>;
    jogadores: Repository<Jogador>;
    tecnicos: Repository<Tecnico>;
    salvar(): void;
}
