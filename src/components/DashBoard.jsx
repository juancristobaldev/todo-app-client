import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import '../styles/scss/DashBoard.scss';


export default function DashBoard({children}){

    const { me } = useContext(TodoContext)

    
    let hoy = new Date()    
    const days = ['Lun','Mar','Mie','Jue','Vie','Sab','Dom']

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