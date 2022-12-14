import React from "react";
import { useNavigate } from "react-router-dom";
import '../../../styles/scss/FormsAuth.scss';

export default function FormLogin({formDates,width,onLogin,errors}){
    const navigate = useNavigate()
    return(
        <React.Fragment>
            {width <= 600 && 
                    <div className="divDes">
                        <p className="todoApp"
                            >
                            TODO APP
                        </p>
                        <p 
                        className="todoDes">
                            Lleva una cuenta de tus tareas diarias
                        </p>
                    </div>
            }
            <form onSubmit={(event) => onLogin(event)} className="formLogin">
            <div className="divTitle">
                <h2>Inicia sesión.</h2>
            </div>
            <div className="divUser divInput">
                <label>Usuario:</label>
                <input onChange={(event) => formDates(event,"user")}/>
                {errors.user && <p className="error">{errors.user}</p>}
            </div>
            <div className="divPass divInput">
                <label>Contraseña:</label>
                <input type={"password"} onChange={(event) => formDates(event,"pass")}/>
                {errors.pass && <p className="error">{errors.pass}</p>}
            </div>
            <div className="divButtons">
                <button className="buttonLogin">
                Iniciar sesion
                </button>
                <button
                className="buttonRegister"
                onClick={() => navigate('/signup')}
                >Registrarse</button>
            </div>
        </form>
        </React.Fragment>
    
    )
}