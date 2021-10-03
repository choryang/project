import React from "react";
import { FC } from "react";
import "css/login.css";
import "css/main.css";
import "css/header.css";
import { Link } from "react-router-dom";

const LoginView: FC = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"} className="link">
          <h2 className="h2">Logo</h2>
        </Link>
      </header>

      <div style={{ display: "flex" }}>
        <section className="background half"></section>
        <section className="login">
          <div className="box">
            <form method="post" action="#">
              <div className="fields loginbox">
                <div className="field">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="Log In"
                    className="btn blue"
                    style={{ padding: "0 2em", marginTop: 20 }}
                  />
                </li>
              </ul>
            </form>
            <Link to={"/register"}>Sign Up</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginView;
