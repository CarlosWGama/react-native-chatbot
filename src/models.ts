
//Rostos disponíveis
export enum BotFaces {
    NORMAL = require('./faces/normal.png'),  
    FELIZ = require('./faces/feliz.png'),
    ESPANTADO = require('./faces/espantado.png'),
    PENSANDO = require('./faces/pensando.png'),
    SERIO = require('./faces/serio.png'),
    TRANQUILO = require('./faces/tranquilo.png'),
    TRISTE = require('./faces/triste.png')
} 

export class Opcao {
    constructor(public title: string, public onPress:any) {}
}