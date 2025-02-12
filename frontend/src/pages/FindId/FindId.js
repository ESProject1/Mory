import React from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "../../styles/FindId/FindId.module.css";
import MoryLogo from "../../assets/img/MoryLogo.png";
import LoginInputField from "../../components/LoginInputField"; 
import LoginButton from "../../components/LoginButton"; 

const FindId = () => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.container}>
      <div className={styles.findIdBox}>
        <img src={MoryLogo} alt="Mory Logo" className={styles.logo} />

        <LoginInputField type="text" placeholder=" 이름" />


        <div className={styles.inputWithButton}>
          <input type="text" placeholder=" 전화번호" className={styles.inputField} />
          <button className={styles.checkButton}>인증번호</button>
        </div>

        <div className={styles.inputWithButton}>
          <input type="text" placeholder=" 인증번호" className={styles.inputField} />
          <button className={styles.checkButton}>재전송</button>
        </div>

        <LoginButton text="아이디 찾기" />


        <div className={styles.links}>
          <button className={styles.linkButton} onClick={() => navigate("/find-password")}>비밀번호 찾기</button> | 
          <button className={styles.linkButton} onClick={() => navigate("/")}>로그인</button> |
          <button className={styles.linkButton} onClick={() => navigate("/signup")}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default FindId;
