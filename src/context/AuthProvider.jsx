import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profileInfo) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, profileInfo);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup
  }

  const LogOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect (() => {
    const unMount = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unMount()
    }
  }, [])



  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    updateUserProfile,
    loginUser,
    loginInWithGoogle,
    LogOut
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
