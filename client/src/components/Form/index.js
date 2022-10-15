import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createOperation, getCategories, modifyOperation, getOperationsiD, deleteOperation } from '../../redux/actions';
import Swal from 'sweetalert2'

export default function Form() {
    const { id } = useParams()
    
    const dispatch = useDispatch()
    var detail = useSelector((state) => state.operation)
    var categories = useSelector((state) => state.categories)
    console.log("soy el detail", detail)

    const[disabled, setDisabled]=useState(true)
    const[disables, setDisables]=useState(true)
     useEffect(()=>{
        dispatch(getCategories())
        dispatch(getOperationsiD(id))
      },[dispatch, id]) 

    const [input, setInput] = useState({
        concept:"",
        amount:"",
        date:"",
        type:"",
        category:"None"
    })
    const [error, setError] = useState({
        concept:"",
        amount:"",
        date:"",
        type:"",
        category:""
    })
   

      
    useEffect(()=>{
        if(input.concept!==""&& input.amount!==""&& input.date!==""&& input.type!==""&&           
        error.concept===""&&
        error.amount===""&&
        error.date===""){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }, [input, error])
    useEffect(()=>{
        if(input.concept!==""&& input.amount!==""&& input.date!==""&&           
        error.concept===""&&
        error.amount===""&&
        error.date===""){
            setDisables(false)
        }
        else{
            setDisables(true)
        }
    }, [input, error])

    
    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    function handleSelect(e){
        e.preventDefault();
        setInput({
            ...input,
            category:e.target.value
        })
    }
    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                type:e.target.value
            })
        }
    }
    function handleClick(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch(deleteOperation(id))
            Swal.fire({
                icon: 'success',
                title: 'Operation deleted',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.replace("http://localhost:3000/abm") 
                } 
              })
            }
          })
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(createOperation(input))
        setInput({
            concept:"",
            amount:"",
            date:"",
            type:"",
            category:"None"
        })
        Swal.fire({
            icon: 'success',
            title: 'Operation created',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace("http://localhost:3000/abm") 
            } 
          })
    }
    function handleSubmit2(e){
        e.preventDefault();
        dispatch(modifyOperation(id, input))
        setInput({
            concept:"",
            amount:"",
            date:"",
            type:"",
            category:"None"
        })
        Swal.fire({
            icon: 'success',
            title: 'Operation created',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace("http://localhost:3000/abm") 
            } 
          })
    }

    function validateConcept(e){
        if(!e.target.value){
            setError({...error, concept:"You must enter a concept"})
        }
        else{
            setError({...error, concept:""})
        }
    }
    function validateAmount(e){
        if(!e.target.value){
            setError({...error, amount:"You must enter an amount"})
        }
        else{
            setError({...error, amount:""})
        }
    }
    function validateDate(e){
        var now = Date.now()
        var today = new Date(now)
        var selectDate = new Date (e.target.value)
        if(!e.target.value){
            setError({...error, date:"You must enter a date"})
        }
        if(selectDate>today){
            setError({...error, date:"You can´t enter a date that has not passed"})
        }
        else{
            setError({...error, date:""})
        }
    }


  return (
    <div>
         <Link to="/abm"><button>Cancel</button></Link>
         {id?<div>
            <button onClick={()=>handleClick(id)}>Delete Operation</button>
            </div>:<span></span>}
         <form>
            <div>
            {id?<div><span>Previous Concept: {detail.concept}</span></div>:<span></span>}
            {id?<label>New Concept: </label>:<label>Concept: </label>}
                <input type="text" value={input.concept} name="concept" onChange={(e)=>{handleChange(e);validateConcept(e)}}/>
                <div>{error.concept===""?<span></span>:<span>{error.concept}</span>}</div>
            </div>
            <div>
            {id?<div><span>Previous Amount: {detail.amount}</span></div>:<span></span>}
            {id?<label>New Amount: </label>:<label>Amount: </label>}
                <input type="number" value={input.amount} name="amount" onChange={(e)=>{handleChange(e);validateAmount(e)}}/>
                <div>{error.amount===""?<span></span>:<span>{error.amount}</span>}</div>
            </div>
            <div>
                {id?<div><span>Previous Date: {detail.date}</span></div>:<span></span>}
                {id?<label>New Date: </label>:<label>Date: </label>}
                <input type="date" value={input.date} name="date" onChange={(e)=>{handleChange(e);validateDate(e)}}/>
                <div>{error.date===""?<span></span>:<span>{error.date}</span>}</div>
            </div>
            <label className='Label'>Category:</label>
            <select className='Select' onChange={(e)=>{handleSelect(e)}}>
                {categories.map((el)=>(
                    <option value={el.name}>{el.name}</option>
                ))}
                </select>
            {id?<span></span>:
            <div>
                <label>Type: </label>
                <input type="radio" name="type" value="Income" onChange={(e)=>{handleCheck(e)}}/>Income
                <input type="radio" name="type" value="Outcome" onChange={(e)=>{handleCheck(e)}}/>Outcome
            </div>}
            {id?<div>
            <button disabled={disables} type="submit" onClick={(e)=>handleSubmit2(e)}>Modify Operation</button>
            </div>:
            <div>
            <button disabled={disabled} type="submit" onClick={(e)=>handleSubmit(e)}>Create Operation</button>
            </div>}
         </form>
    </div>
  )
}
