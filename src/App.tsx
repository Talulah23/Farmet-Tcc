import { AuthProvider } from 'hooks/Auth';
import { FC } from 'react';
import Routes from 'routes'; 
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register ();

const App: FC = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};

export default App;