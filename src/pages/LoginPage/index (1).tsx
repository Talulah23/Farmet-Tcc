import { Button, Text } from 'react-native';
import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { cpf } from 'cpf-cnpj-validator';
import { mask } from 'react-native-mask-text';
import { i18n, translateYup } from '../../translations';
import { Container, TextInput } from './styles';

translateYup();

const userSchema = object({
    name: string().required(),
    age: number().required().positive().integer(),
    cpf: string().test(
        'test-invalid-cpf',
        'cpf inválido',
        cpfValue =>
            cpfValue !== undefined && cpf.isValid(cpfValue),
    ),
});

export default () => {
    const initialValues = { name: '', age: '', cpf: '' };

    const handleOnSubmit = async (
        values: typeof initialValues,
    ) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={userSchema}
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
                    <Text>{i18n.t('name')}</Text>
                    <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        isValid={
                            !(errors.name && touched.name)
                        }
                    />
                    {errors.name && touched.name ? (
                        <Text>{errors.name}</Text>
                    ) : null}
                    <Text>{i18n.t('age')}</Text>
                    <TextInput
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        isValid={
                            !(errors.age && touched.age)
                        }
                    />
                    {errors.age && touched.age ? (
                        <Text>{errors.age}</Text>
                    ) : null}
                    <Text>{i18n.t('cpf')}</Text>
                    <TextInput
                        onChangeText={value => {
                            handleChange('cpf')(
                                mask(
                                    value,
                                    '999.999.999-99',
                                ),
                            );
                        }}
                        onBlur={handleBlur('cpf')}
                        value={values.cpf}
                        isValid={
                            !(errors.cpf && touched.cpf)
                        }
                    />
                    {errors.cpf && touched.cpf ? (
                        <Text>{errors.cpf}</Text>
                    ) : null}

                    <Button
                        onPress={() => handleSubmit()}
                        title={i18n.t('submit')}
                    />
                </Container>
            )}
        </Formik>
    );
};
