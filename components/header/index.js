import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';

//helper
import { ukApiHelper } from "../../helper/apiHelper";
import { jwtDecode } from "../../helper/jwtHelper";

// reactstrap
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from "reactstrap";

// components
const Img = dynamic(() => import('../Common/image'));
// import Img from "../Common/image";

// scss
import headerCss from "./header.scss";

// img
import logo from "../../public/Cheapestessay.webp";

function Header() {
  let data = [
    {
      url: "",
      link: "Services",
      ismore: true,
      subLink: [],
    },
    { url: "/how-it-works", link: "How it Works" },
    {
      url: "",
      link: "Writing Tools",
      ismore: true,
      subLink: [
        { link: "Free Plagiarism Checker", url: "/tools/free-plagiarism-checker", type: "new" }
      ],
    },
    {
      url: "",
      link: "About",
      ismore: true,
      subLink: [
        { url: "/about-us", link: "About" },
        { url: "/top-writers", link: "Writers" },
        { url: "/reviews", link: "Reviews" },
        { url: "/price", link: "Pricing" },
      ],
    },
    { url: "/contact-us", link: "Contact" },
  ];

  let menus = useRef(data);

  const [isLogin, setIsLogin] = useState(false);
  const [menuData, setMenuData] = useState([]);

  // get route
  const router = useRouter();
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      // console.log("scroll");
      const scrollCheck = window.scrollY > 50
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  useEffect(() => {
    getSubMenu()
  }, []);

  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      const item = JSON.parse(user);
      const now = new Date();
      var decodeToken = item ? jwtDecode(item.value) : null
      if (decodeToken && decodeToken.exp && (decodeToken.exp * 1000) >= now.getTime() && now.getTime() <= item.expiry) {
        setIsLogin(true);
      } else {
        localStorage.removeItem("token");
        setIsLogin(false);
      }
    } else {
      setIsLogin(false);
    }

    if (localStorage.getItem('removeBanner')) {
      // console.log("false");
      if (localStorage.getItem('removeBanner') === true) {
        localStorage.setItem('removeBanner', false)
        setShowBanner(true)
      }
      else {
        setShowBanner(false)
      }
    }
    else {
      // console.log("true");
      setShowBanner(true)
    }

  });
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

  const getSubMenu = async () => {

    ukApiHelper("subMenu", "GET", null, null)
      .then((res) => {
        var menuArr = []
        if (res.data.status) {

          var submenu = [];
          (res.data.data).map((info) => {
            submenu.push({
              link: info.display_text, url: "/" + info.file_name
            })
          })

          var menuList = data;
          menuList.some(function (obj) {
            if (obj.link && obj.link === 'Services') {
              //change the value here
              obj.subLink = submenu;
              obj.subLink.push({ link: "All Services", url: "/services", className: "btn secondary-btn" })
              return true;    //breaks out of he loop
            }
          });

          menuArr = menuList
          data = menuList
          menus.current = menuList
        } else {
          menuArr = data
        }

        let cur_route = router.asPath;
        let c_data = menuArr;
        let cRoute = c_data.find((element) => element.url === cur_route);
        if (cRoute) {
          cRoute.isActive = true;
        } else {
          let i = 0;
          c_data.forEach((element) => {
            if (c_data[i].subLink) {
              if (c_data[i].url === cur_route) {
                c_data[i].isActive = true;
              }
              let c_route = c_data[i].subLink.find((e1) => e1.url === cur_route);
              if (c_route) {
                c_data[i].isActive = true;
              }
            }
            i++;
          });
        }
        menus.current = c_data;
        setMenuData(c_data)
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const RemoveBanner = () => {
    localStorage.setItem('removeBanner', true)
    setShowBanner(false)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: headerCss }}></style>
      <div id="navbar" className={`top-navbar ${scroll ? "navbarScroll" : null}`}>
        {showBanner ?
          <div className="noticeBanner">
            <div className="container">
              <div className="close" onClick={RemoveBanner}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.4895 1.98975L13.4895 13.9897" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.6567 2L7.99988 7.65685" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.65649 14L7.65649 8" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="content">
                <span className="text3">New looks. same us.</span>
                <span className="msg text-capitalize">say hi to all new</span>
                <div className="noticeBannerBlock d-md-inline-block d-none">
                  <Img src={logo} alt="Notice Banner" width="28" height="28" title="Notice Banner" />
                  <span className="text1">Cheapest</span>
                  <span className="text2">Essay</span>
                </div>
              </div>
            </div>
          </div>
          : null}
        {/* Navbar */}
        <Navbar expand="md" className={scroll ? "scroll" : null}>
          <div className="container">
            <NavbarBrand
              href={process.env.hostBaseUrl}
              onClick={
                router.pathname === "/" ? (e) => e.preventDefault() : null
              }
            >
              <div className="d-none d-md-block">
                Cheapest<span>Essay</span>
              </div>
              <div className="d-md-none">
                <img src={logo} alt="logo" title="Logo" />
              </div>
            </NavbarBrand>
            <div className="disNavRight d-flex">
              {isLogin ? (
                <NavLink
                  href={`${process.env.hostBaseUrl}/my-orders`}
                  className="btn outlineSecondaryBtn d-block d-lg-none"
                >
                  My Account
                </NavLink>
              ) : (
                <NavLink
                  href={`${process.env.hostBaseUrl}/login`}
                  className="btn outlineSecondaryBtn d-block d-lg-none"
                >
                  Login
                </NavLink>
              )}
              <a
                href={`${process.env.hostBaseUrl}/order`}
                className="btn secondary-btn d-lg-none"
              >
                Order Now
              </a>
            </div>
            <Collapse isOpen={isOpen} navbar className="d-none d-lg-block">
              <Nav className="m-auto" navbar>
                {menus && menus.current &&
                  menus.current.map(function (item, link) {
                    return (
                      <NavItem key={link}>
                        {item.ismore ? (
                          <>
                            <UncontrolledDropdown>
                              <div className="btn btn-secondary">
                                <NavLink
                                  href={
                                    item.url
                                      ? `${process.env.hostBaseUrl}${item.url}`
                                      : "#"
                                  }
                                  className={
                                    item.isActive ? "active" : ""
                                  }
                                  onClick={item.url === "" ? (e) => e.preventDefault() : null}
                                >
                                  {item.link}
                                </NavLink>
                              </div>
                              <DropdownMenu>
                                {item.subLink && item.subLink.map(function (subitem, list) {
                                  return (
                                    <div className="dropdown-item" key={list}>
                                      <NavLink
                                        href={`${process.env.hostBaseUrl}${subitem.url}`}
                                        className={subitem.className}
                                        title={subitem.link}
                                      >
                                        {subitem.link}
                                        {subitem.type ? <div className="lbl">{subitem.type}</div> : null }
                                      </NavLink>
                                    </div>
                                  );
                                })}
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </>
                        ) : (
                          <NavLink
                            className={item.isActive ? "active" : ""}
                            href={`${process.env.hostBaseUrl}${item.url}`}
                          >
                            {item.link}
                          </NavLink>
                        )}
                      </NavItem>
                    );
                  })}
              </Nav>
              <form className="d-flex header-button position-relative">
                {isLogin ? (
                  <a
                    href={`${process.env.hostBaseUrl}/my-orders`}
                    className="btn outline-btn d-none d-lg-block"
                  >
                    My Account
                  </a>
                ) : (
                  <a
                    href={`${process.env.hostBaseUrl}/login`}
                    className="btn outline-btn d-none d-lg-block"
                  >
                    Login
                  </a>
                )}
                <a
                  href={`${process.env.hostBaseUrl}/order`}
                  className="btn secondary-btn"
                >
                  Order Now
                </a>
              </form>
            </Collapse>
          </div>
        </Navbar>
      </div>
      <div onClick={toggle} className={`d-lg-none d-md-block navbar-toggler ${!showBanner ? "removeBanner" : ""}`}>
        <div className="navbar-toggler-icon open">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isOpen ? (
        <div className="sidebarOverlay">
          <div ref={wrapperRef}>
            <Collapse isOpen={isOpen} navbar className="d-lg-none d-md-block">
              <Nav className="m-auto" navbar>
                {menus && menus.current &&
                  menus.current.map(function (item, link) {
                    return (
                      <NavItem key={link}>
                        {item.ismore ? (
                          <>
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className={
                                  item.isActive ? "active" : ""
                                }
                              >
                                <NavLink
                                  href={
                                    item.url
                                      ? `${process.env.hostBaseUrl}${item.url}`
                                      : "#"
                                  }
                                  onClick={item.url === "" ? (e) => e.preventDefault() : null}

                                >
                                  {item.link}
                                </NavLink>
                              </DropdownToggle>
                              <DropdownMenu>
                                {item.subLink && item.subLink.length > 0 ?
                                  item.subLink.map(function (subitem, list) {
                                    return (
                                      <DropdownItem key={list}>
                                        <NavLink
                                          href={`${process.env.hostBaseUrl}${subitem.url}`}
                                        >
                                          {subitem.link}
                                          {subitem.type ? <div className="lbl">{subitem.type}</div> : null }
                                        </NavLink>
                                      </DropdownItem>
                                    );
                                  }) :
                                  null}
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </>
                        ) : (
                          <NavLink
                            className={item.isActive ? "active" : ""}
                            href={`${process.env.hostBaseUrl}${item.url}`}
                            onClick={item.url === "" ? (e) => e.preventDefault() : null}
                          >
                            {item.link}
                          </NavLink>
                        )}
                      </NavItem>
                    );
                  })}
              </Nav>
              <form className="d-flex header-button">
                {isLogin ? (
                  <a
                    href={`${process.env.hostBaseUrl}/logout`}
                    className="btn outlineSecondaryBtn d-lg-block loginActionBtn"
                  >
                    Logout
                  </a>
                ) : (
                  <a
                    href={`${process.env.hostBaseUrl}/login`}
                    className="btn outlineSecondaryBtn d-lg-block loginActionBtn"
                  >
                    Login
                  </a>
                )}
              </form>
              <div className="download">
                <ul className="d-flex justify-content-center align-items-center">
                  <li>
                    <a href="https://apps.apple.com/us/app/cheapest-custom-writing-papers/id1447217562" target="_blank" rel="noreferrer">
                      <Img src="/app-store.webp" alt="app store" width={110} height={33} title="Appstore" />
                    </a>
                  </li>
                  <li className="ms-2">
                    <a href="https://play.google.com/store/apps/details?id=com.cheapestessay.service" target="_blank" rel="noreferrer">
                      <Img src="/google-play.webp" alt="google play" width={110} height={33} title="GooglePlay" />
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </div>
          <div className="navbar-toggler-icon close">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Header;

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
