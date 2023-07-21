import React from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoCounter(){   
    
    const {completedTodos,totalTodos,} = React.useContext(TodoContext)

    let n = ((completedTodos * 100) / totalTodos)
    let bar, stylesBar;


    if(!n) bar = {width:"0%"}
    else bar = {width:parseInt(n).toFixed(2) + '%'}

    return(
        <div className="todoCounter">
            <p style={{
                textAlign:"center",
                marginBottom:"5px",
            }}>To Do Completed Bar</p>
            <div className="bar" style={stylesBar}>
                <div className="progress" style={bar}></div>
            </div>
        </div>
    )
}