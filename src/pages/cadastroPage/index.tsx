import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Formik } from 'formik';
import { Styles } from "./styles.native";
import Logo from "../../assets/logo.png";
import { Container, TouchableOpacity, Paragraph, TextInput, View, Text, Image } from "./styles";
import { ScrollView } from 'react-native';
import { object, string } from "yup";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "routes/types"

const useSchema = object({
    password: string().required(),
    email: string().email().required(),
    name: string().required(),
})
export default function CadastroPage() {
    const initialValues = { password: '', email: '', name: '' };

    const { signUp } = useAuth();

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <ScrollView style={Styles.scrollStyle}>
            <Formik
                initialValues={initialValues}
                onSubmit={values => signUp('email_and_password_and_name', values).then(() => navigate.navigate('EscolhaConta'))}
                validationSchema={useSchema}
            >
                {({ 
                    handleSubmit,
                    // values,
                    // errors,
                    // touched,
                 }) => (
                <Container>
                        <Image 
                            style={Styles.logo} 
                            source={Logo}>
                        </Image>
                        <Text style={Styles.textFont}>
                            Cadastro
                        </Text>
                        <Text>Nome</Text>
                    <TextInput 
                        placeholder="Nome">
                    </TextInput>
                        <Text>Email</Text>
                    <TextInput 
                        placeholder="Email"
                        // value={values.email}
                        // isValid={
                        //     !(errors.email && touched.email)
                        // }
                    >
                    </TextInput>
                        <Text>Senha</Text>
                    <TextInput 
                        placeholder="Senha"
                        // value={values.password}
                        // isValid={
                        //     !(errors.password && touched.password)
                        // }
                    >
                    </TextInput>
                        <TouchableOpacity 
                            style={Styles.buttonSize}
                            onPress={() => handleSubmit()}
                        >
                                <Paragraph>Cadastrar-se</Paragraph>
                        </TouchableOpacity>
                    </Container>
                )
            }
            </Formik>
        </ScrollView>
    );
}
