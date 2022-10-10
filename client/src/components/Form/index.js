import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
    const dispatch = useDispatch()

    const[disabled, setDisabled]=useState(true)
    const [input, setInput] = useState({
        concept:"",
        amount:"",
        date:"",
        type:"",
        category:""
    })
    const [error, setError] = useState({
        concept:"",
        amount:"",
        date:"",
        type:"",
        category:""
    })

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
            type:e.target.value
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


  return (
    <div>
         <Link to="/abm"><button>Cancel</button></Link>
         <form>
            <div>
                <label>Concept: </label>
                <input type="text" value={input.concept} name="concept" onChange={(e)=>{handleChange(e);validateConcept(e)}}/>
                <div>{error.concept===""?<span></span>:<span>{error.concept}</span>}</div>
            </div>
            <div>
                <label>Amount: </label>
                <input type="number" value={input.amount} name="amount" onChange={(e)=>{handleChange(e);validateAmount(e)}}/>
                <div>{error.amount===""?<span></span>:<span>{error.amount}</span>}</div>
            </div>
            <div>
                <label>Date: </label>
                <input type="date" value={input.date} name="date" onChange={(e)=>{handleChange(e);validateDate(e)}}/>
                <div>{error.date===""?<span></span>:<span>{error.date}</span>}</div>
            </div>
            <div>
                <label>Type: </label>
                <select onChange={(e)=>{handleSelect(e)}}>
                    <option value="Income">Income</option>
                    <option value="Outcome">Outcome</option>
                </select>
            </div>
            <div>
            <button disabled={disabled} type="submit" >Create Operation</button>
            </div>
         </form>
    </div>
  )
}
