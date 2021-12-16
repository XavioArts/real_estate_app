import React, { useState } from "react";

export const AuthContext = React.createContext();
// only need the AuthContext as we will use the useContext hook
// i.e. const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {

    const [user, setUser] = useState(null);
    // The user state will keep track of the user that is logged in
    // We initialize the state as null, which is a user that is not logged in

    const handleRegister = () => {
        // axios call to register new user
        // setUser in ui 
    };

    const handleLogin = () => {
        // axios call to log in user
        // setUser
        setUser({email: "dummy"});
    };

    const handleLogout = () => {
        // axios call to log out
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            ...user,
            authenticated: user !== null,
            setUser,
            handleRegister,
            handleLogin,
            handleLogout,
        }} >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;