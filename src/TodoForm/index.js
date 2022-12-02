import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState();

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () =>{
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit} >
            <label> Escribe el nombre del TODO </label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ingresa el nombre del TODO">    
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button" 
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button 
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };