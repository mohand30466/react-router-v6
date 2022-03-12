import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useData } from "./hookContext";

export let data = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function Main() {
  const navigate = useNavigate();
  const { db, SetUser } = useData();

  const MyStorage = (e, i) => {
    console.log("hi " + e.name);
    localStorage.setItem("user_data", e.name)
    SetUser(e.name)
  };

  return (
    <>
      <button onClick={() => navigate("/home")}>Back home</button>
      {data &&
        data.map((e, i) => (
          <div key={i}>
            {" "}
            <Link to={`/detail/${i}/${10 + i}`}>
              <div onClick={() => MyStorage(e, i)}>{e.name}</div>
            </Link>
            <br />
          </div>
        ))}
    </>
  );
}
