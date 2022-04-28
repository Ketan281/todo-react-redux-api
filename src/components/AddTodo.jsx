import React from 'react'
import {
    store
} from "../redux/store"
import {
    ADD_NEW_ITEM,
    getItems
} from '../redux/actions'
import { useDispatch } from 'react-redux'
const AddTodo = () => {
    const [newItem,setnewItem] = React.useState('');
    const dispatch = useDispatch()
    const handleChange=(event)=>{
        setnewItem(event.target.value)
    }
    
    
    const fetchTodos = () =>{
        fetch('http://localhost:8000/todos')
        .then((res)=>res.json())
        .then((data)=>dispatch(getItems(data)))
    }

    const handleSubmit = () =>{
        fetch('http://localhost:8000/todos',{
            method:'POST',
            headers:{
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                "title":newItem
            })
        }).then(()=>{
            fetchTodos()
        })
    };
  return (
    <div>
        <input placeholder='add a new todo..' onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export {AddTodo}