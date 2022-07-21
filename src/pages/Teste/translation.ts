import React from 'react';
import { Formik, Form } from 'formik';
import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import { setLocale } from 'yup';
import { pt } from 'yup-locale-pt'


I18n.translations = {
    'pt-BR': {
        name: 'nome',
        password: 'senha',
        email: 'email',
        register: 'cadastre-se',
    },

    'fr': {
        name: 'nom',
        password: 'le mot de passe',
        email: 'e-mail',
        register: 'nous faire parvenir',
    },

    'en-us': {
        name: 'name',
        password: 'password',
        email: 'email',
        register: 'register',
    },
    
    'ja': {
        name: '名前',
        password: 'パスワード',
        email: 'Eメール',
        register: '登録',
    },
    
    GER: {
        email: 'Email',
        password: 'Passwort',
        login: 'Anmeldung',
        name: '',
        register: 'Registrieren',
},

    RUS: {
        email: 'Эл. адрес',
        password: 'Пароль',
        login: 'Авторизоваться',
        name: 'Имя',

        register: 'регистр',
},

    UA: {
        email: 'Email',
        password: 'Пароль',
        login: 'Логін',
        name: 'Ім,я',

        register: 'зареєструватися',
},


}
I18n.locale = Localization.locale;
// const setLocale