import { gql } from "@apollo/client"

export const CREATE_USER = gql`
        mutation createUser($input:CreateUserInput!){
            createUser(input:$input){
            errors
            success
            }
        }
    `
export const UPDATE_USER = gql`
    mutation updateUser($input:UpdateUserInput!){
        updateUser(input:$input){
        errors
        success
        }
    }
`
export const DELETE_USER = gql`
mutation deleteUser($input:DeleteUserInput!){
    deleteUser(input:$input){
    errors
    success
    }
}
`
export const SIGNIN_USER = gql`
mutation signInUser($input:SignInUserInput!){
    signInUser(input:$input){
    errors
    success
    token
    }
}
`

export const CREATE_TASK = gql`
mutation createTask($input:CreateTaskInput!){
    createTask(input:$input){
    errors
    success
    }
}
`

export const UPDATE_TASK = gql`
mutation updateTask($input:UpdateTaskInput!){
    updateTask(input:$input){
    errors
    success
    }
}
`


export const DELETE_TASK = gql`
mutation deleteTask($input:DeleteTaskInput!){
    deleteTask(input:$input){
    errors
    success
    }
}
`
