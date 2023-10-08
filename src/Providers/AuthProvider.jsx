import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";




export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // register part
    const createUser = (email, password, displayName) => {
        return createUserWithEmailAndPassword(auth, email, password, displayName)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // logIn 
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user manage with observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user', currentUser, user);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }

    }, [])

    // logout 
    const logOut =()=>{
        return signOut(auth)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
    }




    const authInfo = {
        user,
        createUser,
        logIn,
        logOut ,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;