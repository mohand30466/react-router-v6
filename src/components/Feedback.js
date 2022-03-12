import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useData} from './hookContext'


export default function Supdetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {db, SetUser}= useData()
  const {coment, SetComents}= useData()
  const [msg, setMsg]= useState('')
  const [show, setShow]= useState('')

  console.log(state);
  const ComentsClick = (e) => {
    e.preventDefault();
    SetComents(msg)
    setShow(coment)
    


  };

  return (
    <>
      <button onClick={(e) => navigate(`/detail/${state.id}/${10 + state.id}`)}>
        go Back
      </button>

      <p>
        this component checking details passing through the react navigation and
        recive it by using useLocation :) {state && state.data.name}
      </p>
      <p>write about your note here please</p>
      <form onSubmit={ComentsClick}>
        <input
          placeholder="tel us what you think about our service"
          type="text"
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit">Submit</button>
        <h1>{db}</h1>
        <p>{coment}</p>
        <p>{show}</p>
      </form>
    </>
  );
}
