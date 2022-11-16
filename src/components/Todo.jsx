import React, { Component } from 'react';
import todoData from './todoData';
import TodoItem from './todoitem';

const Todo = (props) => {
    const todocomponent = todoData.map(item => <TodoItem key={item.id} item={item} />)
    return (
        <div className="footer">

            {todocomponent}
            
        </div>
    )
}
export default Todo;