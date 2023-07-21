import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator } from "./ActivityIndicator";
import { MdDone, MdClose } from "react-icons/md";
import { ButtonIndicator } from "../generals/ButtonActivityIndicator";

export const ContinueGoogle = ({ className }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const handleLogin = async () => {
    await setLoading(true);

    const popup = window.open(
      "http://localhost:3001/auth/google",
      "targetWindow",
      `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=420,height=700`
    );

    window.addEventListener("message", async (event) => {
      console.log("message");
      if (event.origin === "http://localhost:3001") {
        if (event.data) {
          console.log(event.data);

          popup?.close();
          await setStatus(200);
          await setLoading(false);

          window.localStorage.setItem("token", event.data.token);
          window.location.reload();
        } else {
          await setStatus(404);
          await setLoading(false);
        }
      }
    });
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(false);
      }, 2000);
    }
  }, [status]);
  return (
    <ButtonIndicator
      loading={loading}
      text={"Continue with Google"}
      onClick={() => handleLogin()}
      status={status}
      className={className}
    />
  );
};
