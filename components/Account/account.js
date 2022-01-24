import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import ReactToastifyCss from "react-toastify/dist/ReactToastify.min.css";
import moment from "moment";

// API and JWT helper
import { apiHelper, ukApiHelper } from "../../helper/apiHelper";
import { jwtDecode } from "../../helper/jwtHelper";
import { socialLoginFunc } from '../../helper/socialMediaAuthHelper';

// react slick
import Slider from "react-slick";
import slickCss from "slick-carousel/slick/slick.css";

// scss
import accountCss from "./account.scss";

// components
import Accountleft from "./accountLeft";
import Img from "../Common/image";
import SocialButton from "./SocialButton";

// img
import logo from "../../public/logo.svg";
import mobileLogo from "../../public/mobileLogo.svg";
import cheapestMarket from "../../public/account/cheapest-market.svg"
import expertWriter from "../../public/account/expert-writer.svg"
import onTimeDelivery from "../../public/account/on-time-delivery.svg"

const Account = (props) => {
  // Email and password
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [emailInValidMsg, setEmailInValidMsg] = useState("");
  const [passwordInValidMsg, setPasswordInValidMsg] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [detailIsValid, setDetailIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [apiLoader, setApiLoader] = useState(false);

  const router = useRouter();

  const emailChangeHandler = (event) => {
    setDetailIsValid('')
    setEnteredEmail(event.target.value);

    if (router.pathname === "/forget-password") {
      setFormIsValid(event.target.value.includes("@"));
      setforgotPwdErrormsg('')
    } else {
      setFormIsValid(
        event.target.value.includes("@") && enteredPassword.trim().length > 3
      );
    }
  };

  const passwordChangeHandler = (event) => {
    setDetailIsValid('')
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && event.target.value.trim().length > 3
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
    setEmailInValidMsg("Email should be either valid or not be blank.");
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 3);
    setPasswordInValidMsg(
      "Password should either greater than 3 characters long or not be blank"
    );
  };

  const setUserLoggedInData = (user_token) => {
    const now = new Date();
    const item = {
      value: user_token,
      expiry: now.getTime() + 12 * 60 * 60 * 1000,
    };
    localStorage.setItem("token", JSON.stringify(item));
    // set localstorage
    if (
      !localStorage.getItem("calculator_service") ||
      localStorage.getItem("calculator_service") === ""
    ) {
      localStorage.setItem(
        "calculator_service",
        JSON.stringify({ id: 3, label: "Writing" })
      );
    }
    if (
      !localStorage.getItem("calculator_pages") ||
      localStorage.getItem("calculator_pages") === ""
    ) {
      localStorage.setItem(
        "calculator_pages",
        JSON.stringify({ value: 1, label: "Essay (Any Type)" })
      );
    }

    if (
      !localStorage.getItem("calculator_deadline") ||
      localStorage.getItem("calculator_deadline") === ""
    ) {
      localStorage.setItem(
        "calculator_deadline",
        JSON.stringify({
          digit: 19,
          durations: "Days",
          label: moment().add(19, 'days').format('MMMM D, YYYY h:mm A'),
        })
      );
    }
    if (
      !localStorage.getItem("calculator_word") ||
      localStorage.getItem("calculator_word") === ""
    ) {
      localStorage.setItem(
        "calculator_word",
        JSON.stringify({ id: 1, label: "280 words / 1 page" })
      );
    }
    setDetailIsValid("");
    setOrderData();
    // Router.push("/order");
  }

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    setApiLoader(true);
    const formData = new FormData();

    formData.append("email", enteredEmail);
    formData.append("password", enteredPassword);

    apiHelper("checkLogin", "POST", formData, null)
      .then((res) => {
        const response = res.data;
        setApiLoader(false);
        if (response.status) {
          // Set Data in localstrorage
          setUserLoggedInData(response.data.user_token)
        } else {
          setDetailIsValid(response.message);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const signUpSubmitHandler = (event) => {
    event.preventDefault();
    setApiLoader(true);
    const formData = new FormData();

    formData.append("email", enteredEmail);
    formData.append("password", enteredPassword);

    ukApiHelper("createAccountV1", "POST", formData, null)
      .then((res) => {
        setApiLoader(false);
        if (res.data.status) {
          setUserLoggedInData(res.data.data)
        } else {
          setDetailIsValid(res.data.message);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const [forgotPwdErrormsg, setforgotPwdErrormsg] = useState();
  const [forgotPwdSuccessmsg, setforgotPwdSuccessmsg] = useState()
  const forgetPassword = (event) => {
    event.preventDefault();
    if (emailIsValid) {
      setApiLoader(true);
      const formData = new FormData();
      formData.append("email", enteredEmail);
      apiHelper("forgotPassword", "POST", formData, null)
        .then((res) => {
          setApiLoader(false);
          if (res.data.status) {
            toast.success(res.message);
            setTimeout(() => {
              router.push("/login");
            }, 5000);
            setforgotPwdSuccessmsg(<span className="msgText successMsg">{res.data.message}</span>)
          } else {
            setforgotPwdErrormsg(
              <span className="msgText errorMsg">{res.data.message}</span>
            );
          }
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
  };

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
  };


  // password hide and show
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const setOrderData = async () => {
    var order_token = localStorage.getItem("orderToken");
    let decodeToken = null;
    if (order_token && order_token !== '') {
      decodeToken = jwtDecode(order_token);
    }
    const loginToken = localStorage.getItem('token');
    var convertedUserToken = loginToken && loginToken !== '' ? JSON.parse(loginToken) : null;
    const formData = new FormData();
    formData.append("service", decodeToken && decodeToken.service ? decodeToken.service : 3);
    formData.append("page", decodeToken && decodeToken.page ? decodeToken.page : 0);
    formData.append("set_spacing", decodeToken && decodeToken.set_spacing ? decodeToken.set_spacing : 1);
    formData.append("academic", decodeToken && decodeToken.academic ? decodeToken.academic : 3);
    formData.append("paper", decodeToken && decodeToken.paper ? decodeToken.paper : 1);
    formData.append("other_paper", decodeToken && decodeToken.other_paper ? decodeToken.other_paper : '');
    formData.append("subject", decodeToken && decodeToken.subject ? decodeToken.subject : 18);
    formData.append("other_subject", decodeToken && decodeToken.other_subject ? decodeToken.other_subject : '');
    formData.append("formated_style", decodeToken && decodeToken.formated_style);
    formData.append("other_format", decodeToken && decodeToken.other_format);
    formData.append("source", decodeToken && decodeToken.source);
    formData.append("discipline", decodeToken && decodeToken.discipline);
    formData.append("topic", decodeToken && decodeToken.topic ? decodeToken.topic : `Writer's Choice`);
    formData.append("add_detail", decodeToken && decodeToken.add_detail ? decodeToken.add_detail : '');
    formData.append("timezone", decodeToken && decodeToken.timezone ? decodeToken.timezone : 'Europe/London');
    formData.append("deadline", decodeToken && decodeToken.deadline ? decodeToken.deadline : 19);
    formData.append("duration", decodeToken && decodeToken.duration ? decodeToken.duration : 'Days');
    formData.append("coupon_code", decodeToken && decodeToken.coupon_code ? decodeToken.coupon_code : '');
    formData.append("slide", decodeToken && decodeToken.slide ? decodeToken.slide : 0);
    formData.append("chart", decodeToken && decodeToken.chart);
    formData.append("preferred_writer", decodeToken && decodeToken.preferred_writer);
    formData.append("writer_id", decodeToken && decodeToken.writer_id ? decodeToken.writer_id : '');
    formData.append("additionalextra", decodeToken && decodeToken.additionalextra);
    formData.append("user_token", convertedUserToken && convertedUserToken.value ? convertedUserToken.value : '');
    formData.append("deadlineLable", decodeToken && decodeToken.deadlineLable);
    formData.append("orderMobileMenu deadlineid", decodeToken && decodeToken.deadlineValue ? decodeToken.deadlineValue.value : 0);
    apiHelper('setOrderV1', 'POST', formData, null).then(res => {
      if (res.data.status) {
        const data = res.data.data;
        localStorage.setItem("orderToken", data.order_token);
        localStorage.setItem('currStep', (decodeToken && decodeToken.add_detail !== '' ? 2 : 1))
        router.push(process.env.basePath + '/order')
      }
    }).catch(error => console.error(`Error: ${error}`));
  }

  const [googleErrMsg, setGoogleErrMsg] = useState('');
  const responseGoogle = async (res) => {
    setGoogleErrMsg('')
    const response = await socialLoginFunc(res, 1);
    if (response.data.status) {
      setUserLoggedInData(response.data.data)
    } else {
      setGoogleErrMsg(response.data.message)
    }

  }

  const responseGoogleFailure = (err) => {
 
  }

  const [fbErrMsg, setFbErrMsg] = useState('');
  const responseFacebook = async (res) => {
    setFbErrMsg('')
    const response = await socialLoginFunc(res, 2);
    if (response.data.status) {
      setUserLoggedInData(response.data.data)
    } else {
      setFbErrMsg(response.data.message)
    }

  }

  const responseFacebookFailure = (err) => {
    console.log(err);
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: slickCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: accountCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
      <div className="navbar-brand">
        <a className="brandLink" href={process.env.hostBaseUrl}>
          <Img src={logo} alt="logo" width={205} height={64} title="Logo" className="d-none d-lg-block" />
          <Img src={mobileLogo} alt="logo" width={205} height={64} title="Logo" className="d-lg-none" />
        </a>
      </div>
      <section
        className={`login p-0 ${router.asPath === "/forget-password" ? "forgetPwd" : ""
          } ${router.asPath === "/signup" ? "signup" : ""}`}
      >
        <div className="leftImage d-none d-lg-table-cell">
          <div className="acoountImg">
            <Slider {...settings}>
              <Accountleft
                src={cheapestMarket}
                alt="Cheapest in Market"
                title="cheapest in market"
                desc="Looking for reliable yet CheapestEssay writing services? Now get top academic services at the lowest price that doesn’t get hard on your pockets.  
                "
              />
              <Accountleft
                src={expertWriter}
                alt="Expert Writer’s Team"
                title="Expert Writer’s Team"
                desc="Worried about the writer’s capability? Rest assured, as our writers have expertise in academic writing and hold degrees from top-ranked universities. 
                "
              />
              <Accountleft
                src={onTimeDelivery}
                alt="On Time Delivery"
                title="on time delivery"
                desc="Stressed about meeting the deadlines of your assignment? Leave all your worries behind as with us; you get your order delivered at the specified date.
                "
              />
            </Slider>
          </div>
        </div>
        <div className="accountDetails">
          <div
            className="loginForm"
            method="post"
          >
            <h2 className="section-title">{props.title}</h2>
            <div
              className={`form-group ${emailIsValid === false ? "invalid" : ""
                }`}
            >
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="form-control"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                autoComplete="new-password"
              />
              {emailIsValid === false ? (
                <p className="errorMsg">{emailInValidMsg}</p>
              ) : (
                ""
              )}
            </div>
            <div
              className={`form-group accPwd ${passwordIsValid === false ? "invalid" : ""
                }`}
            >
              <label>Password</label>
              <div className="showPassword position-relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="form-control"
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
                  onBlur={validatePasswordHandler}
                  autoComplete="new-password"
                />
                {enteredPassword ? <div className="icon" onClick={togglePasswordVisiblity}>
                  {
                    passwordShown ?
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                        <g id="eye_icon_" data-name="eye icon " transform="translate(21602 -2318)">
                          <rect id="Rectangle_2304" data-name="Rectangle 2304" width={20} height={20} transform="translate(-21602 2318)" fill="#fff" opacity="0" />
                          <path id="eye_3_" data-name="eye (3)" d="M10,4c-6.545,0-9,6.545-9,6.545s2.455,6.545,9,6.545,9-6.545,9-6.545S16.545,4,10,4Zm0,1.636c4.317,0,6.5,3.491,7.207,4.906C16.5,11.947,14.3,15.455,10,15.455c-4.317,0-6.5-3.491-7.207-4.906C3.5,9.144,5.7,5.636,10,5.636Zm0,1.636a3.273,3.273,0,1,0,3.273,3.273A3.273,3.273,0,0,0,10,7.273Zm0,1.636a1.636,1.636,0,1,1-1.636,1.636A1.636,1.636,0,0,1,10,8.909Z" transform="translate(-21602 2317)" fill="#5f6368" />
                        </g>
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                        <g id="eye_icon_2" data-name="eye icon 2" transform="translate(21602 -2318)">
                          <rect id="Rectangle_2304" data-name="Rectangle 2304" width={20} height={20} transform="translate(-21602 2318)" fill="#fff" opacity="0" />
                          <path id="Subtraction_5" data-name="Subtraction 5" d="M-15,14.591a8.757,8.757,0,0,1-4.167-1.023,9.93,9.93,0,0,1-2.787-2.25A12.015,12.015,0,0,1-24,8.045,12.094,12.094,0,0,1-20.993,3.8L-19.875,5a10.354,10.354,0,0,0-2.331,3.049c.736,1.474,2.912,4.906,7.206,4.906a7.283,7.283,0,0,0,2.226-.341l1.213,1.3A8.839,8.839,0,0,1-15,14.591Zm6.01-2.317h0l-1.116-1.2A10.345,10.345,0,0,0-7.793,8.042C-8.529,6.568-10.706,3.137-15,3.137a7.285,7.285,0,0,0-2.2.333l-1.215-1.3A8.841,8.841,0,0,1-15,1.5a8.759,8.759,0,0,1,4.168,1.023,9.928,9.928,0,0,1,2.787,2.25A12.013,12.013,0,0,1-6,8.045a12.1,12.1,0,0,1-2.989,4.228ZM-15,11.318a3.277,3.277,0,0,1-3.272-3.273,3.262,3.262,0,0,1,.2-1.117l1.524,1.634a1.635,1.635,0,0,0,.931,1l1.523,1.633A3.279,3.279,0,0,1-15,11.318Zm3.086-2.18h0l-1.551-1.663a1.649,1.649,0,0,0-.856-.918l-1.552-1.665A3.279,3.279,0,0,1-15,4.773a3.277,3.277,0,0,1,3.273,3.272,3.266,3.266,0,0,1-.186,1.091Z" transform="translate(-21577 2319.5)" fill="#5f6368" />
                          <rect id="Rectangle_2306" data-name="Rectangle 2306" width={20} height={2} rx="1" transform="translate(-21598.088 2319.5) rotate(47)" fill="#5f6368" />
                        </g>
                      </svg>
                  }
                </div> : null}
              </div>
              {passwordIsValid === false ? (
                <p className="errorMsg">{passwordInValidMsg}</p>
              ) : (
                ""
              )}
            </div>
            <div className="d-flex align-items-center justify-content-end centerPart">
              <a
                className="forgetPwd"
                href={`${process.env.hostBaseUrl}/forget-password`}
              >
                Forget Password?
              </a>
            </div>
            {forgotPwdSuccessmsg}
            {forgotPwdErrormsg}
            <p className="errorMsg">{detailIsValid}</p>
            <div className="btns">
              <button
                type="submit"
                className="btn secondary-btn w-100"
                disabled={!formIsValid || apiLoader}
                onClick={
                  router.asPath === "/login"
                    ? loginSubmitHandler
                    : router.asPath === "/forget-password"
                      ? forgetPassword
                      : signUpSubmitHandler
                }
              >
                {props.btntext}
              </button>
            </div>
            <div className="bottomPart">

              <p className="or text-center d-block mt-4 mb-4">
                <span>or continue with</span>
              </p>
              <div className="connection d-flex justify-content-center mb-1">
                <SocialButton
                  provider="google"
                  appId='1022764320593-e6r3d8qpdhmqfmrvphqms8jsah9nkoap.apps.googleusercontent.com'
                  onLoginSuccess={responseGoogle}
                  onLoginFailure={responseGoogleFailure}
                  className="links"
                  cookiepolicy='single_host_origin'
                >
                  <Img
                    src="/account/google.svg"
                    alt="google"
                    width={20}
                    height={20}
                  />
                  <span className="text">Google</span>
                </SocialButton>
                <SocialButton
                  provider="facebook"
                  appId='1904009586394982'
                  onLoginSuccess={responseFacebook}
                  onLoginFailure={responseFacebookFailure}
                  className="links"
                >
                  <Img
                    src="/account/fb.svg"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                  <span className="text">Facebook</span>
                </SocialButton>
              </div>
              <p className="errorMsg text-center">{googleErrMsg}</p>
              <p className="errorMsg text-center">{fbErrMsg}</p>
            </div>
            <div className="text-center link-account">
              {props.linktext}{" "}
              <a className="text" href={props.link}>
                {props.text}
              </a>
              <ToastContainer autoClose={5000} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Account;

