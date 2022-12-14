import { gql } from "@apollo/client"

export const ME = gql`
query {
    getUser{
        id
        name
        user
        pass
        token
    }
    getTasks{
        id
        task
        userId
        dateCreated
        status
    }
}`

export const GET_TASKS = gql`
query{
    getTasks{
        id
        task
        userId
        dateCreated
        status
    }
}
`
export const GET_TASK = gql`
query{
    getTask{
        id
        task
        userId
        dateCreated
        status
    }
}
`