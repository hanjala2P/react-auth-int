import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth ,email,password);
    }

    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        console.log('inside observer: if',currentUser);
      }
      else{
        console.log('inside observer: else',currentUser);
      }
    })

    const authInfo ={
        createUser,
        signInUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;