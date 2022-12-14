import React from "react";
import TodoApp from "./components/TodoApp"
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from "./components/Login/SingIn";
import SignUp from "./components/Login/SignUp";

const token = localStorage.getItem('token')

function App() {
  return (
    <Router>
      <Routes>
        {token ?
                (
                  <>
                    <Route path="/" element={<TodoApp/>}/>
                    <Route path="/login" element={<Navigate to={'/'}/>}/>
                    <Route path="/signup" element={<Navigate to={'/'}/>} />  
                  </>
                )
                :
                (
                  <>
                    <Route path="/" element={<Navigate to={'/login'}/>}/>
                    <Route path="/login" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                  </>
                )
      }
      </Routes>
    </Router>
  );
}

export {App}
