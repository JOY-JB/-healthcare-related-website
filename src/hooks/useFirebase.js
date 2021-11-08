import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import initalizeAuthentication from "../component/Login/Firebase/firebase.init";

initalizeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const auth = getAuth();

    const googleSignin = () => {
        setisLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).finally(() => setisLoading(false));
    }

    const logout = () => {
        setisLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setisLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setisLoading(false);
        });
    }, [])

    return {
        user,
        googleSignin,
        logout,
        isLoading
    }

}

export default useFirebase;