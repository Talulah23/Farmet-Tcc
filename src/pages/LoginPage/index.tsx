import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Formik } from 'formik';
import { Styles } from "./styles.native";
import { object, string } from 'yup';
import Logo from "../../assets/logo.png";
import Google from "../../assets/google.png";
import { Container, Paragraph, TextInput, View, TouchableOpacity, Text, Image } from "./styles"
import { ScrollView } from 'react-native';
import * as Localization from 'expo-localization';
import { AuthProvider } from "../../hooks/Auth";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "routes/types";

// i18n.translations = {
//     en: { email: 'email',
//         password: 'password'},

//     pt: { email: 'email',
//         password: 'senha'},
// };

// i18n.locale = Localization.locale;

const useSchema = object({
    password: string().required(),
    email: string().email().required(),
})

function LoginPage() {
    const initialValues = { password: '', email: '' };

    const { signIn } = useAuth()

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <ScrollView style={Styles.scrollStyle}>
            <Formik
            initialValues={initialValues}
            onSubmit={values => signIn('email_and_password', values).then(() => navigate.navigate('EscolhaConta')) }
            validationSchema={useSchema}
            >

                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <Container>
                            <Image style={Styles.logo} source={Logo}></Image>
                            <Text style={Styles.textFont}>Fazer Login</Text>
                            <Text>Email</Text>
                            <TextInput
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                isValid={
                                    !(errors.email && touched.email)
                                }
                            />
                            {errors.email && touched.email ? (
                                <Text>{errors.email}</Text>
                            ) : null}
                            {/* <Text>{i18n.t('email')}</Text> */}
                            <Text>Senha</Text>
                            <TextInput
                                placeholder="Senha"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry = {true}
                                value={values.password}
                                isValid={
                                    !(errors.password && touched.password)
                                }
                            />
                            {errors.password && touched.password ? (
                                <Text>{errors.password}</Text>
                            ) : null}
                            
                            <TouchableOpacity
                                style={Styles.buttonSize}
                                onPress={() => handleSubmit()}
                            >
                                    <Paragraph>Login</Paragraph>
                            </TouchableOpacity>
                            <Text style={Styles.textFontColor}>  
                                Entrar com Google
                            </Text>
                            <TouchableOpacity 
                                style={Styles.buttonColor}
                                onClick={ AuthProvider }
                            >
                                    <Image 
                                        style={Styles.imageGoogle}
                                        source={Google}>
                                    </Image>
                            </TouchableOpacity>
                            <View>
                                <Paragraph style={Styles.textAboveSignUp}>
                                    Não possui uma conta?
                                </Paragraph>
                                <Text 
                                    style={Styles.textSignUp}
                                    onPress={() => navigate.navigate('Cadastro')}
                                >
                                    Cadastre-se
                                </Text>
                            </View>
                        </Container>
                            
                    )}
                </Formik>
            </ScrollView>
    );
}

export default LoginPage;