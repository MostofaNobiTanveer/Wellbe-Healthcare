import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeAuthentication } from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   const userSignUpUsingEmailAndPassword = () => {
  //       createUserWithEmailAndPassword(auth, email, password).then(
  //         (result) => {
  //           const user = result.user;
  //         }
  //       );
  //   }
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
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
  };
};

export default useFirebase;
