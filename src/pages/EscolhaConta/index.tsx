import { Container, Button, Text, Paragraph, View, TouchableOpacity } from "./styles";

function Escolha(){
    return (
        <Container>
            <View>
            <Paragraph>Escolha o tipo de conta desejado:</Paragraph>
            </View>
            <Container>
                <Paragraph>Conta do Usuário</Paragraph>
                <Text>.......</Text>
                    <TouchableOpacity></TouchableOpacity>
            </Container>
            <Container>
                <Paragraph>Conta Profissional</Paragraph>
                <Text>.......</Text>
                    <TouchableOpacity></TouchableOpacity>
            </Container>
        </Container>
);
}