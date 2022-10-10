import axios from "axios";
import { GET_OPERATIONS, CREATE_OPERATION, MODIFY_OPERATION, DELETE_OPERATION, GET_BALANCE } from "./types";

export function getOperations(){
    return async function (dispatch){
        try{
            var response = await axios.get("http://localhost:3003/incomes");
            return dispatch({type:GET_OPERATIONS, payload: response.data})
        }
        catch(e){
            console.log(e.message)
        }
    }
}

export function createOperation(payload){
    return async function(){
        try{
            var response = await axios.post("http://localhost:3003/incomes", payload);
            return response;
        }
        catch(e){
            console.log(e.message)
        }
    }
}

export function modifyOperation(id, payload){
    return async function(){
        try{
            var response = await axios.put(`http://localhost:3003/incomes/${id}`, payload);
            return response;
        }
        catch(e){
            console.log(e.message)
        }
    }
}

export function deleteOperation(id){
    return async function(dispatch){
        try{
            var response = await axios.delete(`http://localhost:3003/incomes/${id}`)
            return dispatch({type:DELETE_OPERATION})
        }
        catch(e){
            console.log(e.message)
        }
    }
}

export function getBalance(){
    return {type: GET_BALANCE}
}