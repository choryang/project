import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import "css/main.css";
import "css/header.css";
import "css/board.css";
import View from "images/visibility.png";
import { Card, Divider, Input } from "@material-ui/core";

const BoardRegister: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f5f6f7",
        height: window.innerHeight,
        position: "relative",
      }}
    >
      <header className="header">
        <Link to={"/"} className="link">
          <h2 className="h2">Find Your Pet</h2>
        </Link>
        <nav className="nav">
          <ul className="right">
            <li>
              <Link to={"/board"} className="link">
                <span className="right-menu">Board</span>
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link">
                <span className="right-menu">Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="board-detail">
        <Card
          style={{
            margin: 10,
            padding: 20,
            height: window.innerHeight,
          }}
        >
          <input
            placeholder="제목"
            style={{
              width: "100%",
              border: "none",
              borderBottom: "1px solid #999999",
              paddingBottom: 5,
              background: "none",
              fontWeight: "bold",
              outline: "none",
            }}
          />
          <textarea
            placeholder="메시지"
            rows={6}
            style={{ fontSize: 16, margin: "10px 0" }}
          ></textarea>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button>등록</button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default BoardRegister;
