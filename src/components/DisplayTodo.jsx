import {React, useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { 
    getItems
 } from "../redux/actions"

function DisplayTodo() {
    const { todos } = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch("http://localhost:8000/todos")
            .then((res) => res.json())
            .then((data) => dispatch(getItems(data)));
    }, []);

    const fetchTodos = () => {
        fetch('http://localhost:8000/todos')
            .then((res) => res.json())
            .then((data) => dispatch(getItems(data)));
    };

    const deleteItem = (id) => {
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then(() => fetchTodos());
    };


    return (
        <div>
            {todos.map((task, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h5>{task.title}</h5>
                    <button style={{ height: "30px" }} onClick={() => deleteItem(task.id)}>Delete </button>
                </div>
            )
            )}
        </div>
    );

}
export {DisplayTodo}
