import React, { useEffect, useState } from "react";
import FormLogin from "./Forms/FormLogin";
import LoginLayout from "./LoginLayout";

import '../../styles/scss/Login.scss';
import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "../../data/mutations";
import { redirect } from "react-router-dom";


export default function SignIn(){
    const [width,setWidth] = useState(window.innerWidth)
    const [valueForm, setValueForm] = useState({
        user:'',
        pass:'',        
    })
    const [signInUser] = useMutation(SIGNIN_USER)


    const [errors,setError] = useState({})

    const windowWidthChange = () => {
        setWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', () => {
        windowWidthChange()
    })
    

    const formDates = (event,input) => {
        const object = {...valueForm}
        object[input] = event.target.value
        setValueForm(object)
    }

    const onLogin = async (event) => {
        event.preventDefault()

        const errors = {}
        
        if(!valueForm.user)  errors.user = 'This field is required.'
        if(!valueForm.pass)  errors.pass = 'This field is required.'

        let arrErr = Object.entries(errors)

        if(arrErr.length) setError(errors)
        else await signInUser({
            variables:{
                input:{
                    user:valueForm.user,
                    pass:valueForm.pass
                }
            }
        }).then( async ({data}) => {
            const {errors,success,token} = data.signInUser
            if(success){
                await localStorage.setItem('token',token)
                window.location.reload()
            } 
            else setError(errors)
        })
    }

    useEffect(() => {
        setError({})
    },[valueForm])

    return(
        <LoginLayout
        width={width}
        >
            <FormLogin
            formDates={formDates}
            onLogin={onLogin}
            width={width}
            errors={errors}
            />
        </LoginLayout>
    )
}