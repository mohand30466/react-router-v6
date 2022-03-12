import React, { useContext, useState } from "react";
import { createContext } from "react";

const Glopaldata = createContext(null);

export const DataProvider =({user,cmt, children})=> {

  const [db, setdate] = useState(user);
  const [coment, SetComents] = useState(cmt);
  const SetUser = currentUser =>{
    if (currentUser) {
      localStorage.setItem("user_data",currentUser)
      
    }
    else localStorage.removeItem("user_data")

    setdate(currentUser)

  }

  return (
    <div>
      <Glopaldata.Provider value={{ db, SetUser , coment, SetComents}}>
        { children }
      </Glopaldata.Provider>
    </div>
  );
}

export const useData = () => useContext(Glopaldata);
