import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { initializeAuthentication } from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [baseName, setBaseName] = useState("")
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = async () => {
    try {
      return await signInWithPopup(auth, googleProvider);
    } finally {
      return setIsLoading(false);
    }
  };

  const userSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => setUser({}))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
    // eslint-disable-next-line
  }, []);

  return {
    user,
    signInUsingGoogle,
    userSignOut,
    isLoading,
    createUserWithEmailAndPassword,
    auth,
    setUser,
    updateProfile,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    setBaseName,
    baseName
  };
};

export default useFirebase;
