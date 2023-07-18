import React from "react";
import { useTheme } from "react-jss";
import { useNavigate } from "react-router-dom";
import { TodoLogo } from "../ToDoLogo";
import { useAuthStyles } from "./authStyles";

export const Auth = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const classes = useAuthStyles({ theme: theme });

  const buttons = [
    {
      onClick: () => navigate("/login"),
      text: "Sign In",
      className: "signIn",
    },
    {
      onClick: () => navigate("/signup"),
      text: "Sign up",
      className: "signUp",
    },
  ];

  return (
    <main className={classes.main}>
      <TodoLogo className={classes.todoLogo} />
      <div className={classes.toContinue}>
        <p>To continue auth you</p>
      </div>
      <div className={classes.buttons}>
        {buttons.map((button) => (
          <button className={button.className} onClick={() => button.onClick()}>
            {button.text}
          </button>
        ))}
      </div>
      <div className={classes.orContinue}>
        <p>Or continue with Google</p>
      </div>
      <div className={classes.divContinueGoogle}>
        <button onClick={() => console.log("click")}>
          Continue with Google
        </button>
      </div>
    </main>
  );
};
