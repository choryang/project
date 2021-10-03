import React, { useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import "css/main.css";
import "css/header.css";
import Chat from "images/chat.png";
import View from "images/visibility.png";
import { Card, Input, Select } from "@material-ui/core";

const BoardView: FC = () => {
  const [title, setTitle] = useState("title");
  const Items = [
    {
      id: 1,
      createdAt: "2021-10-01",
      updatedAt: "2021-10-01",
      title: "test1",
      contents:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncu eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna.",
      views: 1,
    },
    {
      id: 2,
      createdAt: "2021-10-01",
      updatedAt: "2021-10-01",
      title: "test2",
      contents:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncu eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna.",
      views: 1,
    },
    {
      id: 3,
      createdAt: "2021-10-01",
      updatedAt: "2021-10-01",
      title: "test3",
      contents:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncu eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna.",
      views: 1,
    },
    {
      id: 4,
      createdAt: "2021-10-01",
      updatedAt: "2021-10-01",
      title: "test4",
      contents:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncu eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna.",
      views: 1,
    },
    {
      id: 5,
      createdAt: "2021-10-01",
      updatedAt: "2021-10-01",
      title: "test5",
      contents:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncu eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna.",
      views: 1,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f6f7",
        opacity: "60%",
      }}
    >
      <header className="header">
        <Link to={"/"} className="link">
          <h2 className="h2">Logo</h2>
        </Link>
        <nav className="nav">
          <ul className="right">
            <li>
              <Link to={"/board-register"} className="link">
                <span className="right-menu">Write</span>
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
      <section id="search" style={{ marginTop: 20 }}>
        <Select style={{ padding: "4px 0", width: 100 }} defaultValue={title}>
          <option value="title">title</option>
          <option value="contents">contents</option>
          <option value="createdAt">date</option>
        </Select>
        <input
          name="keyword"
          style={{
            width: 200,
            border: "none",
            borderBottom: "1px solid #999999",
            paddingBottom: 5,
            background: "none",
          }}
        />
      </section>
      <section id="board">
        {Items.map((item) => {
          return (
            <Link
              to={`/board/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <Card style={{ margin: 10, padding: 20 }}>
                <h3>{item.title}</h3>
                <p className="ellipsis">{item.contents}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
              </Card>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default BoardView;
