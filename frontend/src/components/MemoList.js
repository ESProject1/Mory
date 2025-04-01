import React, { useState } from "react";
import styles from "../styles/Memo/MemoList.module.css";

const MemoList = ({ onSelectMemo }) => {
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [checkedItems, setCheckedItems] = useState({}); // 각 항목 체크 상태 저장

  const memos = [
    {
      date: "2025.01.01",
      items: ["면접 질문 정리", "면접 예상 질문"],
    },
    {
      date: "2025.01.02",
      items: ["면접 질문 정리", "면접 예상 질문"],
    },
  ];

  // 전체 항목 리스트 만들기
  const allItems = memos.flatMap((memo) =>
    memo.items.map((item) => `${memo.date}-${item}`)
  );

  const isAllChecked = allItems.every((key) => checkedItems[key]);

  const toggleAll = () => {
    const newChecked = {};
    if (!isAllChecked) {
      allItems.forEach((key) => {
        newChecked[key] = true;
      });
    }
    setCheckedItems(isAllChecked ? {} : newChecked);
  };

  const toggleItem = (date, item) => {
    const key = `${date}-${item}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleClick = (memo, item) => {
    const selected = { date: memo.date, content: item };

    if (
      selectedMemo &&
      selectedMemo.date === selected.date &&
      selectedMemo.content === selected.content
    ) {
      setSelectedMemo(null);
      onSelectMemo(null);
    } else {
      setSelectedMemo(selected);
      onSelectMemo(selected);
    }
  };

  return (
    <div className={styles.listform}>
      {/* ✅ 전체 선택 체크박스 */}
      <div className={styles.selectAllWrapper}>
        <label className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isAllChecked}
            onChange={toggleAll}
          />
          <span className={styles.imageCheck}></span>
        </label>
        <span className={styles.selectAllText}></span>
      </div>

      {memos.map((memo, idx) => (
        <div key={idx} className={styles.list}>
          <div className={styles.date}>{memo.date}</div>
          {memo.items.map((item, itemIdx) => {
            const isSelected =
              selectedMemo &&
              selectedMemo.date === memo.date &&
              selectedMemo.content === item;

            const itemKey = `${memo.date}-${item}`;
            const isChecked = !!checkedItems[itemKey];

            return (
              <div key={itemIdx} className={styles.contentck}>
                <div
                  className={`${styles.content} ${isSelected ? styles.selected : ""}`}
                  onClick={() => handleClick(memo, item)}
                >
                  {item}
                </div>
                <label className={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isChecked}
                    onChange={() => toggleItem(memo.date, item)}
                  />
                  <span className={styles.imageCheck}></span>
                </label>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MemoList;
