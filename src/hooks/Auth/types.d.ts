import React from 'react';
import { User, UserCredential } from 'firebase/auth';
import { IUserAuth, Unsubscribe } from 'utils/firebase/auth/types';

export interface IState {
  isUserDataPresent: boolean;
  user: IUserAuth | null;
  listener: Unsubscribe | null;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface AuthContextData {
  user?: IUserAuth | null;
  isUserDataPresent: boolean;
  signOut: () => void;
  signIn: (
        provider?: 'google' | 'email_and_password', 
        payload?: ILoginPayload,
    ) => Promise<
        UserCredential | FirebaseAuthTypes.UserCredential
    >;
    signUp: (        
        provider?: 'google' | 'email_and_password_and_name', 
        payload?: ILoginPayload,
    ) => Promise<
        UserCredential | FirebaseAuthTypes.UserCredential
    >;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface IUseLogicReturn {
    signIn: (
        provider?: 'google' | 'email_and_password', 
        payload?: ILoginPayload,
    ) => Promise<
        UserCredential | FirebaseAuthTypes.UserCredential
    >;
    signUp: (        
        provider?: 'google' | 'email_and_password', 
        payload?: ILoginPayload,
    ) => Promise<
        UserCredential | FirebaseAuthTypes.UserCredential
    >;
    signOut: () => void;
    authState: IState;
}
