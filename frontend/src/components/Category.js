import React, {useState} from "react";
import styles from "../styles/Category/Category.module.css";
import { useNavigate } from "react-router-dom";

const Category = () => {
    //초기 상태를 0(첫 번째 버튼 '다이어리' 활성화)로 설정
    const [activeButton, setActiveButton] = useState(0);


    const categories = ["다이어리", "일기장", "체크리스트", "메모"];

    //버튼 클릭 시 실행될 함수
    const handleButtonClick = (index) => {
        setActiveButton(index); // 클릭된 버튼의 index를 'activeButton' 상태로 설정

        

    };

    return (
        <div className={styles.categorybox}>
            {categories.map((item, index) => (
                <button
                    key={index}
                    className={`${styles.category} ${
                    activeButton === index ? styles.active : ""
                }`}
                onClick={() => handleButtonClick(index)}
                >
                {item}
                </button>
            ))}
        </div>
  );
};

export default Category;