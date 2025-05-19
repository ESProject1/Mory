import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/Journal/Journal.module.css";
import Diary from "../../components/Diary";
import sunnyIcon from "../../assets/img/sunny.png";
import rainyIcon from "../../assets/img/rainy.png";
import snowyIcon from "../../assets/img/snowy.png";
import windyIcon from "../../assets/img/windy.png";
import cloudyIcon from "../../assets/img/cloudy.png";
import chkeIcon from "../../assets/img/chke.png";
import chkpIcon from "../../assets/img/chkp.png";
import imgaddIcon from "../../assets/img/Imgadd.png";


const weatherMap = {
  sunny: "맑음",
  cloudy: "흐림",
  rainy: "비",
  windy: "바람",
  snowy: "눈",
};

const Journal = () => {
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [checkedItems, setCheckedItems] = useState({});

  const journalEntries = {
    2025: [],
    2024: [
      { date: "2024-11-12 (화)", weather: rainyIcon, title: "비오는 날", content: "오늘의 날씨는 매우매우 구림!" }
    ],
    2023: [
      { date: "2023-06-15 (목)", weather: sunnyIcon, title: "햇살 좋은 날", content: "햇살이 눈부신 날이었다." }
    ],
    2022: [
      { date: "2022-01-20 (금)", weather: snowyIcon, title: "눈 내리는 날", content: "눈이 내려서 정말 예뻤다!" }
    ],
  };

  const handleWeatherClick = (weather) => {
    setSelectedWeather((prev) => (prev === weather ? null : weather));
  };

  const handleCheckClick = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!year || !month || !day) {
      alert("날짜를 정확히 입력해주세요.");
      return;
    }
  
    const j_date = `${year.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    const weather = weatherMap[selectedWeather] || null;
  
    console.log("전송 데이터", {
      userId: 1,
      jDate: j_date,
      weather,
      jTitle: title,
      jContent: text,
    });
  
    try {
      await axios.post("http://localhost:8080/api/journal", {
        userId: 1,
        jDate: j_date,
        weather,
        jTitle: title,
        jContent: text,
      });
      alert("일기가 저장되었습니다.");
      setYear("");
      setMonth("");
      setDay("");
      setSelectedWeather(null);
      setTitle("");
      setText("");
      setImagePreview(null);
    } catch (err) {
      console.error("저장 실패:", err);
      alert("일기 저장 실패");
    }
  };
  

  return (
    <Diary
      leftChildren={
        <div className={styles.leftPage}>
          <div className={styles.yearSelector}>
            {Object.keys(journalEntries).map((year) => (
              <button
                key={year}
                className={year == selectedYear ? styles.selectedYear : ""}
                onClick={() => setSelectedYear(Number(year))}
              >
                {year}년
              </button>
            ))}
            <button className={styles.deleteButton}>삭제</button>
          </div>

          <div className={styles.diaryTableContainer}>
            <table className={styles.diaryTable}>
              <thead>
                <tr>
                  <th className={styles.checkBoxHeader}></th>
                  <th className={styles.diaryHeader}>목록</th>
                </tr>
              </thead>
              <tbody>
                {journalEntries[selectedYear].length > 0 ? (
                  journalEntries[selectedYear].map((entry, index) => (
                    <tr key={index}>
                      <td className={styles.checkBoxCell} onClick={() => handleCheckClick(index)}>
                        <img
                          src={checkedItems[index] ? chkpIcon : chkeIcon}
                          alt="Check"
                          className={styles.checkIcon}
                        />
                      </td>
                      <td className={styles.entryRow}>
                        <div className={styles.entryDateWeather}>
                          <span>{entry.date}</span>
                          <img src={entry.weather} alt="Weather" className={styles.weatherIconSmall} />
                          <div className={styles.entryTitleWrapper}>
                            <div className={styles.entryTitle}>{entry.title}</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className={styles.noEntries}>작성된 일기가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      }

      rightChildren={
        <div className={styles.rightPage}>
          <div className={styles.weatherSection}>
            <div className={styles.dateContainer}>
              <input type="text" className={styles.dateInput} maxLength="4" placeholder="YYYY" value={year} onChange={(e) => setYear(e.target.value)} />
              <span>년</span>
              <input type="text" className={styles.dateInput} maxLength="2" placeholder="MM" value={month} onChange={(e) => setMonth(e.target.value)} />
              <span>월</span>
              <input type="text" className={styles.dateInput} maxLength="2" placeholder="DD" value={day} onChange={(e) => setDay(e.target.value)} />
              <span>일</span>
            </div>

            <span className={styles.weatherLabel}>날씨:</span>
            <div className={styles.weatherIcons}>
              <img src={sunnyIcon} alt="Sunny" className={`${styles.weatherIcon} ${selectedWeather === 'sunny' ? styles.selected : ''}`} onClick={() => handleWeatherClick('sunny')} />
              <img src={cloudyIcon} alt="Cloudy" className={`${styles.weatherIcon} ${selectedWeather === 'cloudy' ? styles.selected : ''}`} onClick={() => handleWeatherClick('cloudy')} />
              <img src={rainyIcon} alt="Rainy" className={`${styles.weatherIcon} ${selectedWeather === 'rainy' ? styles.selected : ''}`} onClick={() => handleWeatherClick('rainy')} />
              <img src={windyIcon} alt="Windy" className={`${styles.weatherIcon} ${selectedWeather === 'windy' ? styles.selected : ''}`} onClick={() => handleWeatherClick('windy')} />
              <img src={snowyIcon} alt="Snowy" className={`${styles.weatherIcon} ${selectedWeather === 'snowy' ? styles.selected : ''}`} onClick={() => handleWeatherClick('snowy')} />
            </div>
          </div>

          <div className={styles.titleInput}>
            <span>제목 :</span>
            <input type="text" className={styles.inputField} value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className={styles.submitButton} onClick={handleSubmit}>작성</button>
          </div>

          <div className={styles.contentBox}>
            {imagePreview && <img src={imagePreview} alt="Preview" className={styles.imagePreview} />}
            <label className={styles.imageUploadLabel}>
              <input type="file" accept="image/*" onChange={handleImageUpload} className={styles.imageUploadInput} />
              <img src={imgaddIcon} alt="Add" className={styles.imgAddIcon} />
            </label>
          </div>

          <div className={styles.textBox}>
            <textarea className={styles.textArea} value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
      }
    />
  );
};

export default Journal;
