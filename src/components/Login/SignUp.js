import React, { useEffect, useState } from "react";
import FormRegister from "./Forms/FormRegister";
import LoginLayout from "./LoginLayout";

import '../../styles/scss/Login.scss';
import '../../styles/scss/Modal.scss'


import { Modal } from "../Modal";
import { Container } from "../generals/Container";
import { Text } from "../generals/Text";
import { Button } from "../generals/Button";
import {MdDone} from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../data/mutations";


export default function SignUp(){

    const [createUser] = useMutation(CREATE_USER)

    const navigate = useNavigate()
    const [width,setWidth] = React.useState(window.innerWidth)
    const [valueForm, setValueForm] = React.useState({
        user:'',
        name:'',
        pass:'',
        passConfirm:'',
        
    })
    const [error,setError] = React.useState(
        {
            error:false,
            type:''
        }
    )

    const [errorsData,setErrors] = React.useState(
        {
            error:false,
            errors:[]
        }
    )

    const [modal,updateModal] = useState(false)

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
        setError({error:false})
    }

    const onRegister = async (event) => {
        event.preventDefault()

        const {user, name, pass, passConfirm} = valueForm

        await createUser({
            variables:{
                input:{
                    user:user,
                    name:name,
                    pass:pass,
                    passConfirm:passConfirm
                }
            }
        }).then(({data}) => {
            const {errors,success} = data.createUser
            if(success) navigate('/signin')
            if(errors) setErrors(JSON.parse(errors))
        })

    } 

    useEffect(() => {
        setErrors({})
       
    },[valueForm])

    return(
        <LoginLayout 
        width={width}>
            <FormRegister
            formDates={formDates}
            onRegister={onRegister}
            width={width}
            errors={errorsData}
            />
            {modal && 
                <Modal>
                    <Container
                    className={'back'}
                    >
                        <Container className={'modal-success'}>
                            <MdDone
                            fill="green"
                            />
                            <Text
                            className={'text-modal'}
                            text={'Usuario creado con exito'}
                            />
                            <Button
                            onClick={() => navigate('/login')}
                            textButton={'Aceptar'}
                            />
                        </Container>
                    </Container>
                </Modal>
            }
        </LoginLayout>
    )
}