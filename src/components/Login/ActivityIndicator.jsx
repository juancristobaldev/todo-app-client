import React from "react";

import { Dots } from "react-activity";
import "react-activity/dist/library.css";

export const ActivityIndicator = ({ size }) => {
  return <Dots className="dotsIndicator" size={size} />;
};
