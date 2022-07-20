import { Container, Button, Text, Paragraph, View } from "./styles";

function Escolha(){
    return (
        <Container>
            <View>
            <Paragraph>Escolha o tipo de conta desejado:</Paragraph>
            </View>
            <Container>
                <Paragraph>Conta do Usuário</Paragraph>
                <Text>.......</Text>
            </Container>
            <Container>
                <Paragraph>Conta Profissional</Paragraph>
                <Text>.......</Text>
            </Container>
        </Container>
);
}

