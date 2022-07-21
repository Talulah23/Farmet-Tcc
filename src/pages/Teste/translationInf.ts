import React from 'react';
import { Formik, Form } from 'formik';
import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { setLocale } from 'yup';
import { pt } from 'yup-locale-pt'
import ko from 'yup-locale-ko';


i18n.translations = {
    'pt-BR': {
        username: 'nome usuario',
        number: 'Numero',
        address: 'endereço',
        next: 'Proximo',
    },
    'ko': {
        username: '사용자 이름',
        number: '숫자',
        address: '주소',
        next: '다음',
    },
    'it': {
        username: 'nome utente',
        number: 'numero',
        address: 'indirizzo',
        next: 'prossimo',
    },
    'es': {
        username: 'nombre de usuario',
        number: 'número',
        address: 'Dirección',
        next: 'Siguiente',
    },

}

i18n.locale = Localization.locale;