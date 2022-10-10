import { GET_OPERATIONS, CREATE_OPERATION, MODIFY_OPERATION, DELETE_OPERATION, GET_BALANCE, FILTER_TYPE } from "../actions/types";

const initialState={
    operations: [],
    operationsBack: [],
    categories: [],
    balance: 0
}

function rootReducer(state=initialState, {type, payload}){
    switch(type){
        case GET_OPERATIONS: 
        let ope = payload.sort(function(a,b){
            if(a.date<b.date){
                return 1
            }
            if(a.date>b.date){
                return -1
            }
            return 0
        })
        return{
            ...state,
            operations: ope,
            operationsBack: ope
        }
        case FILTER_TYPE:
            const allOp=state.operationsBack
            let opeType=[]
            if(payload==="All"){
                opeType=allOp
            }
            else{opeType=allOp.filter(e=>e.type===payload)}
            if(opeType.length===0) { alert(`You have no ${payload}s`)
            return{
                ...state,
            }}
            return{
                ...state,
                operations: opeType
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
            for(let i=0; i<state.operationsBack.length; i++){
                if(state.operationsBack[i].type==="Income"){
                bal=bal+state.operationsBack[i].amount
                }
                else{
                bal=bal-state.operationsBack[i].amount
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