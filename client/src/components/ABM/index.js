import React , { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getOperations, getCategories, filterType, filterCategory} from "../../redux/actions";
import CardABM from "../CardABM";
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';


export default function ABM() {

  const dispatch = useDispatch();
  var operations = useSelector((state)=>state.operations);
  var categories = useSelector((state) => state.categories)

  useEffect (() => {
    if (operations.length === 0) {dispatch(getOperations())};
    console.log("operaciones", operations)
  }, [dispatch, operations.length])
  useEffect(()=>{
    dispatch(getCategories())
  },[dispatch]) 

  function handleFilterTypes(e){
    e.preventDefault();
    dispatch(filterType(e.target.value))
  }
  function handleFilterCategory(e){
    e.preventDefault();
    dispatch(filterCategory(e.target.value))
  }

  return (
    <div>
      <br></br>
      <h1>ABM</h1>
      <div class="container">
      <div class="col justify-content-around">
      <Link to="/"><Button class="col-4" variant="outline-light">Back to Home</Button></Link>
      <Link to="/form"><Button class="col-4" variant="outline-light">Add new operation</Button></Link>
      </div>
      </div>
      <br></br>
      <div>
        <h4>Filter by type:
        <select onChange={e=>handleFilterTypes(e)}>   
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Outcome">Outcome</option>
        </select>
        </h4>
      </div>
      <div>
        <h4>Filter by Category:   
        <select onChange={e=>handleFilterCategory(e)}>
          <option value="All">All</option>
          {categories.map(e=>{
            return (<option value={e.name} key={e.id}>{e.name}</option>)})}
        </select>
        </h4>
      </div>
      <h3>All operations</h3>
      <br></br>
      {operations.length?
        <CardGroup class="container">
          <div class="row justify-content-start">{operations.map(a=>{
          return(
            <div class="col-4"
            key={a.id}><CardABM conc={a.concept} amo={a.amount} dat={a.date} id={a.id} type={a.type} key={a.id} category={a.categories}></CardABM></div>
          )
        })}</div></CardGroup>
        :<div>
          <h2>You don´t have operations yet</h2>
          </div>}
    </div>
  )
}
