import { GET_OPERATIONS, CREATE_OPERATION, MODIFY_OPERATION, DELETE_OPERATION } from "../actions/types";

const initialState={
    operations: [],
    operationsBack: [],
    categories: []
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
        default: return state
    }
}

export default rootReducer;