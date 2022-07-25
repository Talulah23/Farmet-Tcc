import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import initializeApp from '../../initializeApp.json';
// import Constants from 'expo-constants';

// firebase.initializeApp(initializeApp);

const db = firebase.firestore();
const auth = firebase.auth();

// if (Constants.manifest!.extra!.debug === 'true') {
//   db.useEmulator(import.meta.env.EMULATOR_HOST, import.meta.env.EMULATOR_FIRESTORE_PORT);
//   auth.useEmulator(`http://${import.meta.env.EMULATOR_HOST}:${import.meta.env.EMULATOR_AUTH_PORT}`);
//   // firebase.firestore.setLogLevel('debug');
// }

export { db, auth };

export default firebase;
