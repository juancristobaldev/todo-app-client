import { React } from "react";

import { FaCheck } from "react-icons/fa";

export default function CheckBox(props) {
  return (
    <div onClick={props.onClick} className={props.className}>
      <div
        className={props.completed ? "checkBoxOn" : "checkBoxOff"}
      >
        {props.completed && <FaCheck fill="white" />}
      </div>
    </div>
  );
}