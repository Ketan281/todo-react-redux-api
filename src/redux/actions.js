export const ADD_NEW_ITEM = "ADD_NEW_ITEM"
export const GET_ITEM = "ADD_ITEM"

export const addItem = (newItem) =>({
    
        type:ADD_NEW_ITEM,
        payload:newItem

});

export const getItems = (data) => ({
    
        type: GET_ITEM,
        payload:data
    

})