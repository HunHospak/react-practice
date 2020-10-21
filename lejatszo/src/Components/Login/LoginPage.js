import React from "react";
import auth from "../Auth/auth";

export const LoginPage = (props) => {
  return (
    <div>
      <h1>Landing Page</h1>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/home");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
