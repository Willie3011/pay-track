import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from 'firebase/auth';
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

    function addUser(user){
        setDoc(doc(db, "users", currentUser.uid), {
            ...user,
            createdAt: Timestamp.fromDate(new Date)
          });
    }

    function login(email, pass) {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    function logout() {
        return signOut(auth)
    }

    function updateEmail(uid, email) {
        return updateCurrentUser(auth, uid, { email: email })
    }
    const value = {
        currentUser,
        signup,
        addUser,
        login,
        logout
    }
  return (
      <AuthContext.Provider value={value}>
          {children}
    </AuthContext.Provider>
  )
}
