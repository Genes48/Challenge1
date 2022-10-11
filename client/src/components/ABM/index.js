import React , { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getOperations, filterType } from "../../redux/actions";
import CardABM from "../CardABM"

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
        operations.map(a=>{
          return(
            <CardABM conc={a.concept} amo={a.amount} id={a.id} dat={a.date} type={a.type} key={a.id}></CardABM>
          )
        }):<div>
          <h2>Loading...</h2>
          </div>}
    </div>
  )
}
