import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../firebase/firebase.init'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = profileInfo => {
        return updateProfile(auth.currentUser, profileInfo)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        updateUserProfile
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;