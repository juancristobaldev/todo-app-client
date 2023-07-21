import React, { useEffect, useState } from "react";

const getDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState(getDimensions());

  useEffect(() => {
    const updateDimension = () => {
      setDimensions(getDimensions());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [dimensions]);

  return { dimensions };
};
