import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import { Timestamp, doc, setDoc } from 'firebase/firestore';

import { db } from '../firebase/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })

        return unsub
    }, [])

    function signup(email, pass) {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    function addUser(userId, user){
        setDoc(doc(db, "users", userId), {
            ...user,
            createdAt: Timestamp.fromDate(new Date)
          });
    }

    function verifyUser(){
        return sendEmailVerification(auth.currentUser)
    }

    function login(email, pass) {
        return signInWithEmailAndPassword(auth, email, pass)
        
    }

    function logout() {
        return signOut(auth)
    }

    function updateDisplayName(name){
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    function updateEmail(uid, email) {
        return updateCurrentUser(auth, uid, { email: email })
    }
    const value = {
        currentUser,
        signup,
        addUser,
        verifyUser,
        updateDisplayName,
        login,
        logout
    }
  return (
      <AuthContext.Provider value={value}>
          {children}
    </AuthContext.Provider>
  )
}
