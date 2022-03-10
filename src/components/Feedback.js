import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Supdetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [coment, setComent] = useState("");

  console.log(state);
  const ComentsClick = (e) => {
    e.preventDefault();

    let com = state.data;
    if (com) {
      com.note = coment;
      console.log("yes i have data", com);
    }
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
          onChange={(e) => setComent(e.target.value)}
        />
        <button type="submit">Submit</button>
        <p>{coment}</p>
      </form>
    </>
  );
}
