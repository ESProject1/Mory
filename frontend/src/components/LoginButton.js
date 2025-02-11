import React from "react";
import styles from "../styles/Login/LoginButton.module.css";

const LoginButton = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default LoginButton;
