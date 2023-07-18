import { createUseStyles } from "react-jss";

import * as sizes from "../../../constants/sizes";
export const useAuthStyles = createUseStyles({
  main: {
    display: "grid",
    gridTemplateRows: "20vh 20vh 7.5vh 15vh 7.5vh 10vh 20vh",
    backgroundColor: ({ theme }) => theme.backgroundColor,
    color: ({ theme }) => theme.color,
  },
  todoLogo: {
    gridArea: "2 / 1 / 3 / 2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& img": {
      width: "30vw !important",
      height: "30vw !important",
    },
    "& h3": {
      fontSize: sizes.largeFont,
    },
  },
  toContinue: {
    gridArea: "3/1/4/2",
    fontSize: sizes.mediumFont,
    fontWeight: "200",
    alignSelf: "center",
    textAlign: "center",
  },
  buttons: {
    gridArea: "4/1/5/2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    "& button": {
      width: "65%",
      height: "50px",
      border: 0,
      borderRadius: sizes.borderRadius,
      fontSize: sizes.mediumFont,
      "&.signIn": {
        background: ({ theme }) => theme.primaryColor,
      },
    },
  },
  orContinue: {
    gridArea: "5/1/6/2",
    fontSize: sizes.mediumFont,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "200",
  },
  divContinueGoogle: {
    gridArea: "6/1/7/2",
    display: "flex",
    justifyContent: "center",
    "& button": {
      alignSelf: "center",
      width: "65%",
      height: "50px",
      fontSize: sizes.mediumFont,
      fontWeight: "200",
      background: "transparent",
      border: "1px solid white",
      borderRadius: sizes.borderRadius,
      color: ({ theme }) => theme.color,
    },
  },
});
