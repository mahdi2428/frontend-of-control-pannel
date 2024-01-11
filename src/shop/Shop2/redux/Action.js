
export const Action = (id) => {
    return{
            type : 'update' , 
            id : id , 
        }

}
export const DeleteAction = (id) => {
    return{
            type : 'delete' , 
            id : id , 
        }

}
export const CreateAction = (id) => {
    return{
            type : 'create' , 
            id : id , 
        }

}