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
        password: 'senha',
        email: 'email',
        register: 'enviar',
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
    }

// const setLocale