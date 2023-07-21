import React from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoSearch({ className }) {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className={className}
      placeholder="Search To Do"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}
