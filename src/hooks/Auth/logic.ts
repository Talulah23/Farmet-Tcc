// import { useEffect, useState } from 'react';
// import { useIndexedDB } from 'react-indexed-db';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { ILoginPayload, IState, IUseLogicReturn } from './types';
// import { auth } from 'utils/firebase';


// const initialState = {
//   isUserDataPresent: false,
//   user: null,
//   // listener: null,
// };


// const googleSignIn = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   return auth.signInWithPopup(provider);
// };

// const emailAndPasswordSignIn = (email: string, password: string) => {
//   return auth.signInWithEmailAndPassword(email, password);
// }

// const onAuthStateChanged = (callback: (user: firebase.User | null) => void) => {
//   // const unsubscribe = auth.onAuthStateChanged((user: null) => {
//   //   if (user !== null) {
//   //     return callback(user);
//   //   }
//     return callback(null);
//   // });
//   // const unsubscribe = ()=>{}
// //   return () => {
// //     unsubscribe();
// //   };
// };

// function useLogic(): IUseLogicReturn {
//   const [authState, setAuthState] = useState<IState>(initialState);

//   const db = useIndexedDB('people');

//   useEffect(() => {
//     db.getAll().then((people: any) => {
//       console.log(people);
//     });
//   }, []);

//   useEffect(() => {
//     setAuthState(oldAuthState => {
//       if (!oldAuthState.listener) {
//         const listener = onAuthStateChanged(user => {
//           if (user) {
//             db.getAll().then((people) => {
//               if (people.length == 0) {
//                 db.add({ name: user?.displayName, email: user?.email });
//               }
//             });
//           }
//           setAuthState(oldState => ({
//             ...oldState,
//             isUserDataPresent: true,
//             user,
//           }));
//         });

//         return {
//           ...oldAuthState,
//           listener,
//         };
//       }

//       return oldAuthState;
//     });

//     return () => {
//       setAuthState(oldAuthState => {
//         oldAuthState?.listener?.();
//         return { ...initialState };
//       });
//     };
//   }, []);

//   const signIn = (
//     provider: 'google' | 'email_and_password' = 'email_and_password',
//     { email, password }: ILoginPayload = { email: '', password: '' }
//   ): Promise<firebase.auth.UserCredential> => {
    
//     if (provider == "google") {
//       return googleSignIn();
//     } else {
//       return emailAndPasswordSignIn(email, password);
//     }
//   };

//   const signOut = (): void => {
//     db.clear();
//     auth.signOut();
//     setAuthState(initialState);
//   };

//   return { signIn, signOut, authState };
// }

// export default useLogic;
