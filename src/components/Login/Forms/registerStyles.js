import { createUseStyles } from "react-jss";
import * as sizes from "../../../constants/sizes";
import * as generals from "../../../styles/generals/generals";

export const useRegisterStyles = createUseStyles({
  main: {
    display: "grid",
    gridTemplateRows: "5vh 10vh 5vh 45vh 5vh 10vh 5vh 10vh 5vh",
    background: ({ theme }) => theme.backgroundColor,
    color: ({ theme }) => theme.color,
  },
  form: {
    gridArea: "4/1/5/2",
    display: "grid",
    gridTemplateRows: "repeat(5,1fr)",
  },
  fieldForm: {
    ...generals.input,
  },
  p: {
    ...generals.p,
  },
  button: {
    ...generals.button,
  },
  signUp: {
    background: ({ theme }) => theme.primaryColor,
    '& .dotsIndicator':{
        '& div':{
          backgroundColor:'black'
        }
      }
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
  toContinue: {
    gridArea: "3/1/4/2",
  },
  uHaveAccount: {
    gridArea: "5/1/6/2",
  },
  signIn: { gridArea: "6/1/7/2" },
  orContinue: { gridArea: "7/1/8/2" },
  continueGoogle: {
    gridArea: "8/1/9/2",
    ...generals.buttonOutlined,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
        height: "1.5em",
        width: "2em"
    },
  },
});
