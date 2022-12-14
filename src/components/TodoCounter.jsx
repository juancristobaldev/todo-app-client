import React from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoCounter(){   
    
    const {completedTodos,totalTodos,innerWidth} = React.useContext(TodoContext)

    console.log(completedTodos,totalTodos)

    let n = ((completedTodos * 100) / totalTodos)
    let bar, stylesBar;

    if(innerWidth >= 500){
        stylesBar = {
            width: "100%",
            height: "1vh",
            background: `white`,
        }
    }else{
        stylesBar = {
            width: "100%",
            height: "1vh",
            background: "white",
        }
    }

    if(!n) bar = {width:"0%"}
    else bar = {width:parseInt(n).toFixed(2) + '%'}
    bar["height"] = '100%'
    bar["transition"] = '1s'
    bar["background"] = "rgb(32, 87, 209)"
    

    return(
        <div>
            <p style={{
                textAlign:"center",
                marginBottom:"5px",
            }}>To Do completed:</p>
            <div style={stylesBar}>
                <div style={bar}></div>
            </div>
        </div>
    )
}