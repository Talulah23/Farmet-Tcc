import CadastroPage from 'pages/cadastroPage';
import LoginPage from 'pages/LoginPage';
 import { FC } from 'react';
import { PropsGroup } from './types';
const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
    return (
        <Drawer.Group>
            <Drawer.Screen name="LoginPage" component={LoginPage} />
            <Drawer.Screen name="CadastroPage" component={CadastroPage}/>
        </Drawer.Group>
    );
};

export default AppRoutes;
