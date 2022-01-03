import React from "react"
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <div>
            <ul className="list-group">
                {
                    props.items.map((item,index) =>
                    <TodoItem key={index} item={item} deleteListItem={props.deleteListItem}/>)
                }
            </ul>
            {props.items.length > 0
                ?
            <p className="mt-2">
                <button className="btn btn-outline-danger btn-sm float-right" onClick={props.clearItem}>Clear</button>
            </p>
            :
            <p className="alert alert-warning">
                Add Item To Start
            </p>
            }
        </div>
    )
}

export default TodoList;