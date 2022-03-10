import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {


    const st = {
        width: "100vw",
        height: "3rem",
        display:"flex",
        justifyContent:"space-Around",
        listStyle:"none",
        borderBottom:"1px white solid"
        

    }
    
  return (
    <>
    <ul style={st}>
        <li> <Link to="/home">home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/main">Main</Link> </li>
        <li><Link to="/signin">Sign in</Link> </li>
        <li><Link to="/signup">Signup</Link> </li>
        <li><Link to="/profile">profile</Link> </li>
        <li><Link to="/users">users</Link> </li>
    </ul>
    
    </>
  );
}
