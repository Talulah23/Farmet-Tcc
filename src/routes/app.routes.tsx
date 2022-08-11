import { FC } from 'react';
import Login from '../pages/LoginPage';
import Cadastro from 'pages/cadastroPage';
import EscolhaConta from 'pages/EscolhaConta';
import EscolhaProfissao from 'pages/EscolhaProfissao';
import { PropsGroup } from './types';
import InformacaoProfissional from 'pages/InformacaoProfisional';
import InformacaoUsuario from 'pages/InformacaoUsuario';
import FeedUser from 'pages/LayoutFeedUser';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
    return (
        <Drawer.Group>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Cadastro" component={Cadastro} />
            <Drawer.Screen name="EscolhaConta" component={EscolhaConta} />
            <Drawer.Screen name="EscolhaProfissão" component={EscolhaProfissao} />
            <Drawer.Screen name="InformaçãoProfissional" component={InformacaoProfissional} />
            <Drawer.Screen name="InformaçãoUsuário" component={InformacaoUsuario} />
            <Drawer.Screen name="FeedUser" component={FeedUser} />
        </Drawer.Group>
    );
};

export default AppRoutes;
