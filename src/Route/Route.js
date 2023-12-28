import React from "react";
import { NavLink, Routes} from "react-router-dom";
import { Route } from "react-router-dom";
import LoginButton from "../LoginSignUp/Login";
import RegisterButton from "../LoginSignUp/Register";

function RouteCompo () {
    return(
        <>
        {/* <BrowserRouter> */}
            <NavLink to="/">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <Routes>
                <Route path="/" element ={<RegisterButton/>}/>
                <Route path="/login" element ={<LoginButton/>}/>
            </Routes>
        {/* </BrowserRouter> */}
        </>
    )
}

export default RouteCompo