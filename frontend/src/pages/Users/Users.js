import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]); // 기본값을 빈 배열로 설정

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("API 응답 데이터:", data); // 콘솔에서 데이터 확인
        setUsers(Array.isArray(data) ? data : []); // 배열이 아니면 빈 배열 설정
      })
      .catch((error) => console.error("API 호출 에러:", error));
  }, []);

  return (
    <div>
      <h2>테스트 유저 목록</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      ) : (
        <p>사용자 데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default Users;
