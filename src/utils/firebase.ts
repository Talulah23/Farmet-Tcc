import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import initializeApp from '../../initialize-app.json';

firebase.initializeApp(initializeApp);

const db = firebase.firestore();
const auth = firebase.auth();

if (import.meta.env.DEBUG === 'true') {
  db.useEmulator(import.meta.env.EMULATOR_HOST, import.meta.env.EMULATOR_FIRESTORE_PORT);
  auth.useEmulator(`http://${import.meta.env.EMULATOR_HOST}:${import.meta.env.EMULATOR_AUTH_PORT}`);
  // firebase.firestore.setLogLevel('debug');
}

export { db, auth };

export default firebase;
