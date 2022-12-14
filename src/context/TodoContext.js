import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { ME } from "../data/queries";

export const TodoContext = React.createContext()

export const TodoProvider = ({children}) => {

  const {data,error} = useQuery(ME)

  const [tasks, setTasks] = useState([])
  const [me,setMe] = useState({})

  const [innerWidth,setWidth] = useState(window.innerWidth)
  const [searchValue,setSearchValue] = useState('')
  const [openModal,setOpenModal] = useState(false)
  const [errorForm,setErrorForm] = useState(false)
  const [loading,setLoading] = useState(false)

  const dataUser = JSON.parse(localStorage.getItem('formData'))
  const completedTodos = tasks.filter(task => !!JSON.parse(task.status)).length
  const totalTodos = tasks.length
  let searchedTodos = []

  const windowWidthChange = () => {
    setWidth(window.innerWidth)
  }

  if (!searchValue.length >= 1) {
    searchedTodos = tasks
  } else {
    searchedTodos = tasks.filter((task) => {
      const todoText = task.task.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    });
  }

  const createTask = async (task) => {
    
  }

  const deleteTask = async (variables) => {

  }

  const updateTask = async (variables) => {

  }

  useEffect(  () => {
    if(!data)  setLoading(true)
    if(data){
       setLoading(false)
       setMe(data.getUser)
       setTasks(data.getTasks)
    }
  },[data,loading])

  console.log(me,tasks)

  return (
    <TodoContext.Provider value={{
        me,
        tasks,
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        openModal,
        setOpenModal,
        errorForm,
        setErrorForm,
        windowWidthChange,
        innerWidth,
        dataUser,
        createTask,
        deleteTask,
        updateTask
    }}>
      {children}
    </TodoContext.Provider>
  )
}