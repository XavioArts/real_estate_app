import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home</h1>
            {JSON.stringify(auth)}
            <button onClick={auth.handleLogin} >Log In</button>
            <button onClick={auth.handleLogout} >Log Out</button>
            <button onClick={navigate("/protected")}>User View</button>
        </div>
    );
};

export default Home;