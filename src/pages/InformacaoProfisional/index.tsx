import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import { Styles } from "./styles.native";
import Avatar from "../../assets/perfil.jpg";
import Plus from "../../assets/plus.png"


export default function InformacaoProfissional(){
    return (
        <Container>
                <View>
                    <View>
                        <TouchableOpacity style={Styles.buttonColor}>
                        <Image style={Styles.imageStyle} source={Plus}></Image>
                        </TouchableOpacity>
                    </View>
                    <Image source={Avatar}></Image>
                    <TextInput style={Styles.cardText} placeholder="Nome Usuário:"></TextInput>
                    <TextInput placeholder="Número:"></TextInput>
                    <TextInput placeholder="Endereço:"></TextInput>
                    <TouchableOpacity>
                            <Paragraph>Próximo</Paragraph>
                    </TouchableOpacity>
                </View>
        </Container>
);
}