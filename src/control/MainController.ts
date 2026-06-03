import FirstScreen from "../view/FirstScreen";
import MainService from "../service/MainService";
import Jogador from "../model/Jogador";
import Tecnico from "../model/Tecnico";
import Time from "../model/Time";
import { Posicao } from "../enum/EnumPosicao";

export default class MainController {

    private firstScreen: FirstScreen;
    private mainService: MainService;

    constructor() {
        this.mainService = new MainService();
        this.firstScreen = new FirstScreen(this);
    }

    public criarTime(name: string): Time {
        return this.mainService.criarTime(name);
    }

    public listarTimes(): string {
        return this.mainService.listarTimes();
    }

    public criarJogador(
        nome: string,
        dataNascimento: Date,
        posicao: Posicao,
        numero: number
    ): Jogador {

        return this.mainService.criarJogador(
            nome,
            dataNascimento,
            posicao,
            numero
        );
    }

    public listarJogadores(): string {
        return this.mainService.listarJogadores();
    }

    public buscarJogadoresPorNumero(numero: number): Jogador[];
    public buscarJogadoresPorNumero(numero: string): Jogador[];

    public buscarJogadoresPorNumero(
        numero: number | string
    ): Jogador[] {

        return this.mainService.buscarJogadoresPorNumero(numero as any);
    }

    public criarTecnico(
        nome: string,
        dataNascimento: Date
    ): Tecnico {

        return this.mainService.criarTecnico(
            nome,
            dataNascimento
        );
    }

    public listarTecnicos(): string {
        return this.mainService.listarTecnicos();
    }
}