import React from 'react';
import './App.css'; // CSS 스타일 가져오기

const App = () => {
  return (
    <div>
      <p style={{ fontWeight: '100' }}>이 텍스트는 100 굵기로 표시됩니다.</p>
      <p style={{ fontWeight: '300' }}>이 텍스트는 300 굵기로 표시됩니다.</p>
      <p style={{ fontWeight: '400' }}>이 텍스트는 400 굵기로 표시됩니다.</p>
      <p style={{ fontWeight: '700' }}>이 텍스트는 700 굵기로 표시됩니다.</p>
      <p style={{ fontWeight: '900' }}>이 텍스트는 900 굵기로 표시됩니다.</p>
    </div>
  );
};

export default App;
