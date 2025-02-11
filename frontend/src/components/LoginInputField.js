import React from "react";
import styles from "../styles/Login/LoginInputField.module.css";

const LoginInputField = ({ type, placeholder }) => {
  return <input className={styles.input} type={type} placeholder={placeholder} />;
};

export default LoginInputField;
