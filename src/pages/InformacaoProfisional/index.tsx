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
                    <TextInput placeholder="Nome Usuário:"></TextInput>
                    <View/>
                    <TextInput placeholder="Número:"></TextInput>
                    <View/>
                    <TextInput placeholder="Endereço:"></TextInput>
                    <View/>
                    <TouchableOpacity>
                            <Paragraph>Próximo</Paragraph>
                    </TouchableOpacity>
                </View>
        </Container>
);
}