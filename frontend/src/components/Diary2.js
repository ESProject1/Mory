import React from "react";
import styles from "../styles/Diary/Diary2.module.css";
import MoryLogo from "../assets/img/MoryLogo.png";

const Diary2 = ({ children }) => {  // ✅ children (소문자로 작성)


  return (
    <div>
      <header className={styles.header}>
        <img src={MoryLogo} alt="Mory Logo" className={styles.logo} />

        {/* 버튼 컨테이너 */}
        <div className={styles.buttonContainer}>
          <button className={styles.mypagebtn}>마이페이지</button>
          <h3 className={styles.seperate}>|</h3>
          <button className={styles.logoutbtn}>로그아웃</button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.backgroundbox}>
          <div className={styles.dottedbox}>
            <div className={styles.box}>
              {/* ✅ mypage.js에서 전달된 내용을 여기에 렌더링 */}
              {children ? children : <p style={{ color: "red" }}>⚠️ children이 전달되지 않았습니다!</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diary2;
