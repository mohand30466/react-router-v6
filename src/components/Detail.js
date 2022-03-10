import React from 'react';
import { data } from './Main';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Detail() {
    const {id} =useParams()
    const navigate = useNavigate()

    
    
  return (
    <>
   <button onClick={e=>navigate("/main")}>goBack</button>

   <button onClick={(e)=>navigate('/feedback',{state:{data:data[id],id}})}>goForward</button>
    
  
    <h1>helo from detail components</h1>
    <div> <span>Name </span>{data[id].name}</div>
    <div><span>Number </span>{data[id].number}</div>
    <div> <span>Amount </span>{data[id].amount}</div>
    <div> <span>Due </span>{data[id].due}</div>
    
     
      

    
    </>
  );
}
