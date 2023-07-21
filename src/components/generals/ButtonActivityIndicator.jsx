import React from "react";
import { MdClose, MdDone } from "react-icons/md";
import { ActivityIndicator } from "../Login/ActivityIndicator";

export const ButtonIndicator = ({
  className,
  text = "",
  onClick,
  loading = false,
  status = false,
  type = 'button'
}) => {
  return (
    <button
    type={type}
      disabled={loading}
      onClick={onClick}
      className={className}
    >
      {!loading && !status ? (
        `${text}`
      ) : loading ? (
        <ActivityIndicator />
      ) : !loading && status === 404 ? (
        <MdClose />
      ) : (
        !loading && status === 200 && <MdDone />
      )}
    </button>
  );
};
