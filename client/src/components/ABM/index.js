import React , { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getOperations, filterType } from "../../redux/actions";
import CardABM from "../CardABM";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';


export default function ABM() {

  const dispatch = useDispatch();
  var operations = useSelector((state)=>state.operations);

  useEffect (() => {
    if (operations.length === 0) {dispatch(getOperations())};
  }, [dispatch, operations.length])

  function handleFilterTypes(e){
    e.preventDefault();
    dispatch(filterType(e.target.value))
  }

  return (
    <div>
      <h1>ABM</h1>
      <div class="container">
      <div class="col justify-content-around">
      <Link to="/"><Button class="col-4" variant="outline-light">Back to Home</Button></Link>
      <Link to="/form"><Button class="col-4" variant="outline-light">Add new operation</Button></Link>
      </div>
      </div>
      <div>
        <h4>Filter by type:   
          <h5>
        <select onChange={e=>handleFilterTypes(e)}>
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Outcome">Outcome</option>
        </select>
        </h5>
        </h4>
      </div>
      <h3>All operations</h3>
      <br></br>
      {operations.length?
        <CardGroup class="container">
          <div class="row justify-content-start">{operations.map(a=>{
          return(
            <div class="col-4"
            key={a.id}><CardABM conc={a.concept} amo={a.amount} dat={a.date} id={a.id} type={a.type} key={a.id}></CardABM></div>
          )
        })}</div></CardGroup>
        :<div>
          <h2>You don´t have operations yet</h2>
          </div>}
    </div>
  )
}
