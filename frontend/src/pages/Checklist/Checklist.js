import React, { useState, useEffect } from "react";
import axios from "axios";  
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

  const userId = 1; // 임시로 userId=1로 고정 (나중에 로그인 기능 붙으면 수정)

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [selectedMonth, setSelectedMonth] = useState("Jan.");
  const [yearlyTasks, setYearlyTasks] = useState(
    months.reduce((acc, month) => ({ ...acc, [month]: [] }), {})
  );
  const [yearlyNewTask, setYearlyNewTask] = useState("");

  // 🟢 1. 오늘의 체크리스트 불러오기 (rightChildren)
useEffect(() => {
  const fetchTodayTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/checklists/today`, {
        params: {
          userId: userId,
          today: today,
        }
      });
      const fetchedTasks = response.data.map(item => ({
        id: item.checklistId,
        text: item.cContent,
        checked: item.isCompleted,
      }));
      setTasks(fetchedTasks);
      console.log("오늘 체크리스트 불러오기 성공:", fetchedTasks);
    } catch (error) {
      console.error("오늘 체크리스트 불러오기 실패", error);
    }
  };

  fetchTodayTasks();
}, [userId, today]);

useEffect(() => {
  const fetchAllYearlyTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/checklists/yearly", {
        params: { userId: userId }
      });

      // 응답 데이터를 월별로 정리
      const monthlyMap = months.reduce((acc, month) => {
        acc[month] = [];
        return acc;
      }, {});

      response.data.forEach(item => {
        const monthNumber = item.cMonth.split("-")[1]; // "2025-03" → "03"
        const monthIndex = parseInt(monthNumber, 10) - 1;
        const monthKey = months[monthIndex];

        monthlyMap[monthKey].push({
          id: item.checklistId,
          text: item.cContent,
          checked: item.isCompleted,
        });
      });

      setYearlyTasks(monthlyMap);
      console.log("전체 연간 체크리스트 불러오기 성공:", monthlyMap);
    } catch (error) {
      console.error("전체 연간 체크리스트 불러오기 실패", error);
    }
  };

  fetchAllYearlyTasks();
}, []);



  const handleToggle = async (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  
    const toggledTask = updatedTasks.find(task => task.id === id);
  
    try {
      await axios.put(`http://localhost:8080/api/checklists/${id}`, {
        isCompleted: toggledTask.checked,
      });
      console.log("Checklist 상태 업데이트 성공");
    } catch (error) {
      console.error("Checklist 상태 업데이트 실패", error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/checklists/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
      console.log("Checklist 삭제 성공");
    } catch (error) {
      console.error("Checklist 삭제 실패", error);
    }
  };
  
  const handleAddTask = async () => {
    if (newTask.trim()) {
      console.log("입력된 newTask: ", newTask); 

      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        checked: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");

      try {
        const monthString = today.slice(0, 7); 

        await axios.post("http://localhost:8080/api/checklists", {
          userId: userId,
          cDate: today,
          cMonth: monthString,
          cContent: newTask,
          isCompleted: false,
        });

        console.log("Checklist 저장 성공");
      } catch (error) {
        console.error("Checklist 저장 실패", error);
      }
    }
  };

  const handleYearlyAddTask = async () => {
    if (yearlyNewTask.trim()) {
      const updatedTasks = [
        ...yearlyTasks[selectedMonth],
        { id: Date.now(), text: yearlyNewTask, checked: false }
      ];
      setYearlyTasks(prev => ({
        ...prev,
        [selectedMonth]: updatedTasks
      }));
      setYearlyNewTask("");
  
      const monthIndex = months.indexOf(selectedMonth) + 1;
      const formattedMonth = `2025-${monthIndex.toString().padStart(2, "0")}`;
  
      try {
        await axios.post("http://localhost:8080/api/checklists/monthly", {
          userId: userId,
          cMonth: formattedMonth,
          cContent: yearlyNewTask,
          isCompleted: false,
        });
        console.log("연간 체크리스트 저장 성공:", formattedMonth);
      } catch (error) {
        console.error("연간 체크리스트 저장 실패", error);
      }
    }
  };
  
  

  const handleYearlyToggle = async (month, id) => {
    const updatedTasks = yearlyTasks[month].map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
  
    setYearlyTasks(prev => ({
      ...prev,
      [month]: updatedTasks
    }));
  
    const toggledTask = updatedTasks.find(task => task.id === id);
  
    try {
      await axios.put(`http://localhost:8080/api/checklists/${id}`, {
        isCompleted: toggledTask.checked
      });
  
      console.log(`연간 체크리스트 상태 업데이트 성공 (ID: ${id}, 상태: ${toggledTask.checked})`);
    } catch (error) {
      console.error("연간 체크리스트 상태 업데이트 실패", error);
    }
  };
  

  const handleYearlyDelete = async (month, id) => {
    try {
      await axios.delete(`http://localhost:8080/api/checklists/${id}`);
  
      setYearlyTasks(prev => ({
        ...prev,
        [month]: prev[month].filter(task => task.id !== id)
      }));
  
      console.log("연간 체크리스트 삭제 성공 (ID: " + id + ")");
    } catch (error) {
      console.error("연간 체크리스트 삭제 실패", error);
    }
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
