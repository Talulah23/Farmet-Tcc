import React from 'react';
import { Formik, Form } from 'formik';
import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import { setLocale } from 'yup';
import { pt } from 'yup-locale-pt';
import * as ja from 'yup-locale-ja';

I18n.translations = {
    'pt-BR': {
        name: 'nome',
        password: 'senha',
        email: 'email',
        register: 'cadastre-se',
        login: 'fazer login',
        username: 'nome usuario',
        number: 'Numero',
        address: 'endereço',
        next: 'Proximo',
    },

    'fr': {
        name: 'nom',
        password: 'le mot de passe',
        email: 'e-mail',
        register: 'nous faire parvenir',
        login: 'connexion',
    },

    'en-us': {
        name: 'name',
        password: 'password',
        email: 'email',
        register: 'register',
        login: 'login',
    },
    
    'ja': {
        name: '名前',
        password: 'パスワード',
        email: 'Eメール',
        register: '登録',
        login: 'ログインする',
    },

}
I18n.locale = Localization.locale;
// const setLocale

