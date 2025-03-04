import React from "react";
import styles from "../../styles/Memo/Memo.module.css";
import Diary from "../../components/Diary";


const Memo = () => {

  return (
    <Diary
      leftChildren={
        <div className={styles.leftPage}>
        </div>
      }
      rightChildren={
        <div className={styles.rightPage}>
          
        </div>
      }
    >
    </Diary>
  );
};

export default Memo;
