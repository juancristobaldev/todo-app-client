import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export const useDate = () => {
  const daysWeek = 5;

  const [state, setState] = useState({
    beginDay: 0,
    totalDays: daysWeek,
  });

  const format = (date) => ({
    numeric: date.toFormat("dd-MM-yyyy"),
    alt: { day: date.toFormat("dd"), month: date.toFormat("MMM") },
  });

  const { beginDay, totalDays } = state;

  const [orientation, setOrientation] = useState("right");

  const today = DateTime.local();

  const todayFormats = {
    numeric: format(today).numeric,
    alt: format(today).alt,
  };

  const getBeginWeek = (date) => date.startOf("week");

  const actualBeginWeek = getBeginWeek(today);

  const getWeek = () => {
    const dates = [];

    if (orientation === "right") {
      for (var i = beginDay; i < totalDays; i++) {
        const date = actualBeginWeek.plus({ days: i });

        dates.push(format(date));
      }
    } else {
      for (var i = beginDay; i > totalDays; i--) {
        console.log(i);
      }
    }

    return dates;
  };

  const nextWeek = () => {
    setState({
      beginDay: state.beginDay + daysWeek,
      totalDays: state.totalDays + daysWeek,
    });
  };

  const beforeWeek = () => {
    setState({
      beginDay: state.beginDay - daysWeek,
      totalDays: state.totalDays - daysWeek,
    });
  };

  return {
    nextWeek,
    beforeWeek,
    getWeek,
    state,
    setState,
    todayFormats,
  };
};
