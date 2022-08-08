import { FC } from 'react';
import Login from '../pages/LoginPage';
import Cadastro from 'pages/cadastroPage';
import EscolhaConta from 'pages/EscolhaConta';
import EscolhaProfissao from 'pages/EscolhaProfissao';
import Form from 'pages/Form';
import SelecaoIdioma from 'pages/Teste/SelecaoIdioma';
import { PropsGroup } from './types';
import InformacaoProfissional from 'pages/InformacaoProfisional';
import InformacaoUsuario from 'pages/InformacaoUsuario';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
    return (
        <Drawer.Group>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Cadastro" component={Cadastro} />
            <Drawer.Screen name="Escolha Conta" component={EscolhaConta} />
            <Drawer.Screen name="Escolha Profissão" component={EscolhaProfissao} />
            <Drawer.Screen name="Form" component={Form} />
            <Drawer.Screen name="Seleção Idioma" component={SelecaoIdioma} />
            <Drawer.Screen name="Informação Profissional" component={InformacaoProfissional} />
            <Drawer.Screen name="Informação Usuário" component={InformacaoUsuario} /> 
        </Drawer.Group>
    );
};

export default AppRoutes;
