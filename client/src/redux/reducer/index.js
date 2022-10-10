import { GET_OPERATIONS, CREATE_OPERATION, MODIFY_OPERATION, DELETE_OPERATION, GET_BALANCE } from "../actions/types";

const initialState={
    operations: [],
    operationsBack: [],
    categories: [],
    balance: 0
}

function rootReducer(state=initialState, {type, payload}){
    switch(type){
        case GET_OPERATIONS: return{
            ...state,
            operations: payload,
            operationsBack: payload
        }
        case CREATE_OPERATION: return{
            ...state,
        }
        case DELETE_OPERATION: return{
            ...state,
        }
        case MODIFY_OPERATION: return{
            ...state,
        }
        case GET_BALANCE: 
            let bal = 0
            for(let i=0; i<state.operations.length; i++){
                if(state.operations[i].type==="Income"){
                bal=bal+state.operations[i].amount
                }
                else{
                bal=bal-state.operations[i].amount
                }
            }
        return{
            ...state,
            balance: bal
        }
        default: return state
    }
}

export default rootReducer;