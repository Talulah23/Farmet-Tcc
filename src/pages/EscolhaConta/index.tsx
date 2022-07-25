import { Container, Text, Paragraph, View, TouchableOpacity } from "./styles";
import { Styles } from "./styles.native";

export default function EscolhaConta(){
    return (
        <Container>
            <View style={Styles.cardText}>
            <Paragraph>Escolha o tipo de conta desejado:</Paragraph>
            </View>
            <Container  style={Styles.cardContainer}>
                <Paragraph>Conta do Usuário</Paragraph>
                <Text>.......</Text>
                    <TouchableOpacity></TouchableOpacity>
            </Container>
            <Container  style={Styles.cardContainer}>
                <Paragraph>Conta Profissional</Paragraph>
                <Text>.......</Text>
                    <TouchableOpacity></TouchableOpacity>
            </Container>
        </Container>
);
}