import React from "react";
import "./TodosLoading.css"

function TodosLoading(){
    return(
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon">
            <p className="LoadingTodo-text"> Cargando, espera un momento. </p>
            <span className="LoadingTodo-deleteIcon"></span>
            </span>
        </div>
    );
}

export { TodosLoading };