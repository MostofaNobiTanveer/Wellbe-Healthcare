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

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
    // .then(({ user }) => setUser(user))
    // .finally(() => setIsLoading(false));
  };

//   const userSignUpUsingEmailAndPassword = () => {
//       createUserWithEmailAndPassword(auth, email, password).then(
//         (result) => {
//           const user = result.user;
//         }
//       );
//   }

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
  }, [isLoading]);

  const userSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return { user, signInUsingGoogle, userSignOut, isLoading };
};

export default useFirebase;
