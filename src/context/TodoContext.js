import { useQuery } from "@apollo/client";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { GET_TASKS_BY_DATE, ME } from "../data/queries";

export const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
  const [daySelected, setDaySelected] = useState(
    DateTime.local().toFormat("dd-MM-yyyy")
  );

  const { data, loading, error } = useQuery(ME);

  const {
    data: dataTask,
    loading: loadingTask,
    error: errorTask,
  } = useQuery(GET_TASKS_BY_DATE, {
    variables: {
      date: daySelected,
    },
  });

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
      delete myData.tasks;

      setMe(myData);
    }
    if (dataTask && !loadingTask) {
      const myTasks = [...dataTask.getTasksByDate];
      setTasks(myTasks);
    }
  }, [dataTask, data, loadingTask, loading]);

  console.log(tasks);

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
        daySelected,
        setDaySelected,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
