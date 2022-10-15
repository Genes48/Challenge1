import { GET_OPERATIONS, GET_OPERATION, GET_CATEGORIES, CREATE_OPERATION, MODIFY_OPERATION, DELETE_OPERATION, GET_BALANCE, FILTER_TYPE, FILTER_CATEGORY } from "../actions/types";
import Swal from 'sweetalert2'

const initialState={
    operations: [],
    operationsBack: [],
    categories: [],
    operation:[],
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
        case GET_OPERATION: return{
            ...state,
            operation: payload
        }
        case GET_CATEGORIES: return{
            ...state,
            categories: payload
        }
        case FILTER_TYPE:
            const allOp=state.operationsBack
            let opeType=[]
            if(payload==="All"){
                opeType=allOp
            }
            else{opeType=allOp.filter(e=>e.type===payload)}
            if(opeType.length===0) { Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no operations with this type',
              })
            return{
                ...state,
            }}
            return{
                ...state,
                operations: opeType
            }
        case FILTER_CATEGORY:
            const allOp2=state.operationsBack
            let opeCat=[]
            if(payload==="All"){
                opeCat=allOp2
            }
            else{opeCat=allOp2.filter(e=>e.categories[0].name===payload   )}
            if(opeCat.length===0) { Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There are no operations with this category',
              })
            return{
                ...state,
            }}
            return{
                ...state,
                operations: opeCat
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