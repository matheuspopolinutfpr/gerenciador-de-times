import Jogador from "./model/Jogador";
import Tecnico from "./model/Tecnico";
import Time from "./model/Time";

//simulador do SGDB 
export default class Database {
    public times: Time[] = [];
    public jogadores: Jogador[] = [];
    public tecnicos: Tecnico[] = [];
}