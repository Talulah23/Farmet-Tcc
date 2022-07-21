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
        submit: 'enviar',
    },

    'fr': {
        name: 'nom',
        email: 'email',
        submit: 'enviar',
    },

    'en-us': {
        name: 'nom',
        email: 'email',
        submit: 'enviar',
    },
    
    'ja': {
        name: 'nom',
        email: 'email',
        submit: 'enviar',
    }

// const setLocale