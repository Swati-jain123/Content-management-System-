import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
return(
    <header className="header"> 
      <Link to="/" className="logo">Connect World</Link>
      <nav>
       <Link to="/login">Login </Link>
       <Link to="/register">Register</Link>
       <Link to="/login">Create New Post </Link> 
      </nav>
    </header>
);
};
export default Header; 