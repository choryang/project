import React, { useState } from "react";
import { FC } from "react";
import "css/login.css";
import "css/main.css";
import "css/header.css";
import { Link, useHistory } from "react-router-dom";

const LoginView: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onClickLogin = () => {
    if (!(email && password)) {
      alert("빈 칸을 채워주세요.");
    } else {
      history.push("/");
    }
  };
  const onChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };
  return (
    <>
      <header className="header">
        <Link to={"/"} className="link">
          <h2 className="h2">Find Your Pet</h2>
        </Link>
      </header>

      <div className="contents">
        <section className="background half"></section>
        <section className="login">
          <div className="box">
            <form>
              <div className="fields loginbox">
                <div className="field">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="이메일"
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="비밀번호"
                    required
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
                    onClick={onClickLogin}
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
