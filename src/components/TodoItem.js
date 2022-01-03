import React from "react";

const TodoItem =  (props) => {
    return (
        <li className="bg-info mt-2 list-group-item decoration">
            {props.item} <button className="btn btn-danger btn-sm float-right" onClick={() => {props.deleteListItem(props.item)}}>X</button>
        </li>
    );
}

export default TodoItem;
