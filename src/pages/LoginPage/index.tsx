import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Container, Container2, Button, Paragraph, TextInput, View } from "./styles"

function LoginPage() {
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
                <View >
                    <Paragraph nativeID="email">Username</Paragraph>
                    <br />
                    <TextInput ref={emailRef} type="email" placeholder="Enter email" name="email" required/>
                    <br/>
                    <br />
                    <Paragraph nativeID="Password">Password</Paragraph>
                    <br />
                    <TextInput ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required/>
                    <br />
                    <br />
                    <Container2>
                        <Button>Login</Button>
                    </Container2>
                </View>
            </Container> 
            :
                <Container>
                </Container>
            );
}

export default LoginPage;