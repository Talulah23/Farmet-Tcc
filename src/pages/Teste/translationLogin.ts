import React from 'react';
import { Formik, Form } from 'formik';
import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import * as yup from 'yup';
import { pt } from 'yup-locale-pt';
//@ts-ignore
import ru from "yup-locale-ru"
import { setLocale } from "yup"



I18n.translations = {
    'ger': {
        email: 'Email',
        password: 'Passwort',
        login: 'Anmeldung',
},

    'ru': {
        email: 'Эл. адрес',
        password: 'Пароль',
        login: 'Авторизоваться',
},

    'ua': {
        email: 'Email',
        password: 'Пароль',
        login: 'Логін',
},
}


I18n.locale = Localization.locale;

setLocale(ru);
