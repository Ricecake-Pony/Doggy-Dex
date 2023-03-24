import React from "react";
import {NavLink} from "react-router-dom"

export default function NavBar () {
return(
    <>
    <NavLink className="link" to="/">
        Home
    </NavLink>
    <NavLink className="link" to="/signup">
        SignUp
    </NavLink>
    <NavLink className="link" to="/login">
        Login
    </NavLink>
    </>
    
)
}