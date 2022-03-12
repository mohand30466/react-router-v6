import React from "react";
import { useLocation } from "react-router-dom";
import { useData } from "./hookContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { state } = useLocation();
  const {db, setdate }= useData()
  const {coment, SetComents }= useData()
  const storage =localStorage.getItem("user_data")
  

  return (
    <div>
      <p> {db && db} </p>
      <p>{coment && coment} </p>
      <h1>home pages,{db}</h1>{" "}
      <p>here its the local storage: {storage&&storage}</p> 
    </div>
  );
}
