import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { ME } from "../data/queries";

export const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
  const { data, loading, error } = useQuery(ME);

  const [tasks, setTasks] = useState([]);
  const [me, setMe] = useState({});

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);



  const completedTodos = tasks.filter(
    (task) => !!JSON.parse(task.status)
  ).length;
  const totalTodos = tasks.length;
  let searchedTodos = [];



  if (!searchValue.length >= 1) {
    searchedTodos = tasks;
  } else {
    searchedTodos = tasks.filter((task) => {
      const todoText = task.task.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const createTask = async (task) => {};

  const deleteTask = async (variables) => {};

  const updateTask = async (variables) => {};

  useEffect(() => {
    if (data && !loading) {
      const myData = { ...data.getUser };
      const myTasks = [...data.getUser.tasks];
      delete myData.tasks;

      setMe(myData);
      setTasks(myTasks);
    }
  }, [data, loading]);


  return (
    <TodoContext.Provider
      value={{
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
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
