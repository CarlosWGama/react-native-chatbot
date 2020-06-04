import * as React from 'react';
import { BotFaces, Opcao } from './models';
export interface ChatbotProps {
    getResposta?(texto: string): any;
}
export interface ChatbotState {
    mensagens: any[];
    botFace: BotFaces;
    botoes: Opcao[];
    textoAtivo: boolean;
    textoFuncao?: any;
    texto: string;
}
export declare class Chatbot extends React.Component<ChatbotProps, ChatbotState> {
    constructor(props: ChatbotProps);
    /**
     * Função responsável por adicionar falar no Chat
     * @param mensagem: Mensagem que será exibida
     * @param botFace: Rosto do chatbot, caso não informado mantem o antigo. Também pode receber um require de uma imagem
     * @param autor: Nome de quem enviou a mensagem
     * @param bot: Se quem enviou a mensagem foi o bot
     * */
    falar(mensagem: string, botFace?: BotFaces | any, autor?: string, bot?: boolean, delay?: number): Promise<void>;
    /**
     * Adicionando formas do usuário interagir
     * @param tipo: adiciona interação que pode ser texto ou opcoes
     * @param funcoes: Caso a interaçao seja de botões passa um vetor com as opções que o usuário terá, ou no caso de texto poderá se ruma unica função
     * @param botFace: Rosto do chatbot, caso não informado mantem o antigo. Também pode receber um require de uma imagem
     * */
    interagir(tipo: 'texto' | 'botoes', funcoes?: any, botFace?: BotFaces): void;
    render(): any;
}
