import React, { useContext } from "react";

import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import Main from "./Main";
import Footer from "./Footer";
import { Modal } from "./Modal";
import TodoForm from "./TodoForm";
import { TodoContext } from "../context/TodoContext";
import { Loading } from "./Loading";
import { useMutation } from "@apollo/client";
import { DELETE_TASK, UPDATE_TASK } from "../data/mutations";
import { ME } from "../data/queries";
import { ListApi } from "./ListApi";
import { Container } from "./generals/Container";

import Header from "./Header";
import { useTodoAppStyle } from "../styles/jss/useTodoAppStyle";
import { useTheme } from "react-jss";
import { Weeks } from "./Weeks";

const TodoApp = () => {
  const {
    tasks,
    error,
    loading,
    searchedTodos,
    searchValue,
    setSearchValue,
    openModal,
    windowWidthChange,
    innerWidth,
  } = useContext(TodoContext);

  const [updateTask, { data, loading: loadingUpdate }] =
    useMutation(UPDATE_TASK);
  const [deleteTask, { data: dataTask, loading: loadingDelete }] =
    useMutation(DELETE_TASK);

  const onComplete = async (task) => {
    await updateTask({
      variables: {
        input: {
          id: task.id,
          status: JSON.parse(task.status) ? "false" : "true",
        },
      },
      refetchQueries: [{ query: ME }],
    }).then(({ data }) => {
      console.log(data);
    });
  };

  const onDelete = async (id) => {
    await deleteTask({
      variables: {
        input: {
          id: id,
        },
      },
      refetchQueries: [{ query: ME }],
    }).then(({ data }) => {
      const { errors, success } = data.deleteTask;
      console.log(errors, success);
    });
  };

  const theme = useTheme();
  const classes = useTodoAppStyle({ theme });

  return (
    <Main className={classes.main}>
      {(loadingDelete || loadingUpdate) && (
        <Loading className={classes.loading} />
      )}
      <Weeks className={classes.weeks} />
      <Header>
        <TodoCounter />
      </Header>
      <TodoSearch
        className={classes.todoSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Container className={classes.containerTodos}>
        <ListApi
          className="sectionTodos"
          data={tasks}
          loading={loading}
          error={error}
          searchContents={searchedTodos}
          onError={() => (
            <div className={classes.apiMessage}>
              <p>Ooops! It's a error</p>
            </div>
          )}
          onLoading={() => (
            <div className={classes.apiMessage}>
              <p>Loading...</p>
            </div>
          )}
          onEmpty={() => (
            <div className={classes.apiMessage}>
              <p>Create your first task!</p>
            </div>
          )}
          onEmptySearch={() => (
            <div className={classes.apiMessage}>
              <p>No results with "{searchValue}"</p>
            </div>
          )}
          render={(task) => (
            <TodoItem
              classNameCheckbox={classes.checkBox}
              className={`${classes.todoItem} ${
                JSON.parse(task.status) ? "complete" : "not"
              }`}
              key={task.id}
              text={task.task}
              completed={JSON.parse(task.status)}
              onDelete={() => onDelete(task.id)}
              onComplete={() => onComplete(task)}
            />
          )}
        ></ListApi>
      </Container>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton className={classes.createTodoBotton} />
    </Main>
  );
};

export default TodoApp;
