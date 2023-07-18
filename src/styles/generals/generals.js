import * as sizes from "../../constants/sizes";

export const button = {
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
};

export const buttonOutlined = {
    background: "transparent",
    color: "white",
    border: "1px solid white",
}

export const input = {
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
};

export const p = {
  fontSize: sizes.mediumFont,
  fontWeight: "200",
  alignSelf: "center",
  textAlign: "center",
};
