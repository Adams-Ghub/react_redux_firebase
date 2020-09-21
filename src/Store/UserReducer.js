import {v4 as uuid} from 'uuid';
const initialState={
    users:[
      {id:"1",name:"Asamoah Gyan", email:"gyanasamoah3@gmail.com", gen:4},
      {id:"2",name:"Andre Ayew", email:"andreayew@gmail.com", gen:6},
      {id:"3",name:"Kasim Nuhu", email:"kasimnuhu@gmail.com", gen:7}
    ]
  }

const UserReducer=(state=initialState, action)=>{
    switch(action.type){
      case "ADD_USER":
        const newUser = {
          id:uuid(),
          name:action.payload.name,
          email:action.payload.email,
          gen:action.payload.gen
        }
        
        return{...state, users:[...state.users, newUser]};

        case "DELETE_USER":
          const filteredUsers = state.users.filter(user=>user.id!==action.payload);
          return{...state, users: filteredUsers};

        case "EDIT_USER":
          const editedUsers = state.users.map(user=>{
            if (user.id===action.user_id){
              return{...user, ...action.updatedInfo}
            }
            else 
              {return user}
          });
          return{...state, users: editedUsers};  
      default:
        return state;
      }
    };
     
export default UserReducer;