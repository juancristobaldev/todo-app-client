import React from "react";
import { useNavigate } from "react-router-dom";
import '../../../styles/scss/FormsAuth.scss';

export default function FormRegister({width,formDates,onRegister,errors}){
    const navigate = useNavigate()
    return(
        <React.Fragment>
            {width < 601 && 
                    <div className="divDes">
                        <p className="todoApp"
                        >
                            TASK APP
                        </p>
                        <p className="todoDes"
                        >
                        Control your daily tasks
                        </p>
                    </div>
            }
            <form onSubmit={(event)=>onRegister(event)} className="formRegister">
            <div className="divTitle">
                <h2>Register</h2>
            </div>
            <div className="divName divInput">
                <label>Name:</label>
                <input onChange={(event) => formDates(event,"name")}/>
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="divUser divInput">
                <label>Username:</label>
                <input onChange={(event) => formDates(event,"user")}/>
                {errors.user && <p className="error">{errors.user}</p>}
            </div>
            <div className="divPass divInput">
                <label>Password:</label>
                <input type={"password"} onChange={(event) => formDates(event,"pass")}/>
                {errors.pass && <p className="error">{errors.pass}</p>}
            </div>
            <div className="divRepeatPass divInput">
                <label>Repeat your password:</label>
                <input type={"password"} onChange={(event) => formDates(event,"passConfirm")}/>
                {errors.pass && <p className="error">{errors.passConfirm}</p>}
            </div>
            <div  className="divButtons">
                <button
                type="submit"
                className="buttonRegister">Sign up</button>
                <button
                className="buttonLogin"
                onClick={() => navigate('/login')}
                >Sign in</button>
            </div>
        </form>
        </React.Fragment>
    )
}