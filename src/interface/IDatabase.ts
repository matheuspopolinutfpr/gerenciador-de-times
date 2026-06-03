import Repository from "../service/Repository";
import Player from "../model/Player";
import Coach from "../model/Coach";
import Team from "../model/Team";

export default interface IDatabase {
    teams: Repository<Team>;
    players: Repository<Player>;
    coaches: Repository<Coach>;
    save(): void;
}
