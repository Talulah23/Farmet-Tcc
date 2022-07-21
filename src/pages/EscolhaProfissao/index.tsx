import { Container, Button, Text, Paragraph, View, Touch } from "./styles";

export default function EscolhaProfissao(){
    return (
        <Container>
            <View>
            <Paragraph>Escolha o tipo de conta desejado:</Paragraph>
            </View>
            <Container>
                <Paragraph>Conta do Usuário</Paragraph>
                <Text>.......</Text>
                    <Touch></Touch>
            </Container>
            <Container>
                <Paragraph>Conta Profissional</Paragraph>
                <Text>.......</Text>
                    <Touch></Touch>
            </Container>
        </Container>
);
}