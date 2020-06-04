import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface MsgProps {
    autor:string;
    mensagem: string
    bot?: boolean
}
/**
 * Componente responsável por exibir a formatação das imagens no chatbot
 * @param props 
 */
export function Msg (props: MsgProps) {
    return (
      <View style={[stylesMsg.msg, (props.bot ? stylesMsg.robo : stylesMsg.usuario)]}>
         <Text style={{fontSize: 17, textAlign: 'center', color: (props.bot ? '#f8c400' : 'white')}}> 
            <Text style={{fontWeight: 'bold'}}>{props.autor}:</Text> 
        {props.mensagem}</Text>
      </View>
    );
}
const stylesMsg = StyleSheet.create({
    msg: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 10,
        padding:5,
        borderRadius: 10,
    },
    robo: {
        backgroundColor: '#0069ad'
    },
    usuario: {
        backgroundColor: '#32b2e3'
    }
});

//=====================================================
export interface ButtonProps {
    title:string;
    onPress(): any
}
/**
 * Componente responsável por exibir os botões do chatbot
 * @param props 
 */
export function Button(props: ButtonProps) {
    return (
        <TouchableOpacity onPress={() => { console.log(props); props.onPress()}}>
            <View style={stylesButton.btn}>
                <Text style={stylesButton.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const stylesButton = StyleSheet.create({
    btn: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
        margin:5
    },
    title: {
        color: 'white'
    }
});

