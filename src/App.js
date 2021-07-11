/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, changeTitle] = useState(['남자 코트 추천','강남 고기 맛집', '파이썬독학']);
  let [likeCount, changeCount] = useState(0);

  // function changeTitleName() {
  //   var newArray = [...title];
  //   newArray[0] = '여자 코트 추천';
  //   changeTitle(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div> Dev Blog</div>
      </div>
      {/* <button onClick={ changeTitleName } > 버튼 </button> */}
      <div className="list">
        <h3>{ title[0] } <span onClick={ ()=>{changeCount(likeCount +1)}}>😊</span> {likeCount}</h3>
        <p>7월 10일 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] } <span>😊</span></h3>
        <p>7월 10일 발행 </p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>7월 10일 발행 </p>
        <hr/>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="Modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
