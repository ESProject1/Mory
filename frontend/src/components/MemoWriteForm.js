import React from "react";
import styles from "../styles/Memo/MemoWriteForm.module.css";

const MemoWriteForm = ({ onCancel }) => {
  return (
    <div className={styles.formWrapper}>
      <input
        className={styles.titleInput}
        placeholder="제목을 입력해주세요."
      />
      <textarea
        className={styles.contentInput}
        placeholder="내용을 입력해주세요."
      />
      <div className={styles.buttonRow}>
        <button className={styles.cancelButton} onClick={onCancel}>취소</button>
        <button className={styles.submitButton}>등록</button>
      </div>
    </div>
  );
};

export default MemoWriteForm;
