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
            {/* <Drawer.Screen
                name='Tela Inicial'
                componet= {StartScren}
                options={{
                    header: false,
                    gestureHandleProps:{
                        enable: false,
                    },
                }}
            /> */}
            <Drawer.Screen 
                name="Login" 
                component={Login}
                options={{
                    headerShown: false,
                    gestureHandleProps:{
                        enable: false,
                    },
                }}
                />
            <Drawer.Screen 
                name="Cadastro" 
                component={Cadastro}
                options={{
                    drawerItemStyle: { heigth: 0},
                }}
            />
            <Drawer.Screen name="EscolhaConta" component={EscolhaConta} />
            <Drawer.Screen name="EscolhaProfissão" component={EscolhaProfissao} />
            <Drawer.Screen name="InformaçãoProfissional" component={InformacaoProfissional} />
            <Drawer.Screen name="InformaçãoUsuário" component={InformacaoUsuario} />
            <Drawer.Screen name="FeedUser" component={FeedUser} />
        </Drawer.Group>
    );
};

export default AppRoutes;
