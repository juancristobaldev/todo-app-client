import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export const useDate = (daysSelected) => {
  const { daySelected, setDaySelected } = daysSelected;

  const format = (date) => ({
    numeric: date.toFormat("dd-MM-yyyy"),
    alt: { day: date.toFormat("dd"), month: date.toFormat("MMM") },
  });

  const today = DateTime.local();

  const todayFormats = {
    numeric: format(today).numeric,
    alt: format(today).alt,
  };

  const daysWeek = 7;

  const [state, setState] = useState({
    beginDay: 0,
    totalDays: daysWeek,
  });

  const { beginDay, totalDays } = state;

  const getBeginWeek = (date) => date.startOf("week");

  const actualBeginWeek = getBeginWeek(today);

  const getWeek = () => {
    const dates = [];

    for (var i = beginDay; i < totalDays; i++) {
      const date = actualBeginWeek.plus({ days: i });

      dates.push(format(date));
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
    daySelected,
    setDaySelected,
  };
};
