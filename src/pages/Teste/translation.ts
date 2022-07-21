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
    

    'ger': {
        email: 'Email',
        password: 'Passwort',
        login: 'Anmeldung',
        name: '',
        register: 'Registrieren',
},

    'rus': {
        email: 'Эл. адрес',
        password: 'Пароль',
        login: 'Авторизоваться',
        name: 'Имя',

        register: 'регистр',
},

    'ua': {
        email: 'Email',
        password: 'Пароль',
        login: 'Логін',
        name: 'Ім,я',
        register: 'зареєструватися',
        username: '사용자 이름',
        number: '숫자',
        address: '주소',
        next: '다음',
},

    'ko': {
        username: '사용자 이름',
        number: '숫자',
        address: '주소',
        next: '다음',
    },
    'it': {
        username: 'Nome utente',
        number: 'Numero',
        address: 'Indirizzo',
        next: 'Prossimo',
    },
    'el': {
        username: 'όνομα χρήστη',
        number: 'αριθμός',
        address: 'διεύθυνση',
        next: 'Επόμενο',
    },


}
I18n.locale = Localization.locale;
// const setLocale

