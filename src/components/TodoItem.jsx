import React from "react";
import CheckBox from "./CheckBox";
import { AiOutlineClose } from "react-icons/ai";

export default function TodoItem({
  onDelete,
  completed,
  text,
  onComplete,
  classNameCheckbox,
  className,
}) {
  return (
    <div className={`${className} ${completed && "onComplete"}`}>
      <span className="spanItem" onClick={() => onDelete()}>
        <AiOutlineClose />
      </span>
      <div className="textTodo">
        <p>{text}</p>
      </div>
      <CheckBox
        className={classNameCheckbox}
        completed={completed}
        onClick={onComplete}
      />
    </div>
  );
}
