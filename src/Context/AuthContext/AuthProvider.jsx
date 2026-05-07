import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading]=useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email,password);
    }
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }


           // step 1 : setup the observer
        // step 2 : set in a var
        // step 3 : return and call the var so that i can clear the reference
    useEffect(()=>{
        // set the observer
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('inside observer: if',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        // clear the observer on umount
        return ()=>{
            unsubscribe();
        }
 
    },[])
    const authInfo ={
        loading,
        user,
        createUser,
        signInUser,
        signOutUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;