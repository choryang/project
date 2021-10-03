import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import "css/main.css";
import "css/header.css";
import "css/board.css";
import View from "images/visibility.png";
import { Card, Divider } from "@material-ui/core";

const BoardDetail: FC = () => {
  const item = {
    id: 1,
    createdAt: "2021-10-01",
    updatedAt: "2021-10-01",
    title: "test1",
    contents:
      "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncu eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna.",
    views: 1,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f5f6f7",
        opacity: "60%",
        height: window.innerHeight,
        position: "relative",
      }}
    >
      <header className="header">
        <Link to={"/"} className="link">
          <h2 className="h2">Logo</h2>
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
          <h3>{item.title}</h3>
          <p>{item.contents}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={View}
                alt="views"
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
              <span
                style={{
                  color: "#cccccc",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {item.views}
              </span>
            </div>
            <span
              style={{
                color: "#cccccc",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {item.createdAt}
            </span>
          </div>
          <Divider />
          <div>
            <header>Comment</header>
            <div>
              <div></div>
            </div>
          </div>
        </Card>
        <div
          className="comment-input-wrapper"
          style={{ position: "absolute", bottom: 0 }}
        >
          <textarea
            className="comment-box"
            style={{
              minHeight: 20,
              overflow: "scroll",
              overflowWrap: "break-word",
            }}
          ></textarea>
          <button>Send</button>
        </div>
      </section>
    </div>
  );
};

export default BoardDetail;
