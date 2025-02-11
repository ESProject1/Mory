import React from "react";
import styles from "../../styles/Login/Login.module.css";
import MoryLogo from "../../assets/img/MoryLogo.png";
import LoginButton from "../../components/LoginButton"; 
import LoginInputField from "../../components/LoginInputField";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <img src={MoryLogo} alt="Mory Logo" className={styles.logo} />

        <div className={styles.inputContainer}>
          <LoginInputField type="text" placeholder=" 아이디" />
          <LoginInputField type="password" placeholder=" 비밀번호" />
        </div>

        <LoginButton text="로그인" />

        <div className={styles.links}>
          <button className={styles.linkButton}>아이디 찾기</button> | <button className={styles.linkButton}>비밀번호 찾기</button> | <button className={styles.linkButton}>회원가입</button>
        </div>

        <div className={styles.socialLoginWrapper}>
          <span className={styles.socialLoginText}>소셜 계정으로 간편 로그인</span>
        </div>

        <div className={styles.socialIcons}>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
