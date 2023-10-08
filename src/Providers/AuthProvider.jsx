import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";




export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true)


    // register part
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // logIn 
    const logIn = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    // user manage with observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user', currentUser, user);
            setUser(currentUser);
            setloading(false)
        });
        return () => {
            unSubscribe();
        }

    }, [])

    // logout 
    const logOut =()=>{
        setloading(true)
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
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;