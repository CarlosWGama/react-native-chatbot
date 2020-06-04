"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
/**
 * Componente responsável por exibir a formatação das imagens no chatbot
 * @param props
 */
function Msg(props) {
    return (<react_native_1.View style={[stylesMsg.msg, (props.bot ? stylesMsg.robo : stylesMsg.usuario)]}>
         <react_native_1.Text style={{ fontSize: 17, textAlign: 'center', color: (props.bot ? '#f8c400' : 'white') }}> 
            <react_native_1.Text style={{ fontWeight: 'bold' }}>{props.autor}:</react_native_1.Text> 
        {props.mensagem}</react_native_1.Text>
      </react_native_1.View>);
}
exports.Msg = Msg;
var stylesMsg = react_native_1.StyleSheet.create({
    msg: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 10,
        padding: 5,
        borderRadius: 10,
    },
    robo: {
        backgroundColor: '#0069ad'
    },
    usuario: {
        backgroundColor: '#32b2e3'
    }
});
/**
 * Componente responsável por exibir os botões do chatbot
 * @param props
 */
function Button(props) {
    return (<react_native_1.TouchableOpacity onPress={function () { console.log(props); props.onPress(); }}>
            <react_native_1.View style={stylesButton.btn}>
                <react_native_1.Text style={stylesButton.title}>{props.title}</react_native_1.Text>
            </react_native_1.View>
        </react_native_1.TouchableOpacity>);
}
exports.Button = Button;
var stylesButton = react_native_1.StyleSheet.create({
    btn: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
        margin: 5
    },
    title: {
        color: 'white'
    }
});
