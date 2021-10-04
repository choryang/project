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
          <h2 className="h2">Find Your Pet</h2>
        </Link>
      </header>

      <div style={{ display: "flex" }}>
        <section className="background half"></section>
        <section className="login">
          <div className="box">
            <form method="post" action="#">
              <div className="fields loginbox">
                <div className="field">
                  <input type="text" name="email" placeholder="이메일" />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                  />
                </div>
              </div>
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="로그인"
                    className="btn blue"
                    style={{ padding: "0 2em", marginTop: 20 }}
                  />
                </li>
              </ul>
            </form>
            <Link to={"/register"}>회원가입</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginView;
