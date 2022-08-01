import { Container, Text, Paragraph, View, TouchableOpacity, Image } from "./styles";
import { Styles } from "./styles.native";
import Seta from "../../assets/seta.png";


export default function EscolhaConta(){
    return (
        <Container>
                <View>
                <Paragraph>Conta do Usuário</Paragraph>
                <Text style={Styles.cardColor}>Conta voltada à contratação de serviços, 
                nela é possível escolher o tipo de serviço desejado e o profissional que 
                mais se encaixa nos seus requisitos, além de fornecer um chat direto com 
                o mesmo.</Text>
                    <TouchableOpacity>
                        <Image source={Seta}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <Paragraph>Conta Profissional</Paragraph>
                    <Text style={Styles.cardColor}>Conta voltada à realização de serviços, 
                    nela é possível escolher sua especialização e adicionar informações sobre seu trabalho,
                    além de fornecer um chat direto com seu cliente.

</Text>
                        <TouchableOpacity>
                            <Image source={Seta}></Image>
                        </TouchableOpacity>
                </View>
        </Container>
);
}