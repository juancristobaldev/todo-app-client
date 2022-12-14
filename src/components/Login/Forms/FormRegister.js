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
                            TODO APP
                        </p>
                        <p className="todoDes"
                        >
                            Lleva una cuenta de tus tareas diarias
                        </p>
                    </div>
            }
            <form onSubmit={(event)=>onRegister(event)} className="formRegister">
            <div className="divTitle">
                <h2>Registrate</h2>
            </div>
            <div className="divName divInput">
                <label>Nombre:</label>
                <input onChange={(event) => formDates(event,"name")}/>
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="divUser divInput">
                <label>Nombre de usuario:</label>
                <input onChange={(event) => formDates(event,"user")}/>
                {errors.user && <p className="error">{errors.user}</p>}
            </div>
            <div className="divPass divInput">
                <label>Contraseña:</label>
                <input type={"password"} onChange={(event) => formDates(event,"pass")}/>
                {errors.pass && <p className="error">{errors.pass}</p>}
            </div>
            <div className="divRepeatPass divInput">
                <label>Repite tu contraseña:</label>
                <input type={"password"} onChange={(event) => formDates(event,"passConfirm")}/>
                {errors.pass && <p className="error">{errors.passConfirm}</p>}
            </div>
            <div  className="divButtons">
                <button
                type="submit"
                className="buttonRegister">Registrarse</button>
                <button
                className="buttonLogin"
                onClick={() => navigate('/login')}
                >Iniciar sesion</button>
            </div>
        </form>
        </React.Fragment>
    )
}