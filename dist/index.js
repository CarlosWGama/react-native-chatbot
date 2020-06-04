"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var models_1 = require("./models");
var components_1 = require("./components");
var Chatbot = /** @class */ (function (_super) {
    __extends(Chatbot, _super);
    function Chatbot(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            mensagens: [], botFace: models_1.BotFaces.FELIZ, botoes: [], textoAtivo: false, texto: '',
        };
        return _this;
    }
    /**
     * Função responsável por adicionar falar no Chat
     * @param mensagem: Mensagem que será exibida
     * @param botFace: Rosto do chatbot, caso não informado mantem o antigo. Também pode receber um require de uma imagem
     * @param autor: Nome de quem enviou a mensagem
     * @param bot: Se quem enviou a mensagem foi o bot
     * */
    Chatbot.prototype.falar = function (mensagem, botFace, autor, bot, delay) {
        if (autor === void 0) { autor = 'Bot-CC1'; }
        if (bot === void 0) { bot = true; }
        if (delay === void 0) { delay = 1000; }
        return __awaiter(this, void 0, void 0, function () {
            var mensagens, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //Expressão do bot
                        if (botFace)
                            this.setState({ botFace: botFace });
                        mensagens = __spreadArrays(this.state.mensagens);
                        mensagens.push({ mensagem: 'Digitando...', autor: autor, bot: bot });
                        if (mensagens.length > 5)
                            mensagens.shift();
                        this.setState({ mensagens: mensagens, botoes: [], textoAtivo: false });
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, delay); })
                            //Exibe o texto após o delay
                        ];
                    case 1:
                        _a.sent();
                        index = mensagens.length - 1;
                        mensagens[index].mensagem = mensagem;
                        this.setState({ mensagens: mensagens });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Adicionando formas do usuário interagir
     * @param tipo: adiciona interação que pode ser texto ou opcoes
     * @param funcoes: Caso a interaçao seja de botões passa um vetor com as opções que o usuário terá, ou no caso de texto poderá se ruma unica função
     * @param botFace: Rosto do chatbot, caso não informado mantem o antigo. Também pode receber um require de uma imagem
     * */
    Chatbot.prototype.interagir = function (tipo, funcoes, botFace) {
        if (botFace === void 0) { botFace = models_1.BotFaces.NORMAL; }
        //Trabalhando com botões
        if (tipo == 'botoes' && Array.isArray(funcoes))
            this.setState({ botoes: funcoes });
        //Trabalhando com texto
        else if (tipo == 'texto')
            this.setState({ texto: '', textoAtivo: true, textoFuncao: funcoes });
        //Expressão do bot
        if (botFace)
            this.setState({ botFace: botFace });
    };
    Chatbot.prototype.render = function () {
        var _this = this;
        var _a = this.state, mensagens = _a.mensagens, botFace = _a.botFace, botoes = _a.botoes, texto = _a.texto, textoAtivo = _a.textoAtivo, textoFuncao = _a.textoFuncao;
        return (<react_native_1.View style={styles.container}>
            
            <react_native_1.View style={{ paddingTop: 10, flex: 1, maxHeight: 110, alignItems: 'center' }}>
                <react_native_1.Image source={botFace} style={{ width: 100, height: 100 }}></react_native_1.Image>
            </react_native_1.View>

            
            <react_native_1.View style={styles.mensagens}>
                <react_native_1.FlatList data={mensagens} extraData={mensagens} keyExtractor={function (item, index) { return 'key' + index; }} renderItem={function (_a) {
            var item = _a.item;
            return (<react_native_1.View><components_1.Msg {...item}/></react_native_1.View>);
        }}/>
            </react_native_1.View>

            
            {botoes.length > 0 && <react_native_1.View style={styles.buttons}>
               {botoes.map(function (btn) { return <components_1.Button {...btn} key={"key" + btn.title}/>; })}
            </react_native_1.View>}

            
            {textoAtivo && <react_native_1.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <react_native_1.TextInput style={styles.textInput} placeholder="Digite aqui..." value={texto} onChangeText={function (texto) { return _this.setState({ texto: texto }); }}/>
                <react_native_1.TouchableOpacity onPress={function () { return textoFuncao(texto); }}>
                    <react_native_1.Text style={styles.btnText}>Enviar</react_native_1.Text>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>}
    </react_native_1.View>);
    };
    return Chatbot;
}(React.Component));
exports.Chatbot = Chatbot;
//==================== ESTILO =====================//
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 400
    },
    mensagens: {
        flex: 1,
        height: '80%',
        width: '90%',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 10
    },
    textInput: {
        margin: 10,
        backgroundColor: 'rgba(200, 200, 200, 0.3)',
        padding: 10,
        borderRadius: 10,
        flex: 1
    },
    btnText: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        color: 'white',
        margin: 5
    },
    button: {
        borderRadius: 10
    }
});
