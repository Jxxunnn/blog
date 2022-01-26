/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "산본 혼밥 추천",
    "안양 맛집 추천",
  ]); // [state 데이터. state 데이터 변경 함수]

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  const 따봉함수 = (i) => {
    let 따봉copy = [...따봉];
    따봉copy[i]++;
    따봉변경(따봉copy);
  };

  function 제목바꾸기() {
    const newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    newArray.sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map(function (글, i) {
        return (
          <div className="list">
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  따봉함수(i);
                }}
              >
                😀
              </span>
              {따봉[i]}
            </h3>

            <p>2월 19일 발행</p>
            <hr />
          </div>
        );
      })}
      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        모달버튼
      </button>

      <button onClick={제목바꾸기}>버튼</button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
