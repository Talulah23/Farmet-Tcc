import { FC } from 'react';
import Routes from 'routes'; 
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register ();

const App: FC = () => {
    return <Routes />;
};

export default App;
// 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25