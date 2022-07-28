import { useRef } from "react";
// import { View } from "react-native";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../hooks/Auth";
import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { cnpj } from 'cpf-cnpj-validator';
import { mask } from 'react-native-mask-text';
import { Container, Paragraph, TextInput, View, TouchableOpacity, Text } from "./styles"
import I18n from "i18n-js";

const useSchema = object({
    password: string().required(),
    // cnpj: string().test(
    //     'test-invalid-cnpj',
    //     'cnpj inválido',
    //     cnpjValue =>
    //         cnpjValue !== undefined && cnpj.isValid(cnpjValue),
    // ),
        
    email: string().email(),
})
function LoginPage() {
    const initialValues = { passaword: '', email: '' };

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
                    {/* <Text>{I18n.t('passaword')}</Text> */}
                    <Text>Email</Text>
                    <TextInput
                        onChangeText={handleChange('passaword')}
                        onBlur={handleBlur('passaword')}
                        value={values.passaword}
                        isValid={
                            !(errors.passaword && touched.passaword)
                        }
                    />
                    {errors.passaword && touched.passaword ? (
                        <Text>{errors.passaword}</Text>
                    ) : null}
                    {/* <Text>{I18n.t('email')}</Text> */}
                    <Text>Senha</Text>
                    <TextInput
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
                    <TouchableOpacity 
                    // onPress={() => handleSubmit()}
                    //     title={I18n.t('submit')}
                        >
                            <Paragraph>Login</Paragraph>
                        </TouchableOpacity>
                        {/* <TextInput>
                            <Text>Email</Text>
                        </TextInput> */}
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