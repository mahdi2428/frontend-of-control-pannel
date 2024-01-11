// import { Action } from "./Action"
import { BUY_CAKE } from "./Type"
const initialstate = {
        numofCake : 11
    }




export const Reducer = (state = initialstate , action) =>{
    switch(action.type){
        case "BUY-CAKE" : return {
            ...state , 
            numofCake : state.numofCake - 1 , 
        }
        default : return state
    }
}