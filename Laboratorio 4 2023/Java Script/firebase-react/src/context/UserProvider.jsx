import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    const userRegister = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                const { email, photoURL, displayName, uid } = user;
                setUser({ email, photoURL, displayName, uid });
            } else {
                setUser(null)
            }
        });
        return () => unsuscribe();
    }, []);

    const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

    const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

    const signOutUser = () => signOut(auth);

    return (
        <UserContext.Provider value={{ user, SetUser, userRegister }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.protoTypes = {
    children: PropTypes.node.isRequired
};

export default UserProvider;