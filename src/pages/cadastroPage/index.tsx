import { useRef } from "react";
// import { View } from "react-native";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Formik } from 'formik';
import { Styles } from "./styles.native";
import Logo from "../../assets/logo.png";
import { Container, TouchableOpacity, Paragraph, TextInput, View, Text, Image } from "./styles";
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

    const { signUp } = useAuth()
    console.log(signUp);
    

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => signUp('email_and_password', values).then(() => navigate.navigate('EscolhaConta'))}
            validationSchema={useSchema}
        >
             {({ handleSubmit }) => (
            <Container>
                    <Image source={Logo}></Image> 
                    <Text>Nome</Text>
                    <TextInput></TextInput>
                    <Text>Email</Text>
                    <TextInput placeholder="email">
                    </TextInput>
                    <Text style={Styles.inputColor}>Senha</Text>
                    <TextInput>
                    <Text>Senha</Text>
                    </TextInput>
                    <TouchableOpacity 
                        onPress={() => handleSubmit()}>
                            <Paragraph>Cadastrar-se</Paragraph>
                    </TouchableOpacity>
                </Container>
            )}
        </Formik>
    );
}

    // const emailRef = useRef<HTMLInputElement | null>(null);
    // const passwordRef = useRef<HTMLInputElement | null>(null);
    // // const navigate = useNavigate();

    // // const { signIn, isUserDataPresent } = useAuth();
    // const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (emailRef.current?.value !== undefined && passwordRef.current?.value !== undefined) {
    //         // signIn('email_and_password', {
    //         //     email: emailRef.current?.value,
    //         //     password: passwordRef.current?.value,
    //         // }).then(() => {
    //         //     // navigate('/');
    //         // });
    //     }
    // }

    // isUserDataPresent ? 
    //     <Container>
    //         <View >
    //             <Paragraph nativeID="email">Username</Paragraph>
    //             <br />
    //             <TextInput ref={emailRef} type="email" placeholder="Enter email" name="email" required/>
    //             <br/>
    //             <br />
    //             <Paragraph nativeID="Password">Password</Paragraph>
    //             <br />
    //             <TextInput ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required/>
    //             <br />
    //             <br />
    //             <Container2>
    //                 <Button>Login</Button>
    //             </Container2>
    //         </View>
    //     </Container> 
    //     :
    //         <Container>
    //         </Container>