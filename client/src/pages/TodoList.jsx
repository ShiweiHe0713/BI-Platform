import React from "react";

const TodoList = () => {
    return (
        <div style={{margin: '75px'}}>
            <h1>This is the Todo List!</h1>
            <button onClick={AddTodo}>
                Add a todo
            </button>
        </div>
    );
};

function CountTodo() {

};

function AddTodo() {
    console.log("add new todo..")
    return (
        <button>New Todo</button>
    );
};

export default TodoList;