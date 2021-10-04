import React, { useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import "css/main.css";
import "css/header.css";
import { Card, Input, Select, Table } from "@material-ui/core";

const InformationView: FC = () => {
  const [title, setTitle] = useState("title");
  const Items = [
    {
      id: 1,
      age: "2018(년생)",
      pic: "http://www.animal.go.kr/files/shelter/2021/09/202110022310282.jpg",
      kind: "[개] 믹스견",
      sex: "F",
      care_place: "목포시유기동물보호소",
      care_tel: "010-9678-9966",
      state: "보호중",
    },
    {
      id: 2,
      age: "2018(년생)",
      pic: "http://www.animal.go.kr/files/shelter/2021/09/202110022310282.jpg",
      kind: "[개] 믹스견",
      sex: "F",
      care_place: "목포시유기동물보호소",
      care_tel: "010-9678-9966",
      state: "보호중",
    },
    {
      id: 3,
      age: "2018(년생)",
      pic: "http://www.animal.go.kr/files/shelter/2021/09/202110022310282.jpg",
      kind: "[개] 믹스견",
      sex: "F",
      care_place: "목포시유기동물보호소",
      care_tel: "010-9678-9966",
      state: "보호중",
    },
    {
      id: 4,
      age: "2018(년생)",
      pic: "http://www.animal.go.kr/files/shelter/2021/09/202110022310282.jpg",
      kind: "[개] 믹스견",
      sex: "F",
      care_place: "목포시유기동물보호소",
      care_tel: "010-9678-9966",
      state: "보호중",
    },
    {
      id: 5,
      age: "2018(년생)",
      pic: "http://www.animal.go.kr/files/shelter/2021/09/202110022310282.jpg",
      kind: "[개] 믹스견",
      sex: "F",
      care_place: "목포시유기동물보호소",
      care_tel: "010-9678-9966",
      state: "보호중",
    },
    {
      id: 6,
      age: "2018(년생)",
      pic: "http://www.animal.go.kr/files/shelter/2021/09/202110022310282.jpg",
      kind: "[개] 믹스견",
      sex: "F",
      care_place: "목포시유기동물보호소",
      care_tel: "010-9678-9966",
      state: "보호중",
    },
    {
      id: 7,
      age: "2018(년생)",
      pic: "http://www.animal.go.kr/files/shelter/2021/09/202110022310282.jpg",
      kind: "[개] 믹스견",
      sex: "F",
      care_place: "목포시유기동물보호소",
      care_tel: "010-9678-9966",
      state: "보호중",
    },
    {
      id: 8,
      age: "2018(년생)",
      pic: "http://www.animal.go.kr/files/shelter/2021/09/202110022310282.jpg",
      kind: "[개] 믹스견",
      sex: "F",
      care_place: "목포시유기동물보호소",
      care_tel: "010-9678-9966",
      state: "보호중",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#f5f6f7",
        height: window.innerHeight,
      }}
    >
      <header className="header">
        <Link to={"/"} className="link">
          <h2 className="h2">Find Your Pet</h2>
        </Link>
        <nav className="nav">
          <ul className="right">
            <li>
              <Link to={"#"} className="link">
                <span className="right-menu">Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="board" className="information">
        {Items.map((item) => {
          return (
            <Card
              style={{
                display: "flex",
                alignItems: "center",
                margin: 10,
                padding: 20,
              }}
            >
              <img
                src={item.pic}
                alt="profile"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 4,
                  objectFit: "cover",
                  marginRight: 10,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 15,
                  lineHeight: "1.5em",
                }}
              >
                <span>나이: {item.age}</span>
                <span>품종: {item.kind}</span>
                <span>성별: {item.sex}</span>
                <span>보호센터: {item.care_place}</span>
                <span>연락처: {item.care_tel}</span>
                <span>상태: {item.state}</span>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default InformationView;
