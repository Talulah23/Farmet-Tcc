import * as React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { string } from 'yup/lib/locale';

Yup.setLocale(pt);

const useSchame = Yup.object({
    name: string().required(),
    email: string(),
});
function Form(){




    return (
    );
}