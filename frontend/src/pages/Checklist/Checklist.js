import React, { useState } from "react";
import styles from "../../styles/Checklist/Checklist.module.css";
import Diary from "../../components/Diary";
import todayCheck from "../../assets/img/todaycheck.png";
import chkeIcon from "../../assets/img/chke.png";
import chkpIcon from "../../assets/img/chkp.png";
import checkDel from "../../assets/img/checkdel.png";
import yearCheck from "../../assets/img/yearcheck.png";

const months = [
  "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
  "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
];

const Checklist = () => {
  const today = new Date().toISOString().split("T")[0];
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = days[new Date().getDay()];

  const [tasks, setTasks] = useState([
    { id: 1, text: "운동 다녀오기", checked: false },
    { id: 2, text: "스프링 부트 3 공부하기 !!!!!!!!!", checked: false },
    { id: 3, text: "스터디카페 가기 ㅠㅠ", checked: true },
    { id: 4, text: "잠 일찍 자기……zzz", checked: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const [selectedMonth, setSelectedMonth] = useState("Jan.");
  const [yearlyTasks, setYearlyTasks] = useState(
    months.reduce((acc, month) => ({ ...acc, [month]: [] }), {})
  );
  const [yearlyNewTask, setYearlyNewTask] = useState("");

  const handleToggle = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, checked: false }]);
      setNewTask("");
    }
  };

  const handleYearlyAddTask = () => {
    if (yearlyNewTask.trim()) {
      setYearlyTasks(prev => ({
        ...prev,
        [selectedMonth]: [
          ...prev[selectedMonth],
          { id: Date.now(), text: yearlyNewTask, checked: false }
        ]
      }));
      setYearlyNewTask("");
    }
  };

  const handleYearlyToggle = (month, id) => {
    setYearlyTasks(prev => ({
      ...prev,
      [month]: prev[month].map(task =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    }));
  };

  const handleYearlyDelete = (month, id) => {
    setYearlyTasks(prev => ({
      ...prev,
      [month]: prev[month].filter(task => task.id !== id)
    }));
  };

  return (
    <Diary
      leftChildren={
        <div className={styles.leftPage}>
          <div className={styles.yearChecklist}>
            <div className={styles.yearHeader}>
              <span className={styles.yearTitle}>2025년 체크리스트</span>
              <img src={yearCheck} className={styles.yearIcon} alt="year check icon" />
            </div>
            <div className={styles.yearGrid}>
              {months.map((month) => (
                <div
                  key={month}
                  className={`${styles.monthBlock} ${selectedMonth === month ? styles.selectedMonth : ""}`}
                  onClick={() => setSelectedMonth(month)}
                >
                  <span className={styles.monthTitle}>{month}</span>
                  <ul className={styles.monthList}>
                    {yearlyTasks[month].map(task => (
                      <li key={task.id} className={styles.taskItem}>
                        <img
                          src={task.checked ? chkpIcon : chkeIcon}
                          className={styles.checkIcon}
                          onClick={() => handleYearlyToggle(month, task.id)}
                          alt="checkbox icon"
                        />
                        <span className={task.checked ? styles.checkedText : ""}>{task.text}</span>
                        <img
                          src={checkDel}
                          className={styles.deleteIcon}
                          onClick={() => handleYearlyDelete(month, task.id)}
                          alt="delete icon"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.yearInputContainer}>
              <input
                type="text"
                placeholder="올해의 체크리스트를 작성해주세요 ~ !"
                value={yearlyNewTask}
                onChange={(e) => setYearlyNewTask(e.target.value)}
              />
              <button onClick={handleYearlyAddTask}>등록</button>
            </div>
          </div>
        </div>
      }
      rightChildren={
        <div className={styles.rightPage}>
          <div className={styles.header}>
            <div className={styles.titleContainer}>
              <span className={styles.title}>TODAY 체크리스트</span>
              <img src={todayCheck} className={styles.smileIcon} alt="smile icon" />
            </div>
            <span className={styles.date}>{today} ({dayOfWeek})</span>
          </div>
          <ul className={styles.list}>
            {tasks.map(task => (
              <li key={task.id} className={styles.taskItem}>
                <img 
                  src={task.checked ? chkpIcon : chkeIcon} 
                  className={styles.checkIcon}
                  onClick={() => handleToggle(task.id)}
                  alt="checkbox icon"
                />
                <span className={task.checked ? styles.checkedText : ""}>{task.text}</span>
                <img 
                  src={checkDel} 
                  className={styles.deleteIcon}
                  onClick={() => handleDelete(task.id)}
                  alt="delete icon"
                />
              </li>
            ))}
          </ul>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="오늘의 체크리스트를 작성해주세요 ~ !"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>등록</button>
          </div>
        </div>
      }
    />
  );
};

export default Checklist;
