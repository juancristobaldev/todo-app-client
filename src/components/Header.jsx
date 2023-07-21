import React from "react";
import { useTheme } from "react-jss";
import { useHeaderStyles } from "../styles/jss/useHeaderStyles";
import { TodoLogo } from "./Login/ToDoLogo";

export default function Header({ children }) {
  const theme = useTheme();
  const classes = useHeaderStyles({ theme });

  return (
    <header className={classes.header}>
      <TodoLogo className={classes.todoLogo} />
      <h1 className={classes.hiUser}>Hi Juan Cristobal</h1>
      <div className={classes.todoComplete}>{children}</div>
    </header>
  );
}
