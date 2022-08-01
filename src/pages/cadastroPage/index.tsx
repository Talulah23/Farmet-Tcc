import { useRef } from "react";
// import { View } from "react-native";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Formik } from 'formik';
import { Styles } from "./styles.native";
import Logo from "../../assets/logo.png";
import { Container, TouchableOpacity, Paragraph, TextInput, View, Text, Image } from "./styles"

export default function CadastroPage() {
    
    return (

        <Container>
            <Image source={Logo}></Image> 
            <Text>Nome</Text>
            <TextInput></TextInput>
            <Text>Email</Text>
            <TextInput>
                <Paragraph style={Styles.inputColor}>Email</Paragraph>
            </TextInput>
            <Text>Senha</Text>
            <TextInput>
            <Paragraph style={Styles.inputColor}>Senha</Paragraph>
            </TextInput>
            <TouchableOpacity>
                    <Paragraph>Cadastrar-se</Paragraph>
            </TouchableOpacity>
        </Container>

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