import React, { useState } from "react";
import { FC } from "react";
import "css/login.css";
import "css/main.css";
import "css/header.css";
import { ReactComponent as CheckedIcon } from "images/checkedbox.svg";
import { ReactComponent as UncheckedIcon } from "images/uncheckedbox.svg";
import { Link } from "react-router-dom";
import { FormControlLabel, Radio } from "@material-ui/core";

const RegisterView: FC = () => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked(!checked);
  };

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
                  <input type="text" name="name" placeholder="닉네임" />
                </div>
                <div className="field">
                  <input type="email" name="email" placeholder="이메일" />
                </div>
                <div className="field" style={{ display: "flex" }}>
                  <input
                    type="number"
                    name="id_number"
                    placeholder="주민등록번호"
                    style={{ width: "calc(100%/2 - 30px)" }}
                  />
                  <span style={{ margin: "0 15px" }}>-</span>
                  <input
                    type="password"
                    name="id_number"
                    style={{ width: "calc(100%/2 - 30px)" }}
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password confirm"
                    placeholder="비밀번호 확인"
                  />
                </div>
                <div className="field">
                  <input type="text" name="address" placeholder="거주 지역" />
                </div>
                <div className="field">
                  <FormControlLabel
                    value="pet"
                    control={
                      <Radio
                        checked={checked}
                        onClick={onClick}
                        checkedIcon={<CheckedIcon />}
                        icon={<UncheckedIcon />}
                      />
                    }
                    label="반려동물 여부"
                    labelPlacement="start"
                  />
                </div>
              </div>
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="회원가입"
                    className="btn blue"
                    style={{ padding: "0 2em", marginTop: 20 }}
                  />
                </li>
              </ul>
            </form>
            <Link to={"/login"}>로그인</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterView;
