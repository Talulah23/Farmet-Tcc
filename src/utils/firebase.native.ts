import getAuth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const db = firestore();

export const auth = getAuth()