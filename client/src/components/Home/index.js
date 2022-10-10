import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getBalance, getOperations } from "../../redux/actions"

export default function Home() {

  const dispatch = useDispatch();
  var operations = useSelector((state)=>state.operations);
  var balance = useSelector((state)=>state.balance)
  
  useEffect (() => {
    if (operations.length === 0) {dispatch(getOperations()).then(()=> dispatch(getBalance()))};
    console.log(operations)
  }, [dispatch, operations.length])

 
  return (
    <div>
        <h1>Home</h1>
        <h2>Balance: ${balance}</h2>
        <Link to="/abm"><button>ABM</button></Link>
        <div>List 10 operations</div>
    </div>
  )
}
