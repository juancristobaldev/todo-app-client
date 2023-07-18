import React, { useEffect, useState } from "react";

import "../../styles/scss/Login.scss";
import "../../styles/scss/Modal.scss";

import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../data/mutations";
import { TodoLogo } from "./ToDoLogo";
import { useRegisterStyles } from "./Forms/registerStyles";
import { useTheme } from "react-jss";

export default function SignUp() {
  const [createUser] = useMutation(CREATE_USER);

  const navigate = useNavigate();
  const [width, setWidth] = React.useState(window.innerWidth);
  const [valueForm, setValueForm] = React.useState({
    user: "",
    name: "",
    pass: "",
    passConfirm: "",
  });
  const [error, setError] = React.useState({
    error: false,
    type: "",
  });

  const [errorsData, setErrors] = React.useState({
    error: false,
    errors: [],
  });

  const theme = useTheme();

  const classes = useRegisterStyles({ theme });

  const windowWidthChange = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", () => {
    windowWidthChange();
  });

  const formDates = (event, input) => {
    const object = { ...valueForm };
    object[input] = event.target.value;
    setValueForm(object);
    setError({ error: false });
  };

  const onRegister = async (event) => {
    event.preventDefault();

    const { user, name, pass, passConfirm } = valueForm;

    await createUser({
      variables: {
        input: {
          user: user,
          name: name,
          pass: pass,
          passConfirm: passConfirm,
        },
      },
    }).then(({ data }) => {
      const { errors, success } = data.createUser;
      if (success) navigate("/login");
      if (errors) setErrors(JSON.parse(errors));
    });
  };

  useEffect(() => {
    setErrors({});
  }, [valueForm]);

  return (
    <main className={classes.main}>
      <TodoLogo className={classes.todoLogo} />
      <p className={`${classes.toContinue} ${classes.p}`}>
        To continue sign up
      </p>
      <form onSubmit={(event) => onRegister(event)} className={classes.form}>
        <div className={classes.fieldForm}>
          <input
            placeholder="Name"
            onChange={(event) => formDates(event, "name")}
          />
          {errorsData.name && <p className="error">{errorsData.name}</p>}
        </div>
        <div className={classes.fieldForm}>
          <input             placeholder="Email" onChange={(event) => formDates(event, "user")} />
          {errorsData.user && <p className="error">{errorsData.user}</p>}
        </div>
        <div className={classes.fieldForm}>
          <input
                      placeholder="Password"
            type={"password"}
            onChange={(event) => formDates(event, "pass")}
          />
          {errorsData.pass && <p className="error">{errorsData.pass}</p>}
        </div>
        <div className={classes.fieldForm}>
          <input
                      placeholder="Confirm password"
            type={"password"}
            onChange={(event) => formDates(event, "passConfirm")}
          />
          {errorsData.pass && <p className="error">{errorsData.passConfirm}</p>}
        </div>
        <button type="submit" className={`${classes.signUp} ${classes.button}`}>
          Sign up
        </button>
      </form>
      <p className={`${classes.uHaveAccount} ${classes.p}`}>
        Do you have a account?
      </p>
      <button
        className={`${classes.signIn} ${classes.button}`}
        onClick={() => navigate("/login")}
      >
        Sign in
      </button>
      <p className={`${classes.orContinue} ${classes.p}`}>
        Or continue with Google
      </p>
      <button
        className={`${classes.continueGoogle} ${classes.button}`}
        onClick={() => navigate("/login")}
      >
        Continue with Google
      </button>
    </main>
  );
}
