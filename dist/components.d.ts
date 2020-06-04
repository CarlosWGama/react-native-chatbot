export interface MsgProps {
    autor: string;
    mensagem: string;
    bot?: boolean;
}
/**
 * Componente responsável por exibir a formatação das imagens no chatbot
 * @param props
 */
export declare function Msg(props: MsgProps): any;
export interface ButtonProps {
    title: string;
    onPress(): any;
}
/**
 * Componente responsável por exibir os botões do chatbot
 * @param props
 */
export declare function Button(props: ButtonProps): any;
