import { useRef } from "react";
import { Container, Button, Paragraph, TextInput, View } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";

function CadastroPage() {
    
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const { signIn, isUserDataPresent } = useAuth();
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailRef.current?.value !== undefined && passwordRef.current?.value !== undefined) {
            signIn('email_and_password', {
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            }).then(() => {
                navigate('/');
            });
        }
    }
    
    return (
        isUserDataPresent ? 
            <Container>
                <View onSubmit={handleOnSubmit} className="principal2">
                    <Paragraph nativeID="name">Nome</Paragraph>
                    <br />
                    <TextInput ref={nameRef} type="name" placeholder="Insira seu nome" name="name" required/>
                    <br/>
                    <br />
                    <Paragraph nativeID="email">Email</Paragraph>
                    <br />
                    <TextInput ref={emailRef} type="email" placeholder="Insira seu email" name="email" required/>
                    <br/>
                    <br />
                    <Paragraph nativeID="password">Senha</Paragraph>
                    <br />
                    <TextInput ref={passwordRef} type="password" placeholder="Insira a senha" name="psw" required/>
                    
                    <Container>
                        <Button>Cadastre-se</Button>
                    </Container>
                </View>
            </Container>
        :
        <Container></Container>

        );
}

export default CadastroPage;