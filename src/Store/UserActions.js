 export const adduser=(user)=>{
     return{
     type:"ADD_USER",
     payload:user
    }
 }

 export const deluser=(user_id)=>{
     return{
         type:"DELETE_USER",
         payload:user_id
     
        
     }
     
 }
 export const editeduser=(user_id,updatedInfo)=>{
    return{
        type:"EDIT_USER",
        user_id:user_id,
        updatedInfo:updatedInfo  
    }
    
}