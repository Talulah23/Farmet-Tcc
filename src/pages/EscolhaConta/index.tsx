import { Container, Text, Paragraph, View, TouchableOpacity, Image } from "./styles";
import { Styles } from "./styles.native";
import Seta from "../../assets/seta.png";
export default function EscolhaConta(){
    return (
        <Container>
            <View>
            <Paragraph style={Styles.cardText}>Escolha o tipo de conta desejado:</Paragraph>
            </View>
            <Container>
                <View>
                <Paragraph>Conta do Usuário</Paragraph>
                <Text style={Styles.cardColor}>Conta usuario</Text>
                    <TouchableOpacity>
                        <Image source={Seta}></Image>
                    </TouchableOpacity>
                </View>
            </Container>
            <Container>
                <Paragraph>Conta Profissional</Paragraph>
                <Text style={Styles.cardColor}>Conta profissonal</Text>
                    <TouchableOpacity>
                        <Image source={Seta}></Image>
                    </TouchableOpacity>
            </Container>
        </Container>
);
}