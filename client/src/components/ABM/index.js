import React , { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getOperations, filterType } from "../../redux/actions";
import CardABM from "../CardABM";
import ListGroup from 'react-bootstrap/ListGroup';


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
      <Link to="/"><button>Back to Home</button></Link>
      <Link to="/form"><button>Add new operation</button></Link>
      <div>
        <span>Filter by type: </span>
        <select onChange={e=>handleFilterTypes(e)}>
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Outcome">Outcome</option>
        </select>
      </div>
      <div>All operations</div>
      {operations.length?
        <ListGroup as="ol">{operations.map(a=>{
          return(
            <ListGroup.Item 
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={a.id}><CardABM conc={a.concept} amo={a.amount} dat={a.date} id={a.id} type={a.type} key={a.id}></CardABM></ListGroup.Item>
          )
        })}</ListGroup>
        :<div>
          <h2>Loading...</h2>
          </div>}
    </div>
  )
}
