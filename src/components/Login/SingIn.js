import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "../../data/mutations";
import { useTheme } from "react-jss";
import { useLoginStyles } from "./Forms/loginStyles";
import { TodoLogo } from "./ToDoLogo";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ContinueGoogle } from "./ContinueGoogle";


import * as Yup from "yup";
import { ButtonIndicator } from "../generals/ButtonActivityIndicator";

export default function SignIn() {
  const [signInUser, { loading }] = useMutation(SIGNIN_USER);
  const [status, setStatus] = useState(false);

  const { values, errors, handleSubmit, setFieldValue, setErrors } = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Provide a valid email")
        .required("A email is required"),
      pass: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      await signInUser({
        variables: {
          input: {
            email: values.email,
            pass: values.pass,
          },
        },
      }).then(async ({ data }) => {
        const { errors, success, token } = data.signInUser;

        if (success) {
          setStatus(200);
          await localStorage.setItem("token", token);
          window.location.reload();
        } else {
          setStatus(404);
          setErrors(JSON.parse(errors));
        }

        setTimeout(() => {
          setStatus(false);
        }, 2000);
      });
    },
  });

  const navigate = useNavigate();

  const theme = useTheme();

  const classes = useLoginStyles({ theme });
  return (
    <main className={classes.mainSignIn}>
      <TodoLogo className={classes.todoLogo} />
      <p className={`${classes.p} ${classes.formTitle}`}>To continue sign in</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
        className={classes.formLogin}
      >
        <div className={classes.fieldForm}>
          <input
            value={values.email}
            placeholder="Email"
            autoComplete="off"
            onChange={(event) => setFieldValue("email", event.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className={classes.fieldForm}>
          <input
            value={values.pass}
            placeholder="Password"
            autoComplete="off"
            type={"password"}
            onChange={(event) => setFieldValue("pass", event.target.value)}
          />
          {errors.pass && <p className="error">{errors.pass}</p>}
        </div>
        <ButtonIndicator
          type="submit"
          className={`${classes.signInButton} ${classes.button}`}
          loading={loading}
          status={status}
          text="Sign In"
        />
      </form>
      <p className={`${classes.notAccount} ${classes.p}`}>
        Do you not have a account?
      </p>
      <button
        onClick={() => navigate("/register")}
        className={`${classes.button} ${classes.registerButton}`}
      >
        Sign up
      </button>
      <p className={`${classes.p} ${classes.continueGoogle}`}>
        Or continue with Google
      </p>
      <ContinueGoogle className={`${classes.button} ${classes.buttonGoogle}`} />
    </main>
  );
}
