import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/Signup/Signup.module.css";
import { useNavigate } from "react-router-dom";
import MoryLogo from "../../assets/img/MoryLogo.png";
import LoginInputField from "../../components/LoginInputField";
import LoginButton from "../../components/LoginButton";

const Signup = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const payload = {
      id: formData.id,
      password: formData.password,
      name: formData.name,
      phone_number: formData.phone_number,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/users/signup", payload);
      alert("회원가입 성공!");

      navigate("/login");
    } catch (error) {
      console.error("❌ 회원가입 실패:", error.response || error);
      alert("회원가입 실패!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <img src={MoryLogo} alt="Mory Logo" className={styles.logo} />

        <div className={styles.inputWithButton}>
          <input
            type="text"
            name="id"
            placeholder=" 아이디"
            className={styles.inputField}
            onChange={handleChange}
          />
          <button className={styles.checkButton}>중복확인</button>
        </div>

        <LoginInputField
          type="password"
          placeholder=" 비밀번호"
          name="password"
          onChange={handleChange}
        />
        <LoginInputField
          type="password"
          placeholder=" 비밀번호 확인"
          name="confirmPassword"
          onChange={handleChange}
        />
        <LoginInputField
          type="text"
          placeholder=" 이름"
          name="name"
          onChange={handleChange}
        />
        <LoginInputField
          type="text"
          placeholder=" 전화번호"
          name="phone_number"
          onChange={handleChange}
        />

        <div onClick={handleSignup}>
          <LoginButton text="회원가입" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
