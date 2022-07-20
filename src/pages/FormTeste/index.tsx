import React from 'react';
import { Formik, Form } from 'formik';

const Teste = () => (
    <div>
        <Formik
            initialValues={{ email:'', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Obrigatório';
                } else if (
                    
                )
            }}
        ></Formik>
    </div>
)