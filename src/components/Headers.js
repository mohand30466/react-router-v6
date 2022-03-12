import React from "react";
import { Link } from "react-router-dom";
import {useData} from './hookContext'
export default function Header() {
  const { db, SetUser } = useData();

  const st = {
    width: "100vw",
    height: "3rem",
    display: "flex",
    justifyContent: "space-Around",
    listStyle: "none",
    borderBottom: "1px white solid",
  };

  return (
    <>
      <ul style={st}>
        <li>
          {" "}
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>{" "}
        </li>
        <li>
          <Link to="/users">partners</Link>{" "}
        </li>
        {!db?(<> <li>
          <Link to="/signin">Sign in</Link>{" "}
        </li>
        <li>
          <Link to="/signup">Signup</Link>{" "}
        </li>  </>): <li>
          <Link to="/home"> <button onClick={(e)=>SetUser(null)}> log out</button></Link>{" "}
        </li> }

       
       
      </ul>
    </>
  );
}
