import React, { useEffect, useState } from "react";
import { useDate } from "../hooks/useDate";
import { useDimensions } from "../hooks/useDimensions";

export const Weeks = ({ className }) => {
  const { getWeek, todayFormats, nextWeek, beforeWeek } = useDate();

  console.log(todayFormats);

  return (
    <div className={className}>
      <button onClick={() => beforeWeek()}>{"<"}</button>
      {getWeek().map((date) => (
        <div className={`day ${date.numeric === todayFormats.numeric && 'here'}`}>
          <p>
            {date.alt.day}
            <br />
            {date.alt.month}
          </p>
        </div>
      ))}
      <button onClick={() => nextWeek()}>{">"}</button>
    </div>
  );
};
