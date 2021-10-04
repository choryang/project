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
    name: "you",
    createdAt: "2021-10-01",
    updatedAt: "2021-10-01",
    title: "test1",
    contents:
      "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum. Fusce blandit ultrices sapien, in accumsan orci rhoncu eu. Sed sodales venenatis arcu, id varius justo euismod in. Curabitur egestas consectetur magna.",
    views: 1,
  };

  const comments = [
    {
      id: 1,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [
        {
          id: 1,
          name: "me",
          comment:
            "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
        },
        {
          id: 2,
          name: "me",
          comment:
            "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
        },
      ],
    },
    {
      id: 2,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 3,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 4,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 5,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 6,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 7,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 8,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 9,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 10,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 11,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
    {
      id: 12,
      name: "you",
      comment:
        "Lorem ipsum dolor sit amet et sapien sed elementum egestas dolor condimentum.",
      sub: [],
    },
  ];

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
          <h3>{item.title}</h3>
          <p
            style={{
              color: "#cccccc",
              fontSize: 13,
              fontWeight: "bold",
              lineHeight: "0.5em",
            }}
          >
            {item.name}
          </p>
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
            <header>
              <b>댓글</b>
            </header>
            <div style={{ height: 500, overflowY: "scroll" }}>
              {comments.map((item) => {
                return (
                  <>
                    <div key={item.id}>
                      <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                        {item.name}
                      </p>
                      <p style={{ marginLeft: 5 }}>{item.comment}</p>
                    </div>
                    <div>
                      {item.sub.map((sub) => {
                        return (
                          <div key={sub.id} style={{ marginLeft: 20 }}>
                            <p style={{ marginBottom: 0, fontWeight: "bold" }}>
                              {sub.name}
                            </p>
                            <p style={{ marginLeft: 5 }}>{sub.comment}</p>
                          </div>
                        );
                      })}
                    </div>
                    <Divider />
                  </>
                );
              })}
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
          <button>보내기</button>
        </div>
      </section>
    </div>
  );
};

export default BoardDetail;
