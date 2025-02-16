import React, { useState } from "react";
import styles from "../../styles/Journal/Journal.module.css";
import Diary from "../../components/Diary";
import sunnyIcon from "../../assets/img/sunny.png";
import rainyIcon from "../../assets/img/rainy.png";
import snowyIcon from "../../assets/img/snowy.png";
import windyIcon from "../../assets/img/windy.png";
import cloudyIcon from "../../assets/img/cloudy.png";


const Journal = () => {
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [text, setText] = useState("");

  const handleWeatherClick = (weather) => {
    setSelectedWeather(weather);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };


  return (
    <Diary>
      <div className={styles.rightPage}>
        <div className={styles.weatherSection}>
          <div className={styles.dateContainer}>
            <input type="text" className={styles.dateInput} maxLength="4" placeholder="YYYY" />
            <span>년</span>
            <input type="text" className={styles.dateInput} maxLength="2" placeholder="MM" />
            <span>월</span>
            <input type="text" className={styles.dateInput} maxLength="2" placeholder="DD" />
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
          <input type="text" className={styles.inputField} />
          <button className={styles.submitButton}>작성</button>
        </div>
        <div className={styles.contentBox}>
          
        </div>
        <div className={styles.textBox}>
          <textarea
            className={styles.textArea}
            value={text}
            onChange={handleTextChange}
          />
        </div>
      </div>
    </Diary>
  );
};

export default Journal;
