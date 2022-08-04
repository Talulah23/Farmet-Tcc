import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import { Styles } from "./styles.native";
import Seta from "../../assets/seta.png";
import Logo from "../../assets/logo.png";


export default function InformacaoProfissional(){
    return (
        <Container>
                <View>
                    <Image source={Logo}></Image>
                    <View/>
                    <TextInput style={Styles.cardText} placeholder="Nome Usuário:"></TextInput>
                    <TextInput placeholder="Número:"></TextInput>
                    <TextInput placeholder="Endereço:"></TextInput>
                    <TouchableOpacity>
                        <Image style={Styles.imageStyle} source={Seta}></Image>
                    </TouchableOpacity>
                </View>
        </Container>
);
}