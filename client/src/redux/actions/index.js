import axios from "axios";
import { GET_OPERATIONS, GET_OPERATION, GET_CATEGORIES, FILTER_CATEGORY, GET_BALANCE, FILTER_TYPE } from "./types";

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

export function getCategories(){
    return async function (dispatch){
        try{
            var response = await axios.get("http://localhost:3003/categories");
            return dispatch({type:GET_CATEGORIES, payload: response.data})
        }
        catch(e){
            console.log(e.message)
        }
    }
}

export function getOperationsiD(id){
    return async function (dispatch){
        try{
            var response = await axios.get(`http://localhost:3003/incomes/${id}`);
            return dispatch({type:GET_OPERATION, payload: response.data})
        }
        catch(e){
            console.log(e.message)
        }
    }
}

export function filterType(payload){
    return {type: FILTER_TYPE, payload}
}

export function filterCategory(payload){
    return {type: FILTER_CATEGORY, payload}
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
            return response
        }
        catch(e){
            console.log(e.message)
        }
    }
}

export function getBalance(){
    return {type: GET_BALANCE}
}