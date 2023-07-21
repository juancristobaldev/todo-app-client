import { createUseStyles } from "react-jss";
import * as generals from "../generals/generals";
import * as sizes from "../../constants/sizes";

export const useTodoAppStyle = createUseStyles({
  main: {
    background: ({ theme }) => theme.backgroundColor,
    color: "white",
    display: "grid",
    gridTemplateRows: "5vh 25vh 7.5vh 10vh 37.5vh 10vh 5vh",
  },
  todoSearch: {
    gridArea: "3/1/4/2",
    placeSelf: "center",
    background: ({ theme }) => theme.subBackground,
    height: "35px",
    color: "white",
    width: "calc(100% - 50px)",
    border: 0,
    borderRadius: "17.5px",
    textAlign: "center",
    fontSize: sizes.smallFont,
    "&::placeholder": {
      color: "whitesmoke",
    },
    "&:focus": {
      outline: "none",
    },
  },
  weeks: {
    margin: "0 25px",
    gridArea: "4/1/5/2",
    display: "grid",
    gridTemplateColumns: "5% repeat(7,1fr) 5%",
    "& .day": {
      transition: ".5s",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      fontSize: sizes.smallFont,
      "&.here": {
        fontSize: sizes.mediumSmallLargeFont,
        "& p": {
          color: ({ theme }) => theme.primaryColor,
        },
      },
    },
    "& .buttonDirection": {
      border: 0,
      background: ({ theme }) => theme.subBackground,
      height: "50%",
      alignSelf: "center",
      borderRadius:10,
      "& svg": {
        scale: 2,
        fill:'white'
      },
    },
  },
  loading: {
    opacity: "50%",
    background: ({ theme }) => theme.backgroundColor,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTodos: {
    gridArea: "5/1/6/2",
    marginTop:'calc((7.5vh - 35px) / 2)'
  },
  apiMessage: {
    color: "white",
    textAlign: "center",
    fontWeight: "200",
    fontSize: sizes.smallFont,
  },
  todoItem: {
    transition: ".5s",
    display: "grid",
    gridTemplateColumns: "40px 1fr 40px",
    padding: "0 25px",
    gap: 10,
    "& .spanItem": {
      background: ({ theme }) => theme.subBackground,
      height: "40px",
      width: "40px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        width: "1.25em",
        height: "1.25em",
      },
    },
    "& .textTodo": {
      width: "100%",
      borderRadius: "10px",
      background: ({ theme }) => theme.subBackground,
      display: "flex",
      justifyContent: "center",
      "& p": {
        fontSize: sizes.smallFont,
        fontWeight: "200",
        alignSelf: "center",
      },
    },
    "&.complete": {
      opacity: "50%",
      "& .textTodo": {
        textDecoration: "line-through",
      },
    },
  },
  checkBox: {
    border: `2px solid`,
    borderColor: ({ theme }) => theme.subBackground,
    height: "36px",
    width: "36px",
    alignSelf: "center",
    borderRadius: "10px",
    "& .checkBoxOn": {
      backgroundColor: ({ theme }) => theme.primaryColor,
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      "& svg": {
        fill: "black",
      },
    },
  },
  createTodoBotton: {
    ...generals.button,
    gridArea: "6/1/7/2",
    width: "calc(100% - 50px)",
    backgroundColor: ({ theme }) => theme.primaryColor,
    height: "45px",
    fontSize: sizes.smallFont,
  },
});
