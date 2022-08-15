import { FC } from 'react';
import Login from '../pages/LoginPage';
import Cadastro from 'pages/cadastroPage';
import EscolhaConta from 'pages/EscolhaConta';
import EscolhaProfissao from 'pages/EscolhaProfissao';
import { PropsGroup } from './types';
import InformacaoProfissional from 'pages/InformacaoProfisional';
import InformacaoUsuario from 'pages/InformacaoUsuario';
import FeedUser from 'pages/LayoutFeedUser';
import PerfilProfissional from 'pages/LayoutPerfil';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
    return (
        <Drawer.Group>
            <Drawer.Screen 
                name="Login" 
                component={Login}
                // options={{
                //     headerShown: false,
                //     gestureHandleProps:{
                //         enable: false,
                //     },
                // }}
            />
            <Drawer.Screen 
                name="Cadastro" 
                component={Cadastro}
                // options={{
                //     drawerItemStyle: { heigth: 0},
                // }}
            />
            <Drawer.Screen 
                name="EscolhaConta" 
                component={EscolhaConta}
                // options={{
                //     headerShown: false,
                //     gestureHandleProps:{
                //         enable: false,
                //     },
                // }} 
            />
            <Drawer.Screen 
                name="EscolhaProfissão" 
                component={EscolhaProfissao}
                // options={{
                //     headerShown: false,
                //     gestureHandleProps:{
                //         enable: false,
                //     },
                // }} 
            />
            <Drawer.Screen 
                name="InformaçãoProfissional" 
                component={InformacaoProfissional}
                // options={{
                //     headerShown: false,
                //     gestureHandleProps:{
                //         enable: false,
                //     },
                // }} 
            />
            <Drawer.Screen 
                name="InformaçãoUsuário" 
                component={InformacaoUsuario}
                // options={{
                //     headerShown: false,
                //     gestureHandleProps:{
                //         enable: false,
                //     },
                // }} 
            />
            <Drawer.Screen 
                name="FeedUser" 
                component={FeedUser}
                // options={{
                //     headerShown: false,
                //     gestureHandleProps:{
                //         enable: false,
                //     },
                // }} 
            />
            <Drawer.Screen 
                name="Perfil Profissional" 
                component={PerfilProfissional}
                // options={{
                //     headerShown: false,
                //     gestureHandleProps:{
                //         enable: false,
                //     },
                // }} 
            />
        </Drawer.Group>
    );
};

export default AppRoutes;
