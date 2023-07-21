import React from "react";
import TodoApp from "./components/TodoApp";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SignIn from "./components/Login/SingIn";
import SignUp from "./components/Login/SignUp";
import { Auth } from "./components/Login/Auth/Auth";
import { ThemeProvider } from "react-jss";

const token = localStorage.getItem("token");

function App() {
  const theme = {
    backgroundColor: "#212121",
    subBackground: "#414141",
    primaryColor: "#6AFFCC",
    secondaryColor: "white",
    color: "white",
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<TodoApp />} />
              <Route path="/login" element={<Navigate to={"/"} />} />
              <Route path="/register" element={<Navigate to={"/"} />} />
              <Route path="/auth" element={<Navigate to={"/"} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to={"/auth"} />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export { App };
