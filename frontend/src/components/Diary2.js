import React, {useState} from  "react";
import styles from "../styles/Diary/Diary2.module.css";
import MoryLogo from "../assets/img/MoryLogo.png";


const Diary = () => {
  const [name, setName] = useState("홍길동");
  const [phone, setPhone] = useState("010-1234-5678");

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 남김
    if (value.length > 3 && value.length <= 7) {
      value = value.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    } else if (value.length > 7) {
      value = value.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
    }
    setPhone(value);
  };


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
                <h2 className={styles.title}>마이페이지</h2>
                <div className={styles.mypageBox}>
                  <div className={styles.box1}>
                    <div className={styles.title2}>
                      <h3>내 정보</h3>
                      <button className={styles.saveBtn}>저장</button>
                    </div>
                  
                    <div className={styles.formGroup}>
                    
                      <div className={styles.inputRow}>
                        <h3>아이디</h3>
                        <input type="text" id="id" value="happy" readOnly />
                      </div>
                      <div className={styles.inputRow}>
                        <h3>비밀번호</h3>
                        <input type="password" id="password" value="********" readOnly />
                      </div>
                      <div className={styles.inputRow}>
                        <h3>이름</h3>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div className={styles.inputRow}>
                        <h3>전화번호</h3>
                        <input type="text" id="phone" value={phone} onChange={handlePhoneChange} maxLength="13"/>
                      </div>
                      <div className={styles.member}>
                        <button className={styles.memberBtn}>회원탈퇴</button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.box2}>
                    <div className={styles.title2}>
                        <h3>테마변경</h3>
                        <button className={styles.saveBtn}>저장</button>
                      </div>
                    
                      <div className={styles.formGroup}>
                      
                      

                      </div>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    
      </main>
    </div>
  );
};

export default Diary;
