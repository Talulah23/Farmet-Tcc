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
            <Drawer.Screen name="EscolhaConta" component={EscolhaConta} />
            <Drawer.Screen name="EscolhaProfissão" component={EscolhaProfissao} />
            <Drawer.Screen name="Form" component={Form} />
            <Drawer.Screen name="SeleçãoIdioma" component={SelecaoIdioma} />
            <Drawer.Screen name="InformaçãoProfissional" component={InformacaoProfissional} />
            <Drawer.Screen name="InformaçãoUsuário" component={InformacaoUsuario} />
        </Drawer.Group>
    );
};

export default AppRoutes;
