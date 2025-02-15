import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.js';
import Diary2 from './components/Diary2.js';
import Diary from './components/Diary.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Diary />
    <Diary2 />
  </React.StrictMode>
);

reportWebVitals();
