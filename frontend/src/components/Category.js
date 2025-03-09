import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Category/Category.module.css";

const Category = () => {
    const location = useLocation(); // 현재 URL 가져오기
    const navigate = useNavigate(); // 페이지 이동 함수
    const categories = [
        { name: "다이어리", path: "/Diary" },
        { name: "일기장", path: "/journal" }, // 예시 경로
        { name: "체크리스트", path: "/Checklist" },
        { name: "메모", path: "/Memo" }
    ];

    // URL에 따라 초기 활성 버튼 설정
    const getInitialActiveButton = () => {
        const currentCategoryIndex = categories.findIndex(cat => cat.path === location.pathname);
        return currentCategoryIndex !== -1 ? currentCategoryIndex : 0;
    };

    const [activeButton, setActiveButton] = useState(getInitialActiveButton());

    useEffect(() => {
        setActiveButton(getInitialActiveButton()); // URL 변경 시 활성화 버튼 업데이트
    }, [location.pathname]);

    const handleButtonClick = (index) => {
        setActiveButton(index);
        navigate(categories[index].path); // 해당 링크로 이동
    };

    return (
        <div className={styles.categorybox}>
            {categories.map((item, index) => (
                <button
                    key={index}
                    className={`${styles.category} ${activeButton === index ? styles.active : ""}`}
                    onClick={() => handleButtonClick(index)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
};

export default Category;
