import { Container, View, Text, TouchableOpacity } from './styles';
import { Styles, Touch } from './styles.native';


export default function SelecaoIdioma() {   
    
    return(
        <Container>
            <View style={Styles.cardContainer}>
                <Text>Teste</Text>
            </View>
            <TouchableOpacity>
                <Text>Enviar</Text>
            </TouchableOpacity>
        </Container>
    );
}

