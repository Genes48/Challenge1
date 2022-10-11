import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getBalance, getOperations } from "../../redux/actions";
import Card from "../Card"

export default function Home() {

  const dispatch = useDispatch();
  var operations = useSelector((state)=>state.operations);
  var balance = useSelector((state)=>state.balance);
  let lastOp = []
  if(operations.length>=10){
    for(let i=0; i<10; i++){
      lastOp.push(operations[i])
    }
  }else{
    lastOp=operations
  }
  
  useEffect (() => {
    if (operations.length === 0) {dispatch(getOperations()).then(()=> dispatch(getBalance()))};
    console.log(operations)
  }, [dispatch, operations.length])

 
  return (
    <div>
        <h1>Home</h1>
        <h2>Balance: ${balance}</h2>
        <Link to="/abm"><button>ABM</button></Link>
        {lastOp.length?
        lastOp.map(a=>{
          return(
            <Card conc={a.concept} amo={a.amount} dat={a.date} type={a.type} key={a.id}></Card>
          )
        }):<div>
          <h2>Loading...</h2>
          </div>}
    </div>
  )
}
