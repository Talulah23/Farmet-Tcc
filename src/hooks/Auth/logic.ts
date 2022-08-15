import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as authOnAuthStateChanged,
    User,
    signOut,
} from 'firebase/auth';
import { auth } from '../../utils/firebase';

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

export const emailAndPasswordSignUp = (
    email: string,
    password: string,
    name: string,
) => {
    return createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name,
    );
};

export const emailAndPasswordSignIn = (
    email: string, 
    password: string
) => {
  return signInWithEmailAndPassword(
    auth, 
    email, 
    password
    );
}

export const onAuthStateChanged = (
    callback: (user: User | null) => void
    ) => {
  const unsubscribe = authOnAuthStateChanged(
    auth,
    user=> {
        if (user) {
            return callback(user);
        }
        return callback(null);
    },
);
  return () => {
    unsubscribe();
  };
};

export const authSignOut = () => {
    signOut(auth);
};
