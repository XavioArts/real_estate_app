import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {

    const auth = useContext(AuthContext);

    return (
        <div>
            <h1>Home</h1>
            {JSON.stringify(auth)}
            <button onClick={auth.handleLogin} >Log In</button>
            <button onClick={auth.handleLogout} >Log Out</button>
        </div>
    );
};

export default Home;