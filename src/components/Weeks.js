import React, { useEffect, useState } from "react";
import { useDate } from "../hooks/useDate";
import { useDimensions } from "../hooks/useDimensions";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const Weeks = ({ className, daysSelected }) => {
  const { getWeek, todayFormats, nextWeek, beforeWeek } = useDate(daysSelected);

  const { daySelected, setDaySelected } = daysSelected;

  console.log(todayFormats.numeric);

  return (
    <div className={className}>
      <button className="buttonDirection" onClick={() => beforeWeek()}>
        <BiChevronLeft />
      </button>
      {getWeek().map((date) => (
        <div
          className={`day ${date.numeric === daySelected && "here"}`}
          onClick={() => setDaySelected(date.numeric)}
        >
          <p>
            {date.alt.day}
            <br />
            {date.alt.month}
          </p>
        </div>
      ))}
      <button className="buttonDirection" onClick={() => nextWeek()}>
        <BiChevronRight />
      </button>
    </div>
  );
};
