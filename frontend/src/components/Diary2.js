import React, { useEffect } from "react";
import styles from "../styles/Diary/Diary2.module.css";
import MoryLogo from "../assets/img/MoryLogo.png";
import { Link } from "react-router-dom";

const Diary2 = ({ children, selectedTheme }) => {
  // 🔥 테마 변경 시 body의 backgroundColor 업데이트
    useEffect(() => {
      document.body.style.backgroundColor = selectedTheme[0]; // 첫 번째 색상을 배경으로 설정
    }, [selectedTheme]); // selectedTheme이 변경될 때마다 실행
  

  return (
    <div
      className={styles.diary}
      style={{
        "--primary-color": selectedTheme[0], // 배경 & 헤더 색상
        "--secondary-color": selectedTheme[1], // backgroundbox & 카테고리 활성화 배경
        "--category-color": selectedTheme[2], // 카테고리 색상
      }}
    >
      <header className={styles.header}>
        <img src={MoryLogo} alt="Mory Logo" className={styles.logo} />
        <div className={styles.buttonContainer}>
          <Link to="/mypage">
            <button className={styles.mypagebtn}>마이페이지</button>
          </Link>
          <h3 className={styles.seperate}>|</h3>
          <button className={styles.logoutbtn}>로그아웃</button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.backgroundbox}>
          <div className={styles.dottedbox}>
            <div className={styles.box}>{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diary2;
