import React from "react";
import styles from "../styles/Login/LoginInputField.module.css";

const LoginInputField = ({ type, placeholder, name, onChange }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      name={name}         
      onChange={onChange}  
    />
  );
};

export default LoginInputField;
