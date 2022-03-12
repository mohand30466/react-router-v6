import React, { useEffect } from "react";
import { data } from "./Main";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useData } from "./hookContext";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { db, SetUser } = useData();

  const GoBackClick = () => {
    navigate("/main");
    SetUser(data[id].name);
  };

  const goForwardClick = () => {
    navigate("/feedback",{ state: { data: data[id], id } });
    SetUser(data[id].name);
  };

  return (
    <>
      <button onClick={GoBackClick}>goBack</button>

      <button onClick={goForwardClick}>goForward</button>

      <h1>helo from detail components</h1>
      <div>
        {" "}
        <span>Name </span>
        {data[id].name}
      </div>
      <div>
        <span>Number </span>
        {data[id].number}
      </div>
      <div>
        {" "}
        <span>Amount </span>
        {data[id].amount}
      </div>
      <div>
        {" "}
        <span>Due </span>
        {data[id].due}
      </div>
    </>
  );
}
