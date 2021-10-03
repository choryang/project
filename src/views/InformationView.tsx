import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import "css/main.css";
import "css/header.css";

const InformationView: FC = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"} className="link">
          <h2 className="h2">Logo</h2>
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
    </>
  );
};

export default InformationView;
