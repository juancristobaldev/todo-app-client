import { useMutation } from "@apollo/client"
import { useState } from "react"
import { CREATE_TASK } from "../../data/mutations"
import { Loading } from "../Loading"


export default function TodoForm(){
    const [text,setText] = useState('')
    const [errors,setErrors] = useState({})

    const [createTask, {data,loading}] = useMutation(CREATE_TASK)

    const onChange = (e) => {
        setText(e.target.value)
        setErrors({})
    }

    const onCancel = (event) => {

    }
    const onSubmit = async (event) => {

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