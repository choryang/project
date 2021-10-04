import React, { useState } from "react";
import { FC } from "react";
import "css/login.css";
import "css/main.css";
import "css/header.css";
import { ReactComponent as CheckedIcon } from "images/checkedbox.svg";
import { ReactComponent as UncheckedIcon } from "images/uncheckedbox.svg";
import { Link, useHistory } from "react-router-dom";
import { FormControlLabel, Radio } from "@material-ui/core";

const RegisterView: FC = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [idNumber, setIdNumber] = useState();
  const [idLastNumber, setIdLastNumber] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [address, setAddress] = useState();
  const onClick = () => {
    setChecked(!checked);
  };
  const onClickRegister = () => {
    if (
      !(
        name &&
        email &&
        idNumber &&
        idLastNumber &&
        password &&
        passwordConfirm &&
        address
      )
    ) {
      alert("빈 칸을 채워주세요.");
    } else if (password !== passwordConfirm) {
      alert("비밀번호를 확인하세요.");
    } else if (password === passwordConfirm) {
      alert("회원가입 완료되었습니다.");
      history.push("/login");
    }
  };
  const onChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "id_number") {
      setIdNumber(event.target.value);
    } else if (event.target.name === "id_lastnumber") {
      setIdLastNumber(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "password confirm") {
      setPasswordConfirm(event.target.value);
    } else if (event.target.name === "address") {
      setAddress(event.target.value);
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
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="닉네임"
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="이메일"
                    required
                  />
                </div>
                <div className="field" style={{ display: "flex" }}>
                  <input
                    type="text"
                    pattern="[0-9]+"
                    name="id_number"
                    value={idNumber}
                    onChange={onChange}
                    placeholder="주민등록번호"
                    style={{ width: "calc(100%/2 - 30px)" }}
                    required
                  />
                  <span style={{ margin: "0 15px" }}>-</span>
                  <input
                    type="password"
                    name="id_lastnumber"
                    value={idLastNumber}
                    onChange={onChange}
                    style={{ width: "calc(100%/2 - 30px)" }}
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
                <div className="field">
                  <input
                    type="password"
                    name="password confirm"
                    value={passwordConfirm}
                    onChange={onChange}
                    placeholder="비밀번호 확인"
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={onChange}
                    placeholder="거주 지역"
                    required
                  />
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
                    onClick={onClickRegister}
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
