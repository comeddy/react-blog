/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, changeTitle] = useState(['남자 코트 추천','강남 고기 맛집', '파이썬독학']);

  return (
    <div className="App">
      <div className="black-nav">
        <div> Dev Blog</div>
      </div>
      <div className="list">
        <h3>{ title[0] } <span></span>1</h3>
        <p>7월 10일 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>7월 10일 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>7월 10일 발행 </p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
