import React, { Component } from "react";
import { 
    SafeAreaView, 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    StyleSheet 
} from "react-native";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textPhrase: 'É necessário sempre acreditar que o sonho é possível, que o céu é o limite e você, truta, é imbatível',
            img: require('./src/assets/biscoito.png')
        };

        this.openCookie = this.openCookie.bind(this);

        this.phrases = [
            'Invejoso fede, contente-se com meu desprezo',
            'Virei uma máquina de fazer invejoso',
            'Siga sem medo, faça você mesmo, amor. Basta acreditar',
            'O homem sábio sempre aprende com o passado que teve',
            'Ei, irmão, nunca se esqueça: na guarda, guerreiro, levanta a cabeça',
            'Justiça e liberdade, a causa é legítima',
            'É necessário sempre acreditar que o sonho é possível, que o céu é o limite e você, truta, é imbatível',
            'Ninguém quer ser coadjuvante de ninguém',
            'Desde o início por ouro e prata, olha quem morre (…) me ver pobre, preso ou morto já é cultural',
            'Talvez um dia a gente aprenda a dar mais valor pro que nos traz paz, e menos valor pro que traz renda'
        ];
    }

    openCookie() {
        let numbersRandom = Math.floor(Math.random() * this.phrases.length);

        this.setState({
            textPhrase: `"${this.phrases[numbersRandom]}"`,
            img: require('./src/assets/biscoitoAberto.png')
        })
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Image
                    source={this.state.img}
                    style={styles.img}
                />
                <Text style={styles.textPhrase}>{this.state.textPhrase}</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.openCookie}
                >
                    <View style={styles.buttonArea}>
                        <Text style={styles.buttonText}>Quebrar Biscoito</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 250,
        height: 250
    },
    textPhrase: {
        fontSize: 20,
        color: "#db7722",
        margin: 30,
        fontStyle: "italic",
        textAlign: "center"
    },
    button: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: "#db7733",
        borderRadius: 10
    },
    buttonArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#db7722"
    }
});
