import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import '../styles/scss/DashBoard.scss';

let hoy = new Date()


export default function DashBoard({children}){

    const { me } = useContext(TodoContext)

    console.log(me)

    return(
        <header className="HeaderDash">
            <div className="frontBackground"></div>
            <div className="HeaderTodo">
                <p>TASK'S APP</p>
            </div>
            <div className="HeaderDate">
                <p>{hoy.toDateString()}</p>
            </div>
            <div className="HeaderUser" >
                <h1>¡What's up {me.name}!</h1>
            </div>
            <div className="HeaderTodoComplete">
            {children}
            </div>
        </header>
    )
    
}