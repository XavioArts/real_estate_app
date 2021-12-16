import React, { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    return (
        <form>
            <p>Email:</p>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} />
            <p>Password:</p>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} />
            <p>Confirm Password:</p>
            <input value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} />
            <button type="submit" >Register</button>
        </form>
    );
};

export default Register;