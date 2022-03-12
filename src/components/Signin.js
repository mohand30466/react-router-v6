import React from "react";

export default function Signin() {
  const logoutClick = () => {
    localStorage.removeItem("user_data");
  };
  return (
    <>
      <button onClick={logoutClick}>Log out</button>
    </>
  );
}
