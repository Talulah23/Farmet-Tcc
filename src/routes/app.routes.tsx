import { FC } from 'react';
import { App } from '../pages';
import { PropsGroup } from './types';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
    return (
        <Drawer.Group>
            <Drawer.Screen name="App" component={App} />
        </Drawer.Group>
    );
};

export default AppRoutes;
