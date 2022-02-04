/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "안양 맛집 추천",
    "산본 혼밥 추천",
    "여자 코트 추천",
  ]);
  let [발행, 발행변경] = useState([
    "2월 17일 발행",
    "2월 18일 발행",
    "2월 19일 발행",
  ]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [모달, 모달변경] = useState(false);
  let [몇번째, 몇번째변경] = useState(0);
  let [입력값, 입력값변경] = useState("");

  function 저장함수() {
    let newArray = [...글제목];
    newArray.unshift(입력값);
    글제목변경(newArray);
    입력값변경("");
  }

  function 좋아요함수(i) {
    let newArray = [...좋아요];
    newArray[i]++;
    좋아요변경(newArray);
  }

  function 정렬함수() {
    let newArray = [...글제목].sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={function () {
                모달변경(!모달);
                몇번째변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  {
                    좋아요함수(i);
                  }
                }}
              >
                😀
              </span>
              {좋아요[i]}
            </h3>
            <span>{발행[i]}</span>
            <hr />
          </div>
        );
      })}
      <div className="publish">
        <input
          onChange={(e) => {
            {
              입력값변경(e.target.value);
            }
          }}
        ></input>
        <button onClick={저장함수}>저장</button>
      </div>

      <button onClick={정렬함수}>정렬</button>

      {모달 === true ? <Modal 글제목={글제목} 몇번째={몇번째}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.글제목[props.몇번째]}</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
