import { useRef } from "react";
// import { View } from "react-native";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Formik } from 'formik';
import { Styles } from "./styles.native";
import { object, string } from 'yup';
import Logo from "../../assets/logo.png";
import I18n from "i18n-js";
import Google from "../../assets/google.png";
import { Container, Paragraph, TextInput, View, TouchableOpacity, Text, Image } from "./styles"
import i18n from "i18n-js";
import * as Localization from 'expo-localization';

// i18n.translations = {
//     en: { email: 'email',
//         password: 'password'},

//     pt: { email: 'email',
//         password: 'senha'},
// };

// i18n.locale = Localization.locale;

const useSchema = object({
    password: string().required(),
    email: string().email(),
})

function LoginPage() {
    const initialValues = { password: '', email: '' };

    const handleOnSubmit = async (
        values: typeof initialValues,
    ) => {
        console.log(values);
    };
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
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
                    <Image source={Logo}></Image>
                    <Text>Email</Text>
                    <TextInput
                        placeholder="email"
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
                        placeholder="senha"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        isValid={
                            !(errors.password && touched.password)
                        }
                    />
                    {errors.password && touched.password ? (
                        <Text>{errors.password}</Text>
                    ) : null}
                    <TouchableOpacity 
                    onChangeText={handleSubmit}>
                            <Paragraph>Login</Paragraph>
                        </TouchableOpacity>
                    <Text style={Styles.textFontColor}>Entrar com Google</Text>
                    <TouchableOpacity style={Styles.buttonColor}>
                    <Image style={Styles.imageGoogle} source={Google}></Image>
                    </TouchableOpacity>
                </Container>
            )}
        </Formik>
    );
}

export default LoginPage;


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


                     {/* <Text>{I18n.t('cnpj')}</Text>
//                     <TextInput
//                         onChangeText={value => {
//                             handleChange('cnpj')(
//                                 mask(
//                                     value,
//                                     '99.9.999/9999-99',
//                                 ),
//                             );
//                         }}
//                         onBlur={handleBlur('cnpj')}
//                         value={values.cnpj}
//                         isValid={
//                             !(errors.cnpj && touched.cnpj)
//                         }
//                     />
//                     {errors.cnpj && touched.cnpj ? (
//                         <Text>{errors.cnpj}</Text>
//                     // ) : null} */}

                    {/* <Button
                        onPress={() => handleSubmit()}
                        title={I18n.t('submit')}
                    /> */}