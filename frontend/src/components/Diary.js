import React from "react";
import styles from "../styles/Diary/Diary.module.css";
import MoryLogo from "../assets/img/MoryLogo.png";
import SpringIcon from "../assets/img/spring.png"; 
import Category from "../components/Category";


const Diary = () => {
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
        <div className={styles.contentContainer}>
          <div className={styles.springContainer}>
            <img src={SpringIcon} alt="Spring" className={styles.springIcon} />
            <img src={SpringIcon} alt="Spring" className={styles.springIcon} />
          </div>

          <div className={styles.backgroundbox}>
            <div className={styles.dottedbox}>
              <div className={styles.box}></div>
            </div>
          </div>
          <div className={styles.backgroundbox}>
            <div className={styles.dottedbox}>
              <div className={styles.box}></div>
            </div>
          </div>
        </div>

        <Category />

      </main>
    </div>
  );
};

export default Diary;
