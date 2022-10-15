import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getBalance, getOperations } from "../../redux/actions";
import Card from "../Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function Home() {

  const dispatch = useDispatch();
  var operations = useSelector((state)=>state.operationsBack);
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
    if (operations.length === 0) {dispatch(getOperations()).then(()=> dispatch(getBalance()))}
    else{dispatch(getBalance())};
    console.log(operations)
  }, [dispatch, operations.length])

 
  return (
    <div>
      <br></br>
        <h1>Welcome to your administration app</h1>
        <br></br>
        <h2>Your Balance is: ${balance}</h2>
        <Link to="/abm"><Button class="col-4" variant="outline-light">ABM</Button></Link>
        <br></br>
        <br></br>
        <h3>Last operations</h3>
      <br></br>
        {lastOp.length?
        <ListGroup as="ol">{lastOp.map(a=>{
          return(
            <ListGroup.Item 
            fluid="sm"
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={a.id}><Card conc={a.concept} amo={a.amount} dat={a.date} type={a.type} key={a.id} category={a.categories}></Card></ListGroup.Item>
          )
        })}</ListGroup>
        :<div>
          <h2>You don´t have operations yet</h2>
          </div>}
    </div>
  )
}
