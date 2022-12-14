import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { CREATE_TASK } from "../data/mutations";
import { ME } from "../data/queries";
import '../styles/scss/formModal.scss';
import { Loading } from "./Loading";

export default function TodoForm(){
    const [text,setText] = useState('')
    const [errors,setErrors] = useState({})

    const [createTask, {data,loading}] = useMutation(CREATE_TASK)

    const {
        openModal,
        setOpenModal,
        errorForm,
        setErrorForm,
    } = React.useContext(TodoContext)

    const onChange = (e) => {
        setText(e.target.value)
        setErrors({})
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(!openModal)
    }
    const onSubmit = async (event) => {
        event.preventDefault()
        
        await createTask({
            variables:{
                input:{
                    task:text
                }
            },
            refetchQueries:[{query:ME}]
        }).then( async ({data}) => {
            const {errors,success} = data.createTask
            if(errors) setErrors(JSON.parse(errors))
            if(success) setOpenModal(false)
        })
    }

    console.log(errors.task)

    return(
        <div className="back">
            {loading && <Loading/>}
            <form className="formModal" onSubmit={onSubmit}>
                <label>ADD A NEW TASK</label>
                <div className="divInput">
                    <input
                        placeholder="New task"
                        value={text}
                        onChange={(e) => onChange(e)}
                    />
                    {errors.task && <p className="error">{errors.task}</p>}
                </div>
                <div className="divButton">
                    <button
                    className="onCancel"
                    type="submit"
                    onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
                <div className="divButton">
                    <button
                    className="onSubmit"
                    type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}