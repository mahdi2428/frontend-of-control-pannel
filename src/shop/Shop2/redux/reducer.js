
const initialstate = {
       update : 'eee'
    }




export const Reducer = (state = initialstate , action) =>{
    switch(action.type){
        case "update" : return {
            ...state , 
            update : action.id
        }
        default : return state
    }
}
console.log(initialstate);