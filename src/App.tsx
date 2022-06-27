import { FC } from 'react';
import Routes from 'routes'; 
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register ();

const App: FC = () => {
    return <Routes />;
};

export default App;
