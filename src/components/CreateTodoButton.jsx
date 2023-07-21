import React from "react";
import { RiAddFill } from "react-icons/ri";
import { TodoContext } from "../context/TodoContext";

export default function CreateTodoButton({ className}){
    const {openModal,setOpenModal,setErrorForm,} = React.useContext(TodoContext)

    return(
        <button className={className}
        onClick={() => {
            setOpenModal(!openModal)
            setErrorForm(false)
        }}
        >
        Create a new ToDo
        </button>
    )
}