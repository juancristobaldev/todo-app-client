import React, { useContext } from 'react';
import '../styles/App.css';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import DashBoard from  './DashBoard';
import Main from './Main';
import Footer from './Footer';
import { Modal } from './Modal';
import TodoForm from './TodoForm';
import { TodoContext } from '../context/TodoContext';
import { Loading } from './Loading';
import { useMutation } from '@apollo/client';
import { UPDATE_TASK } from '../data/mutations';
import { ME } from '../data/queries';
import { ListApi } from './ListApi';
import { Container } from './generals/Container';
import '../styles/scss/containerTodos.scss'

const TodoApp = () => {
    const 
    {
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

    const [updateTask, {data,loading:loadingUpdate}] = useMutation(UPDATE_TASK)

    window.addEventListener('resize', () => {
        windowWidthChange()
    });

    const onComplete = async (task) => {
        await updateTask({
          variables:{
            input:{
              id:task.id,
              status:JSON.parse(task.status) ? "false" : "true"
            }
          },
          refetchQueries:[{query:ME}]
        }).then( ({data}) => {
          const {errors,success} = data.updateTask
          console.log(errors,success)
        })
    }


    return (
      <Main>
        {(loading || loadingUpdate) && <Loading/>}
        <DashBoard 
          user={'Juancri'}
        >
          <TodoCounter/>
        </DashBoard>
        <Container className={'containerToDos'}>
          <TodoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
          />
          <ListApi
          className='sectionTodos'
          data={tasks}
          loading={loading}
          error={error}
          searchContents={searchedTodos}
          onError={() => <div className='api-message'><p>Ooops! It's a error</p></div>}
          onLoading={() => <div className='api-message'><p>Loading...</p></div>}
          onEmpty={() => <div className='api-message'><p>Create your first task!</p></div>}
          onEmptySearch={() => <div className='api-message'><p>No results with "{searchValue}"</p></div>}
          render={task => (
            <TodoItem 
              key={task.id} 
              text={task.task}
              completed={JSON.parse(task.status)}
              onDelete = {() => console.log('delete')}
              onComplete={() => onComplete(task)}
              />
        )}
          >
        </ListApi>
        </Container>
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
        <CreateTodoButton/>
        <Footer/>
      </Main>
    )
}

export default TodoApp;