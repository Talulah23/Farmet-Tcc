import * as React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { string } from 'yup/lib/locale';
import { View } from 'react-native';

Yup.setLocale(pt);

export default function Form(){
    const useSchame = Yup.object({
    //     name: string()
    });




    return (
        <View></View>
    );
}