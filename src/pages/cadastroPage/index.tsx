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
                <View>
                    <Paragraph type="name">Nome</Paragraph>
                    <br />
                    <TextInput ref={nameRef} type="name" placeholder="Insira seu nome" name="name" required/>
                    <br/>
                    <br />
                    <Paragraph type="email">Email</Paragraph>
                    <br />
                    <TextInput ref={emailRef} type="email" placeholder="Insira seu email" name="email" required/>
                    <br/>
                    <br />
                    <Paragraph type="psw"></Paragraph>
                    <br />
                    <TextInput ref={passwordRef} type="password" placeholder="Insira a senha" name="psw" required/>
                    <br />
                    <br />
                    <Container>
                        <Button>Cadastre-se</Button>
                    </Container>
                </View>
            </Container>
    );
}

export default CadastroPage;