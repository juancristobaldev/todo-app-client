import { createUseStyles } from "react-jss";
import * as sizes from "../../../constants/sizes";

export const useLoginStyles = createUseStyles({
  mainSignIn: {
    display: "grid",
    gridTemplateRows: "10vh 10vh 5vh 35vh 5vh 10vh 5vh 10vh 10vh",
    backgroundColor: ({ theme }) => theme.backgroundColor,
    color: ({ theme }) => theme.color,
  },
  todoLogo: {
    gridArea: "2/1/3/2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    "& img": {
      width: "10vw !important",
      height: "10vw !important",
    },
    "& h3": {
      fontSize: sizes.largeFont,
    },
  },
  button: {
    width: "65vw",
    height: "50px",
    borderRadius: sizes.borderRadius,
    border: 0,
    fontSize: sizes.mediumFont,
    fontWeight: "200",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    placeSelf: "center",
  },
  p: {
    fontSize: sizes.mediumFont,
    fontWeight: "200",
    alignSelf: "center",
    textAlign: "center",
  },
  formLogin: {
    gridArea: "4/1/5/2",
    display: "grid",
    gridTemplateRows: "repeat(3,1fr)",
  },
  formTitle: {
    gridArea: "3/1/4/2",
  },
  fieldForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    margin: "0 25px",
    "& input": {
      transition: ".5s",
      borderRadius: sizes.borderRadius,
      fontSize: sizes.mediumFont,
      height: "50px",
      padding: "0 20px",
      border: "1px solid white",
      background: "transparent",
      "&::placeholder": {
        color: "white",
      },
      "&:focus": {
        outline: "2px solid white",
      },
    },
  },
  signInButton: {
    background: ({ theme }) => theme.primaryColor,
  },
  notAccount: { gridArea: "5/1/6/2" },
  registerButton: {
    gridArea: "6/1/7/2",
  },
  continueGoogle: { gridArea: "7/1/8/2", fontSize: sizes.mediumFont },
  buttonGoogle: {
    gridArea: "8/1/9/2",
    background: "transparent",
    color: "white",
    border: "1px solid white",
  },
});
