import React, { useState } from "react";
import styles from "../../styles/Memo/Memo.module.css";
import Diary from "../../components/Diary";
import MemoWriteForm from "../../components/MemoWriteForm";
import MemoList from "../../components/MemoList";
import MemoContent from "../../components/MemoContent"; // 새로 만든 컴포넌트

const Memo = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedMemo, setSelectedMemo] = useState(null);

  const handleAddClick = () => {
    setShowForm(true);
    setSelectedMemo(null); // 새로 작성 시 선택된 메모 초기화
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSelectMemo = (memo) => {
    setSelectedMemo(memo);
    setShowForm(false); // 기존 작성폼 숨기기
  };

  return (
    <Diary
      leftChildren={
        <div className={styles.leftPage}>
          <div className={styles.memoHeader}>
            <span className={styles.title}>메모장</span>
            <div className={styles.buttonGroup}>
              <button className={styles.button} onClick={handleAddClick}>
                추가
              </button>
              <button className={styles.button}>삭제</button>
            </div>
          </div>
          <div className={styles.listWrapper}>
            <MemoList onSelectMemo={handleSelectMemo} />
          </div>
        </div>
      }
      rightChildren={
        <div className={styles.rightPage}>
          {showForm && <MemoWriteForm onCancel={handleCancel} />}
          {selectedMemo && <MemoContent memo={selectedMemo} />}
        </div>
      }
    />
  );
};

export default Memo;
