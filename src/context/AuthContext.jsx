import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from 'firebase/auth';


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
        login,
        logout
    }
  return (
      <AuthContext.Provider value={value}>
          {children}
    </AuthContext.Provider>
  )
}
