import React from 'react';
import { View, StyleSheet, Image, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { BotFaces, Opcao } from './models';
import { Msg, Button } from './components';

export interface ChatbotProps {
    getResposta?(texto: string):any;
}

export interface ChatbotState {
    mensagens: any[];
    botFace: BotFaces;
    botoes: Opcao[];
    textoAtivo: boolean;
    textoFuncao?: any;
    texto: string;
}

export class Chatbot extends React.Component<ChatbotProps, ChatbotState> {
    constructor(props: ChatbotProps) {
        super(props);
        this.state = {
            mensagens: [], botFace: BotFaces.FELIZ, botoes: [], textoAtivo: false, texto: '',
        };
    }

    /**
     * Função responsável por adicionar falar no Chat
     * @param mensagem: Mensagem que será exibida
     * @param botFace: Rosto do chatbot, caso não informado mantem o antigo. Também pode receber um require de uma imagem
     * @param autor: Nome de quem enviou a mensagem
     * @param bot: Se quem enviou a mensagem foi o bot
     * */
    public async falar(mensagem: string, botFace?: BotFaces|any,  autor: string  = 'Bot-CC1', bot:boolean = true, delay:number = 1000) {
        //Expressão do bot
        if (botFace)
            this.setState({botFace})
       
        //Ajuste das falas
        const mensagens = [...this.state.mensagens];
        mensagens.push({mensagem: 'Digitando...', autor, bot})
        if (mensagens.length > 5) mensagens.shift();   
        
        this.setState({mensagens, botoes: [], textoAtivo: false})
    
        await new Promise(resolve => setTimeout(() => resolve(), delay))
        
        //Exibe o texto após o delay
        const index = mensagens.length - 1;
        mensagens[index].mensagem = mensagem;
        this.setState({mensagens})


    }

    /**
     * Adicionando formas do usuário interagir
     * @param tipo: adiciona interação que pode ser texto ou opcoes
     * @param funcoes: Caso a interaçao seja de botões passa um vetor com as opções que o usuário terá, ou no caso de texto poderá se ruma unica função
     * @param botFace: Rosto do chatbot, caso não informado mantem o antigo. Também pode receber um require de uma imagem
     * */
    public interagir(tipo: 'texto'|'botoes', funcoes?: any, botFace = BotFaces.NORMAL) {
        //Trabalhando com botões
        if (tipo == 'botoes' && Array.isArray(funcoes)) 
            this.setState({botoes: funcoes});

        //Trabalhando com texto
        else if (tipo == 'texto') 
            this.setState({texto: '', textoAtivo: true, textoFuncao: funcoes});
        
        
        //Expressão do bot
        if (botFace)
            this.setState({botFace})

    }


  public render() {
    const {mensagens, botFace, botoes, texto, textoAtivo, textoFuncao} = this.state; 
    return (
        <View style={styles.container}>
            {/* Personagem */}
            <View style={{paddingTop:10, flex:1, maxHeight: 110, alignItems: 'center'}}>
                <Image source={botFace} style={{width:100, height:100}}></Image>
            </View>

            {/* Mensagens */}
            <View style={styles.mensagens}>
                <FlatList
                  data={mensagens}
                  extraData={mensagens}
                  keyExtractor={(item, index) => 'key'+index}
                  renderItem={ ({item}) => (<View><Msg {...item}/></View>) }
                />
            </View>

            {/* Opções */}
            {botoes.length > 0 && <View style={styles.buttons}>
               {botoes.map((btn:any) => <Button {...btn} key={"key"+btn.title} />)}
            </View>}

            {/* Texto */}
            {textoAtivo && <View style={{flexDirection: 'row', alignItems:'center'}}>
                <TextInput style={styles.textInput}
                    placeholder="Digite aqui..."
                    value={texto} 
                    onChangeText={(texto) => this.setState({texto})} />
                <TouchableOpacity onPress={() => textoFuncao(texto)}>
                    <Text style={styles.btnText}>Enviar</Text>
                </TouchableOpacity>
            </View>}
    </View>
    );
  }
}

//==================== ESTILO =====================//
const styles = StyleSheet.create({
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
