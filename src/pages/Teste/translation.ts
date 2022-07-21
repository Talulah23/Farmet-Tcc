import React from 'react';
import { Formik, Form } from 'formik';
import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { setLocale } from 'yup';
import { pt } from 'yup-locale-pt'


I18nManager.translations = {
    'pt-BR': {
        name: 'nome',
        email: 'email',
        password: 'senha',
        submit: 'enviar',
    },
}
i18n.locale = Localization.locale;
// const setLocale