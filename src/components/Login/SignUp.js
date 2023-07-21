import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../data/mutations";
import { TodoLogo } from "./ToDoLogo";
import { useRegisterStyles } from "./Forms/registerStyles";
import { useTheme } from "react-jss";

import { useFormik } from "formik";
import * as Yup from "yup";
import { ContinueGoogle } from "./ContinueGoogle";
import { ButtonIndicator } from "../generals/ButtonActivityIndicator";

export default function SignUp() {
  const [createUser, { loading }] = useMutation(CREATE_USER);

  const [status, setStatus] = useState(false);

  const { values, errors, handleSubmit, setFieldValue, setErrors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      pass: "",
      passConfirm: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, "The name is too short")
        .max(20, "The name is too long")
        .required("The name is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("The email is required"),
      pass: Yup.string()
        .min(8, "The password requires a minimum of 8 characters")
        .max(20, "The password is too long")
        .required("Enter a password"),
      passConfirm: Yup.string()
        .oneOf([Yup.ref("pass"), null], "Password must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      await createUser({
        variables: {
          input: {
            ...values,
          },
        },
      }).then(({ data }) => {
        const { errors, success } = data.createUser;
        if (success) {
          setStatus(200);
          navigate("/");
        } else if (errors) {
          setStatus(404);
          setErrors(JSON.parse(errors));
        }

        setTimeout(() => {
          setStatus(false);
        }, 2000);
      });
    },
  });

  console.log(errors);

  const navigate = useNavigate();

  const theme = useTheme();

  const classes = useRegisterStyles({ theme });

  return (
    <main className={classes.main}>
      <TodoLogo className={classes.todoLogo} />
      <p className={`${classes.toContinue} ${classes.p}`}>
        To continue sign up
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className={classes.form}
      >
        <div className={classes.fieldForm}>
          <input
            placeholder="Name"
            onChange={(event) => setFieldValue("name", event.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className={classes.fieldForm}>
          <input
            placeholder="Email"
            onChange={(event) => setFieldValue("email", event.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className={classes.fieldForm}>
          <input
            placeholder="Password"
            type={"password"}
            onChange={(event) => setFieldValue("pass", event.target.value)}
          />
          {errors.pass && <p className="error">{errors.pass}</p>}
        </div>
        <div className={classes.fieldForm}>
          <input
            placeholder="Confirm password"
            type={"password"}
            onChange={(event) =>
              setFieldValue("passConfirm", event.target.value)
            }
          />
          {errors.passConfirm && <p className="error">{errors.passConfirm}</p>}
        </div>
        <ButtonIndicator
          type="submit"
          text="Sign up"
          loading={loading}
          className={`${classes.signUp} ${classes.button}`}
          status={status}
        />
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
      <ContinueGoogle
        className={`${classes.continueGoogle} ${classes.button}`}
      />
    </main>
  );
}
