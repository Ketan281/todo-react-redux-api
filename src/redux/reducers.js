import {
    ADD_NEW_ITEM,
    GET_ITEM
} from "./actions"

const initialState = {
    todos: ['testing todo']
};

export const todoReducer = (store = initialState,action)=>{
    switch(action.type){
        case GET_ITEM:{
            return {
                todos:action.payload
            }
        }
        case ADD_NEW_ITEM:{
            return{
                ...store,
                todos: [...store.todos,action.payload]
            }
        }
        default:
            return store;
    }
}