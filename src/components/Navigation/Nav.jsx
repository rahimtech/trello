import { React, useState } from "react";
import ColorButton from "./ColorButton";
import Board from "./Board";
import { Button, Hidden, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { Input } from "reactstrap";
import Axios from "axios";
import { Routes, Route } from "react-router-dom";

import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Link } from "react-router-dom";
//import Targets from "../Target/Targets";

const style = {
  position: "absolute",
  width: "20%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Nav = () => {
  const [show, showmodal] = useState(false);
  const [Login, showLogin] = useState(false);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checkpass, setCheckPass] = useState("");
  const [vipcode, setVipCode] = useState("");
  const [showlog, setShowLog] = useState("");
  const [showlogIn, setShowLogIn] = useState("");
  const [showlogDes, setShowLogDes] = useState(false);
  const [showTargetToggle, setShowTargetToggle] = useState(false);
  const con = useContext(UserContext);

  const generalSetTarget = (check) => {
    if (check) {
      con.setShowTarget(true);
      setShowTargetToggle(true);
      return;
    } else {
      con.setShowTarget(false);
      setShowTargetToggle(false);
      return;
    }
  };

  const ValidPass = () => {
    if (password === checkpass) {
      console.log("checkpass: ", checkpass);
      console.log("password: ", password);

      return true;
    } else {
      return false;
    }
  };

  const ValidVipCode = () => {
    if (vipcode === "100") {
      console.log("vipcode: ", vipcode);
      return true;
    } else {
      return false;
    }
  };

  const ValidateEmail = (mail) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true;
    }
    return false;
  };

  const register = (e) => {
    e.preventDefault();
    if (ValidateEmail(con.email) && ValidPass() && ValidVipCode()) {
      Axios.post("http://localhost:3001/checkuser", {
        email: con.email,
      }).then((response) => {
        if (response.data.length > 0) {
          console.log("response.data: ", response);
          setShowLog("کاربری با این ایمیل ثبت نام کرده");
        } else {
          // setCheckUser(false);

          Axios.post("http://localhost:3001/register", {
            username: con.username,
            email: con.email,
            number: number,
            password: password,
            vipcode: vipcode,
          }).then((response) => {
            console.log(response);
          });
          setShowLog("ایول ! ثبت نام با موفقیت انجام شد");
          setShowLogDes(con.logInUser());
          console.log("first :", showlogDes);
          setTimeout(() => exitLogin(), 500);
          setTimeout(() => setShowLog(""), 500);
          setTimeout(() => setShowLogIn(""), 500);
          // let x = 5;

          // setTimeout(exitLogin(),3000)
          // exitLogin();
        }
      });
    } else {
      setShowLog("لطفا فرم را درست پٌر کنید");
    }
  };

  const login = (e) => {
    e.preventDefault();

    if (con.email === "" || password === "") {
      setShowLogIn("لطفا فرم را درست پٌر کنید");

      return;
    }
    Axios.post("http://localhost:3001/login", {
      // username: con.username,
      email: con.email,
      // number: number,
      password: password,
    })
      .then((response) => {
        console.log(response);
        if (response.data.length > 0) {
          setShowLogIn("با موفقیت وارد شدید !");
          setShowLogDes(con.logInUser());
          console.log("first :", showlogDes);
          setTimeout(() => exitLogin(), 500);
          setTimeout(() => setShowLog(""), 500);
          setTimeout(() => setShowLogIn(""), 500);
        } else {
          setShowLogIn("کاربری پیدا نشد !");
        }
      })
      .catch((response) => {
        // setShowLogIn("کاربری پیدا نشد !");
      });
  };

  const exitLogin = () => {
    showLogin(false);
    showmodal(false);
  };

  const checkLogin = () => {
    if (Login === false) {
      showLogin(true);
      showmodal(false);
    } else {
      showLogin(false);
      showmodal(true);
    }
  };

  return (
    <div className="z-30">
      <div className="flex flex-wrap p-3 justify-between shadow-md items-center bg-slate-200 mb-3 md:fixed md:mx-16  md:mt-3 left-0 right-0 ">
        <div className="flex">
          <ColorButton />
          <span className="ml-3">
            <Board />
          </span>
          <span className="ml-3">
            <Button
              onClick={() => generalSetTarget(true)}
              className={`${showTargetToggle ? `!hidden` : `!block`}`}
              variant="contained"
            >
              اهداف
            </Button>
            <Button
              onClick={() => generalSetTarget(false)}
              className={`${showTargetToggle ? `!block` : `!hidden`}`}
              variant="contained"
            >
              اهداف
            </Button>
          </span>
        </div>
        <div
          className={` flex-col items-end ${
            con.logInUser() ? `hidden` : `flex`
          } `}
        >
          <h3 className="rtl m-0">به TexiT خوش اومدی</h3>
          <p className=" m-0">
            اگه میخوای کارهایی که این پایین تنظیم کردی ذخیره بشه
            {/* در این نسخه از سایت کارهایی که پایین اضافه میکنید فقط روی همین سیستم
            ذخیره میشه */}
            <button
              onClick={() => showmodal(true)}
              className="bg-blue-200 mx-1 cursor-pointer hover:bg-blue-300 hover:text-blue-900 ring-1  border-none rounded-sm p-1 text-blue-600"
            >
              ثبت نام/ورود
            </button>
            کن
          </p>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={exitLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <Box
            sx={style}
            className="flex flex-col items-center text-center rtl"
          >
            <div className="mb-3">
              <Typography>ثبت نام</Typography>
              <Typography className="text-blue-700 font-medium rtl">
                {showlog}
              </Typography>
            </div>
            <form onSubmit={(e) => register(e)}>
              <div className="">
                <TextField
                  id="outlined-basic"
                  label="ایمیل"
                  type="email"
                  variant="outlined"
                  name="email"
                  onChange={(e) => con.setEmail(e.target.value)}
                  required
                />
              </div>

              <div className=" my-3">
                <TextField
                  id="outlined-basic"
                  label="رمز"
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <TextField
                  id="outlined-basic"
                  label="تکرار رمز"
                  variant="outlined"
                  type="password"
                  name="rePass"
                  onChange={(e) => setCheckPass(e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <TextField
                  id="outlined-basic"
                  label="کد دعوت"
                  variant="outlined"
                  name="vipcode"
                  onChange={(e) => setVipCode(e.target.value)}
                  required
                />
              </div>
              <div className="mt-5">
                <Button type="submit" variant="outlined">
                  ثبت نام
                </Button>
              </div>
              <div className="mt-3">
                <Button variant="text" onClick={checkLogin}>
                  ورود
                </Button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={Login}
        onClose={exitLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Login}>
          <Box sx={style} className="flex flex-col items-center text-center">
            <form onSubmit={(e) => login(e)}>
              <div className="mb-3">
                <Typography>ورود</Typography>
                <Typography className="text-blue-700 font-medium rtl">
                  {showlogIn}
                </Typography>
              </div>
              <div className="">
                <TextField
                  id="outlined-basic"
                  type="email"
                  label="ایمیل"
                  variant="outlined"
                  name="email"
                  onChange={(e) => con.setEmail(e.target.value)}
                />
              </div>

              <div className=" my-3">
                <TextField
                  id="outlined-basic"
                  label="رمز ورود"
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-5">
                <Button type="submit" variant="outlined">
                  ورود
                </Button>
              </div>
              <div className="mt-3">
                <Button variant="text" onClick={checkLogin}>
                  ثبت‌نام
                </Button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default Nav;
