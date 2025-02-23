import React, { useState } from "react";
import Diary2 from "../../components/Diary2"; // Diary2 컴포넌트 가져오기
import styles from "../../styles/Mypage/Mypage.module.css"; // 새로운 스타일을 추가할 경우 필요

const Mypage = () => {  // ✅ 대문자로 변경
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

  const themes = [
    ["#EEF4F6","#D3E2E9","#84AABC"], //하늘
    ["#F1F2F9","#E5E6F2","#C0C6DC"], //보라
    ["#FBF3F3","#EFDBDC","#E3AFB0"], //분홍
    ["#FFFCF3","#F7F1E1","#F2E6C3"], //노랑
    ["#FBFFF4","#E6F0D7","#BBCEA8"] //연두
  ];

  return (
    <Diary2>
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
          <div className={styles.formbox}>
            {themes.map((theme, index) => (
              <div key={index} className={styles.formGroup}>
                {theme.map((color, idx) => (
                  <div
                    key={idx}
                    className={styles.colorCircle}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Diary2>
  );
};

export default Mypage; // ✅ export도 대문자로 시작하는 Mypage 유지

