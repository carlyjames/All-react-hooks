import React from "react";

function TodoItem(props) {
    return (
        <div className="Todo-item">
            <label className="container d-flex">
                <input type="checkbox" checked={props.item.completed} />
                <span className="checkmark" ></span>
                <p className="mx-2 mt-2">{props.item.text}</p>
            </label>  
        </div>
    )
}

export default TodoItem