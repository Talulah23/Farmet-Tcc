import { FC } from 'react';
import Login from '../pages/LoginPage';
import Cadastro from 'pages/cadastroPage';
import EscolhaConta from 'pages/EscolhaConta';
import EscolhaProfissao from 'pages/EscolhaProfissao';
import Form from 'pages/Form';
import SelecaoIdioma from 'pages/Teste/SelecaoIdioma';
import { PropsGroup } from './types';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
    return (
        <Drawer.Group>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Cadastro" component={Cadastro} />
            <Drawer.Screen name="EscolhaConta" component={EscolhaConta} />
            <Drawer.Screen name="EscolhaProfissao" component={EscolhaProfissao} />
            <Drawer.Screen name="Form" component={Form} />
            <Drawer.Screen name="SelacaoIdioma" component={SelecaoIdioma} />
        </Drawer.Group>
    );
};

export default AppRoutes;
