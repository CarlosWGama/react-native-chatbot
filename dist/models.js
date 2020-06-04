"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Rostos disponíveis
var BotFaces;
(function (BotFaces) {
    BotFaces[BotFaces["NORMAL"] = require('./faces/normal.png')] = "NORMAL";
    BotFaces[BotFaces["FELIZ"] = require('./faces/feliz.png')] = "FELIZ";
    BotFaces[BotFaces["ESPANTADO"] = require('./faces/espantado.png')] = "ESPANTADO";
    BotFaces[BotFaces["PENSANDO"] = require('./faces/pensando.png')] = "PENSANDO";
    BotFaces[BotFaces["SERIO"] = require('./faces/serio.png')] = "SERIO";
    BotFaces[BotFaces["TRANQUILO"] = require('./faces/tranquilo.png')] = "TRANQUILO";
    BotFaces[BotFaces["TRISTE"] = require('./faces/triste.png')] = "TRISTE";
})(BotFaces = exports.BotFaces || (exports.BotFaces = {}));
var Opcao = /** @class */ (function () {
    function Opcao(title, onPress) {
        this.title = title;
        this.onPress = onPress;
    }
    return Opcao;
}());
exports.Opcao = Opcao;
