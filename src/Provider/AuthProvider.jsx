import { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const updateUser = (updatedUser) => {
        return updateProfile(auth.currentUser, updatedUser)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authData = {
        createUser,
        setLoading,
        loading,
        signIn,
        signInWithGoogle,
        user,
        setUser,
        updateUser,
        logOut
    }

    return <AuthContext.Provider value={authData}>
        {
            children
        }
    </AuthContext.Provider>
};

export default AuthProvider;