import React from "react";
import styles from "../../styles/Signup/Signup.module.css";
import MoryLogo from "../../assets/img/MoryLogo.png";
import LoginInputField from "../../components/LoginInputField"; 
import LoginButton from "../../components/LoginButton"; 

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <img src={MoryLogo} alt="Mory Logo" className={styles.logo} />


        <div className={styles.inputWithButton}>
          <input type="text" placeholder=" 아이디" className={styles.inputField} />
          <button className={styles.checkButton}>중복확인</button>
        </div>

        <LoginInputField type="password" placeholder=" 비밀번호" />
        <LoginInputField type="password" placeholder=" 비밀번호 확인" />
        <LoginInputField type="text" placeholder=" 이름" />
        <LoginInputField type="text" placeholder=" 전화번호" />

        <LoginButton text="회원가입" />
      </div>
    </div>
  );
};

export default Signup;
