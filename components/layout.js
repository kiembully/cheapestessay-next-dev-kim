import crypto from 'crypto';
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// reactstrap
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";

// components
import Header from "./header";
import Footer from "./footer";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Order from "../pages/order";
import MyOrders from "../pages/my-orders/index";
import OrderDetail from '../pages/my-orders/order-details'
import Invoice from '../pages/invoice';
import Profile from "../pages/profile";
import Balance from "../pages/balance";
import Level from "../pages/level";
import Referral from "../pages/referral";
import Sidebar from "./order/sidebar";
import NotLoginOrder from "../components/order/placeOrder/notLoginOrder";
import ForgetPwd from "../pages/forget-password";
import Img from './Common/image';

// API helper
import { apiHelper } from '../helper/apiHelper';
import { jwtDecode } from "../helper/jwtHelper";

import CryptoJS from "crypto-js";

const cspHashOf = (text) => {
  const hash = crypto.createHash('sha256')
  hash.update(text)
  return `'sha256-${hash.digest('base64')}'`
}

const Layout = ({ children }) => {
  const router = useRouter();
  const [isReadyRender, setIsReadyRender] = useState(false);
  const [coupenCode, setCoupenCode] = useState("");

  const beforeLoginPages = ['/login', '/signup', '/forget-password']
  const afterLoginPages = ['/profile', '/balance', '/level', '/referral', '/my-orders', '/my-orders/order-details', '/order', '/invoice']

  const setInterComData = (userToken) => {

    const formData = new FormData();
    formData.append("user_token", userToken);

    apiHelper('getintercomdata', 'POST', formData, null)
      .then(res => {

        if (res.data.status) {
          var data = res.data.data;

          var secret = 'r12Ntl2v4JtgWI8Hri7GBkZqb0YhlXcdBoKRmkXj';
          var cryptoJS = CryptoJS;
          var stringID = data.user_id.toString();
          var hash = cryptoJS.HmacSHA256(stringID, secret);
          var hex = cryptoJS.enc.Hex.stringify(hash);

          data.user_hash = hex
          if (!!window.Intercom && !(typeof window === 'undefined'))
            window.Intercom('boot', data);
        }
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const exipreToken = () => {
    var pathname = router.pathname
    if (!!window.Intercom && !(typeof window === 'undefined')) {
      window.Intercom('boot', {
        app_id: 'je6f9lsz'
      });
    }

    if (afterLoginPages && afterLoginPages.includes(pathname) && pathname !== '/order') {
      router.push(`${process.env.basePath}/logout`)
    }
  }

  // const [checkLogin, setCheckLogin] = useState('')
  useEffect(() => {

  if (!router.isReady) return;

    var pathname = router.pathname
    const loginToken = localStorage.getItem("token");
    if (loginToken) {
      var convertedToken = JSON.parse(loginToken);
      const now = new Date()
      var decodeToken = convertedToken ? jwtDecode(convertedToken.value) : null
      if (decodeToken && decodeToken.exp && (decodeToken.exp * 1000) >= now.getTime() && now.getTime() <= convertedToken.expiry) {
        if (beforeLoginPages && beforeLoginPages.includes(pathname)) {
          router.push(`${process.env.basePath}/order`);
        } else {
          // setCheckLogin('true')
          if (!!window.Intercom && !(typeof window === 'undefined')) {
            window.Intercom('boot', {
              app_id: 'je6f9lsz'
            });
          }
        }
        setInterComData(convertedToken.value)
      } else {
        exipreToken()
        // setCheckLogin('false')
      }
    } else {
      exipreToken()
      // setCheckLogin('false')
    }

    if (router.query && router.query.code) {
      setCoupenCode(router.query.code);
    } else if (router.query && router.query.discount_code) {
      setCoupenCode(router.query.discount_code);
    }
    setIsReadyRender(true)

  }, [router.isReady]);

  const [changeProfile, setchangeProfile] = useState(false);
  const changeUserProfile = () => {
    setchangeProfile(!changeProfile);
  };

  // navbar toggle
  const [isOpen, setIsOpen] = useState(false);

  // header sidebar
  const toggle = () => {
    document.body.classList.add("headerSidebar-open");
    setIsOpen(true);
  };

  const toggleClose = () => {
    document.body.classList.remove("headerSidebar-open");
    setIsOpen(false);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, (event) => toggleClose());

  var checkLogin = ''
  var pathname = router.pathname;
  var loginToken = isReadyRender ? localStorage.getItem("token") : null;

  // var lang = 'x-default'
  var lang = 'en-us'
  if (process.env.basePath === '/uk') {
    lang = 'en-GB'
  }
  if (process.env.basePath === '/uae') {
    lang = 'en-AE'
  }
  if (process.env.basePath === '/ca') {
    lang = 'en-CA'
  }


  return (
    <div>

      {/* { (router ? (router.asPath == '/' ? '' : router.asPath) : '')} */}

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no" />
        <meta name="referrer" content="no-referrer" />
        <meta name="author" content="CheapestEssay Team" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      {
        pathname && pathname !== '' ?
          <>
            {
              afterLoginPages && afterLoginPages.includes(pathname) ?
                <>
                  {
                    (() => {

                      // if (isReadyRender) {
                      if (loginToken) {
                        var convertedToken = JSON.parse(loginToken);
                        const now = new Date()
                        var decodeToken = convertedToken ? jwtDecode(convertedToken.value) : null
                        if (decodeToken && decodeToken.exp && (decodeToken.exp * 1000) >= now.getTime() && now.getTime() <= convertedToken.expiry) {
                          if (beforeLoginPages && beforeLoginPages.includes(pathname)) {
                            router.push(`${process.env.basePath}/order`);
                          } else {
                            checkLogin = 'true';
                          }
                        } else {
                          checkLogin = 'false';
                        }
                      } else {
                        checkLogin = 'false';
                      }
                      // }

                    })()

                  }
                  {
                    checkLogin === 'true' ?
                      <>
                        <div className="order">

                          <div className="top-navbar orderMobileMenu d-md-block d-lg-none">
                            <Navbar expand="md">
                              <div className="container">
                                <NavbarBrand
                                  href={process.env.hostBaseUrl}
                                  onClick={
                                    router.pathname === "/" ? (e) => e.preventDefault() : null
                                  }>
                                  Cheapest <span>Essay</span>
                                </NavbarBrand>
                                <a className="btn secondary-btn" href={`${process.env.hostBaseUrl}/logout`} hidden>
                                  Logout
                                </a>
                              </div>
                            </Navbar>
                          </div>
                          <NavbarToggler className="d-lg-none d-md-block" onClick={toggle}>
                            <div className="navbar-toggler-icon open">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </NavbarToggler>
                          {isOpen ?
                            <div className='sidebarOverlay'>
                              <div className={`orderLogin m-0`} ref={wrapperRef}>
                                <Sidebar
                                  toggleClose={toggleClose}
                                  changeProfile={changeProfile}
                                />
                                <div className="navbar-toggler-icon close" onClick={toggleClose}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </div>
                            </div> : null}

                          <div className="orderLogin">
                            <Sidebar
                              toggleClose={toggleClose}
                              className="d-none d-lg-block"
                              changeProfile={changeProfile}
                            />
                            <div className="orderingDetails">
                              {
                                (pathname === "/profile") ?
                                  <Profile changeUserProfile={changeUserProfile} meta={children.props && children.props.meta} /> :
                                  (pathname === "/balance") ?
                                    <Balance changeUserProfile={changeUserProfile} meta={children.props && children.props.meta} /> :
                                    (pathname === "/level") ?
                                      <Level meta={children.props && children.props.meta} /> :
                                      (pathname === "/referral") ?
                                        <Referral meta={children.props && children.props.meta} /> :
                                        (pathname === "/my-orders") ?
                                          <MyOrders meta={children.props && children.props.meta} /> :
                                          (pathname === "/my-orders/order-details") ?
                                            <OrderDetail meta={children.props && children.props.meta} /> :
                                            (pathname === "/order") ?
                                              <Order coupenCode={coupenCode} changeUserProfile={changeUserProfile} meta={children.props && children.props.meta} /> :
                                              (pathname === "/invoice") ?
                                                <Invoice meta={children.props && children.props.meta} changeUserProfile={changeUserProfile} /> :
                                                null
                              }
                            </div>
                          </div>
                        </div>
                      </> :
                      checkLogin === 'false' ?
                        <>
                          {
                            <>
                              <Header />
                              <div className="bodyMain"><NotLoginOrder meta={children.props && children.props.meta} /></div>
                              <Footer />
                            </>
                          }
                        </> :
                        null
                  }
                </> :
                <>
                  {
                    (() => {

                      switch (pathname) {
                        case "/login":
                        case "/signup":
                        case "/forget-password": {
                          return children
                        }
                        default: {
                          return <>
                            <Header />
                            <div className="bodyMain">{children}</div>
                            <Footer />
                          </>
                        }
                      }
                    })()
                  }
                </>
            }
          </>
          : null
      }
      <Head>

        <link rel="apple-touch-icon" sizes="76x76" href={`${process.env.hostBaseUrl}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.hostBaseUrl}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.hostBaseUrl}/favicon-16x16.png`} />
        <link rel="mask-icon" href={`${process.env.hostBaseUrl}/safari-pinned-tab.svg`} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="icon" type="image/png" sizes="192x192" href={`${process.env.hostBaseUrl}/android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.hostBaseUrl}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="48x48" href={`${process.env.hostBaseUrl}/favicon-48x48.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`${process.env.hostBaseUrl}/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.hostBaseUrl}/favicon-16x16.png`} />

        <link rel="apple-touch-icon" href={`${process.env.hostBaseUrl}/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="57x57" href={`${process.env.hostBaseUrl}/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`${process.env.hostBaseUrl}/apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`${process.env.hostBaseUrl}/apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`${process.env.hostBaseUrl}/apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`${process.env.hostBaseUrl}/apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`${process.env.hostBaseUrl}/apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`${process.env.hostBaseUrl}/apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.hostBaseUrl}/apple-icon-180x180.png`} />

        <link rel="mask-icon" href={`${process.env.hostBaseUrl}/logo.svg`} color="orange" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={`${process.env.hostBaseUrl}/ms-icon-144x144.png`} />


        {(() => {
          if (router && router.pathname === '/404') {
            return (
              null
            )
          }
          else if (router && router.query) {

            if (router.query.hasOwnProperty('serviceName')) {
              return (
                <>
                  <link rel="alternate" hrefLang={lang} href={process.env.hostBaseUrl + '/' + router.query.serviceName} />
                  <link rel="canonical" href={process.env.hostBaseUrl + "/" + router.query.serviceName} />
                </>
              )
            }
            else {
              return (
                <>
                  <link rel="alternate" hrefLang={lang} href={process.env.hostBaseUrl + (router ? (router.pathname == '/' ? '' : router.pathname) : '')} />
                  <link rel="canonical" href={process.env.hostBaseUrl + (router.query && router.query.user_name ? router.asPath : router.pathname)} />
                </>
              )
            }
          }
        })()}

      </Head>

    </div>
  );
};

export default Layout;

function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

