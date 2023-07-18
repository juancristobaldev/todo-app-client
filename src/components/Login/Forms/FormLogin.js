import React from "react";
import { useTheme } from "react-jss";
import { useNavigate } from "react-router-dom";
import "../../../styles/scss/FormsAuth.scss";
import { TodoLogo } from "../ToDoLogo";
import { useLoginStyles } from "./loginStyles";

export default function FormLogin({ formDates, width, onLogin, errors }) {
  const navigate = useNavigate();

  const theme = useTheme();

  const classes = useLoginStyles({ theme });
  return (
    <main className={classes.mainSignIn}>
      <TodoLogo className={classes.todoLogo} />
      <p className={`${classes.p} ${classes.formTitle}`}>To continue sign in</p>
      <form onSubmit={(event) => onLogin(event)} className={classes.formLogin}>
        <div className={classes.fieldForm}>
          <input
            placeholder="Email"
            autoComplete="off"
            onChange={(event) => formDates(event, "user")}
          />
          {errors.user && <p className="error">{errors.user}</p>}
        </div>
        <div className={classes.fieldForm}>
          <input
            placeholder="Password"
            autoComplete="off"
            type={"password"}
            onChange={(event) => formDates(event, "pass")}
          />
          {errors.pass && <p className="error">{errors.pass}</p>}
        </div>
        <button className={`${classes.signInButton} ${classes.button}`}>
          Sign in
        </button>
      </form>
      <p className={`${classes.notAccount} ${classes.p}`}>
        Do you not have a account?
      </p>
      <button onClick={() => navigate('/signup')} className={`${classes.button} ${classes.registerButton}`}>
        Sign up
      </button>
      <p className={`${classes.p} ${classes.continueGoogle}`}>
        Or continue with Google
      </p>
      <button className={`${classes.button} ${classes.buttonGoogle}`}>
        Continue with Google
      </button>
    </main>
  );
}
