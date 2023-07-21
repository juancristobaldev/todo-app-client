import { createUseStyles } from "react-jss";
import * as generals from "../generals/generals";

import * as sizes from "../../constants/sizes";

export const useHeaderStyles = createUseStyles({
  header: {
    gridArea: "2/ 1 / 3 / 2",
    display: "grid",
    gridTemplateRows: "repeat(3,1fr)",
  },
  todoLogo: {
    ...generals.logoHorizontal,
    "& h3": {
      fontSize: sizes.mediumFont,
    },
  },
  hiUser: {
    alignSelf: "center",
    justifySelf: "center",
  },
  todoComplete: {
    "& div.todoCounter": {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      height: "100%",
      justifyContent: "center",
      padding: "0 25px",
      "& p": {
        fontSize: sizes.smallFont,
      },
      "& .bar": {
        height: "2vh",
        border: "1.5px solid white",
        borderRadius: "1.2vh",
      },
      "& .progress": {
        transition: "1s",
        height: "2vh",
        backgroundColor: ({ theme }) => theme.primaryColor,
        borderRadius: "1vh",
      },
    },
  },
});
