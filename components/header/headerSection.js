import React, { Component } from "react";
import Router from "next/router";

import { serviceLinks } from "./data";

// API and JWT helper
import { apiHelper } from "../../helper/apiHelper";
import { jwtDecode } from "../../helper/jwtHelper";

// Toaster
import ReactToastifyCss from "react-toastify/dist/ReactToastify.min.css";

import moment from "moment-timezone";
import UnlockOrder from "./unlockOrder";

// reactstrap
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalBody
} from "reactstrap";

// component
import HeaderRating from "./rating";

// scss
import headerCss from "./header.scss";

// Html Parser
import parse from "html-react-parser";

class Index extends Component {

  _unmounted = false;

  constructor() {
    super();
    this.state = {
      writeId: 3,
      serviceId: 1,
      deadline: 19,
      duration: 'Days',
      deadlineLabel: "July 11, 2021 3:40 AM",
      wordId: 1,
      couponCode: '',
      appliedCouponToken: false,
      isFirstOrder: true,
      dropdownOpen: false,
      orderData: [],
      writingDropdown: [],
      writingdropdownOpen: false,
      writeValue: 'Writing',
      servicedropdownOpen: false,
      serviceDropdown: [],
      otherServiceDropdown: [],
      serviceValue: "",
      datedropdownOpen: false,
      dateDropdown: [],
      dateValue: '',
      worddropdownOpen: false,
      wordDropdown: [],
      wordValue: "280 words / 1 page",
      curLink: "home",
      // serviceData: null,
      curUrl: '',
      watchVideo: false
    }
  }

  componentDidMount() {

    // Get data of Service Type
    this.getServiceType();

    // Get All papers
    this.getAllPapers();

    // Get Deadline format
    this.getDeadlineFormat();

    // Get Pages
    this.getPages();

    // get coupen code from URL
    var coupon = '';
    if (Router && Router.router && Router.router.query) {
      let ccode = Router.router.query.discount_code || Router.router.query.code;
      if (ccode && ccode !== '') {
        coupon = ccode;
      } else {
        const loginToken = localStorage.getItem('token');
        var convertedToken = loginToken ? JSON.parse(loginToken) : null;
        var decodeToken = convertedToken && convertedToken.value ? jwtDecode(convertedToken.value) : null
        if (decodeToken && decodeToken.account && decodeToken.account.orders_count) {
          if (decodeToken.account.orders_count <= 0) {
            coupon = "SIGNUP15";
          } else {
            this.setState({ isFirstOrder: false })
          }
        } else {
          coupon = "SIGNUP15";
        }
      }

    }

    this.setState({ couponCode: coupon }, () => {
      this.setOrderData();
    })

    if (Router && Router.router && Router.router.pathname) {
      this.setState({
        curUrl: Router.router.pathname
      })
    }

  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.serviceData !== this.props.serviceData) {
    //   this.setState({
    //     serviceData: this.props.serviceData
    //   })
    // }
  }

  // API calling of get service type
  getServiceType = async () => {
    apiHelper("displayservicetype", "GET", null, null)
      .then((res) => {
        if (res.data.status) {
          const data = res.data.data;
          this.setState({ writingDropdown: data });
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // API calling of get All papers
  getAllPapers = async () => {

    apiHelper("displaypapertypes", "GET", null, null).then((res) => {
      if (res.data.status) {
        const data = res.data.data;

        var curr_paper = this.props.serviceData && this.props.serviceData.paper_id ? parseInt(this.props.serviceData.paper_id) : 0
        var filtered = data.popular_papers.filter(item => item.paper_id === curr_paper);
        if (filtered && filtered.length === 0) {
          filtered = data.other_papers.filter(item => item.paper_id === curr_paper);
        }

        var selectedService = filtered && filtered.length === 0 ? data.popular_papers[0] : filtered[0]

        this.setState({
          serviceDropdown: data.popular_papers,
          otherServiceDropdown: data.other_papers,
          serviceValue: selectedService.paper_name,
          serviceId: selectedService.paper_id
        }, () => {
          this.setOrderData()
        })
      }
    })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // API calling of get Deadline format
  getDeadlineFormat = async () => {
    var localTime = moment.tz.guess();

    var timezone = "Europe/London";
    var userToken = localStorage.getItem("token");
    if (userToken && userToken !== "") {
      userToken = JSON.parse(userToken);
      var decodeToken = jwtDecode(userToken.value);
      if (decodeToken && decodeToken.timezone && decodeToken.timezone !== "") {
        timezone = decodeToken.timezone;
      }
    }

    const formData = new FormData();
    formData.append("timezone", localTime ? localTime : timezone);

    apiHelper("displaydealineformat", "POST", formData, null)
      .then((res) => {
        if (res.data.status) {
          const data = res.data.data;
          var date_val = data[data.length - 1];

          this.setState({
            dateDropdown: data,
            dateValue: `${date_val.deadline} ${date_val.duration} / ${date_val.deadline_label}`
          })

          localStorage.setItem(
            "calculator_deadline",
            JSON.stringify({
              digit: date_val.deadline,
              durations: date_val.duration,
              label: `${date_val.deadline} ${date_val.duration} / ${date_val.deadline_label}`,
            })
          );
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // API calling of get Pages
  getPages = async () => {
    apiHelper("displaypages", "POST", null, null)
      .then((res) => {
        if (res.data.status) {
          const data = res.data.data;
          this.setState({
            wordDropdown: data
          })
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  setOrderData = async () => {

    const { writeId, serviceId, wordId, deadline, duration, deadlineLabel, couponCode } = this.state

    const formData = new FormData();
    formData.append("service", writeId);
    formData.append("paper", serviceId);
    formData.append("page", wordId);
    formData.append("deadline", deadline);
    formData.append("duration", duration);
    formData.append("deadlineLable", deadlineLabel);
    formData.append("coupon_code", couponCode);

    apiHelper("setOrderV1", "POST", formData, null)
      .then((res) => {
        if (res.data.status) {
          const token = res.data.data.order_token;
          const data = jwtDecode(token);

          var applyCoupon = false;
          if (data && data.coupon_code !== '' && data.couponDisc !== '' && parseFloat(data.couponDisc) > 0) {
            applyCoupon = true
          }
          this.setState({ orderData: data, appliedCouponToken: applyCoupon })
          localStorage.setItem("orderToken", token);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  toggle = () => { this.setState({ dropdownOpen: !this.state.dropdownOpen }) };
  writingToggle = () => { this.setState({ writingdropdownOpen: !this.state.writingdropdownOpen }) };
  serviceToggle = () => { this.setState({ servicedropdownOpen: !this.state.servicedropdownOpen }) };
  dateToggle = () => { this.setState({ datedropdownOpen: !this.state.datedropdownOpen }) };
  wordToggle = () => { this.setState({ worddropdownOpen: !this.state.worddropdownOpen }) };

  changeValueHandler = (id, val) => {
    localStorage.setItem(
      "calculator_service",
      JSON.stringify({ id: id, label: val })
    );

    this.setState({
      writeValue: val,
      writeId: id
    }, () => {
      this.setOrderData();
    })
  };

  changeServiceHandler = (id, val) => {
    localStorage.setItem(
      "calculator_pages",
      JSON.stringify({ value: id, label: val })
    );

    this.setState({
      serviceValue: val,
      serviceId: id
    }, () => {
      this.setOrderData();
    })

  };

  changeDateHandler = (digit, durations, label) => {
    localStorage.setItem(
      "calculator_deadline",
      JSON.stringify({ digit: digit, durations: durations, label: label })
    );

    this.setState({
      dateValue: `${digit} ${durations} / ${label}`,
      deadline: digit,
      duration: durations,
      deadlineLabel: label
    }, () => {
      this.setOrderData()
    })
  };

  changeWordHandler = (id, val) => {
    localStorage.setItem(
      "calculator_word",
      JSON.stringify({ id: id, label: val })
    );

    this.setState({
      wordValue: val,
      wordId: id
    }, () => {
      this.setOrderData()
    })
  };

  // order submit function
  orderSubmitHandler = () => {
    Router.router.push(`${process.env.hostBaseUrl}/order`)
  };

  toggleClass = (link) => {
    document.getElementById("id_" + this.state.curLink).classList.remove("active");
    document.getElementById("id_" + link).classList.add("active");
    this.setState({
      curLink: link
    })
  };

  storeRightData = (key, value) => {
    var rightData = localStorage.getItem("orderRight");
    let item = {};
    if (rightData && rightData !== "") {
      item = JSON.parse(rightData);
    }
    item[key] = value;
    localStorage.setItem("orderRight", JSON.stringify(item));
  };

  watchVideoToggle() {
    this.setState({
      watchVideo: !this.state.watchVideo
    });
  }


  render() {

    const { writingdropdownOpen, writeValue, writingDropdown,
      servicedropdownOpen, serviceValue, serviceDropdown, otherServiceDropdown,
      datedropdownOpen, dateValue, dateDropdown,
      worddropdownOpen, wordValue, wordDropdown,
      appliedCouponToken, orderData, isFirstOrder
    } = this.state;

    var serviceData = this.props.serviceData && this.props.serviceData ? this.props.serviceData : "";

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
        <style dangerouslySetInnerHTML={{ __html: headerCss }}></style>
        {/* Navbar */}
        <div className="top-navbar">
          {/* header */}
          <header>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cheapest-detail">
                    {(() => {
                      return (
                        <h1 className="title">
                          {serviceData && serviceData.page_contents && serviceData.page_contents.initial_content ?
                            parse(serviceData.page_contents.initial_content) : ''}
                        </h1>
                      );
                    })()}
                    {/* description */}
                    {(() => {
                      return (
                        <p className="desc">
                          {serviceData &&
                            serviceData.page_contents.initial_pitch_header}
                        </p>
                      );
                    })()}
                    <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start">
                      <a className="btn secondary-btn " href={`${process.env.hostBaseUrl}/order`}>Write my paper</a>
                      <div className="playVideo ms-5 d-flex align-items-center" onClick={this.watchVideoToggle = this.watchVideoToggle.bind(this)}>
                        <div className="icon">
                          <svg id="play-circle" width="54" height="54" viewBox="0 0 16 16">
                            <g id="Ellipse_1" data-name="Ellipse 1" fill="#f8fbfe" stroke="#fbd501" strokeWidth="0.5">
                              <circle cx="8" cy="8" r="8" stroke="none" />
                              <circle cx="8" cy="8" r="7.75" fill="none" />
                            </g>
                            <path id="Path_2" data-name="Path 2" d="M6.271,5.055a.5.5,0,0,1,.52.038l3.5,2.5a.5.5,0,0,1,0,.814l-3.5,2.5A.5.5,0,0,1,6,10.5v-5a.5.5,0,0,1,.271-.445Z" fill="#fbd501" />
                          </svg>
                        </div>
                        <span className="ms-3">Watch Video</span>
                      </div>
                    </div>
                    <Modal isOpen={this.state.watchVideo} toggle={this.watchVideoToggle} centered className="watchVideoDemo" size="lg">
                      <ModalBody>
                        <div className="how-to-order-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/JEunms6Q_t4?autoplay=1"
                            frameBorder="0"
                            allowfullscreen="allowfullscreen"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            title="CheapestEssay Pitch"
                            allow='autoplay'
                          ></iframe>
                        </div>
                      </ModalBody>
                    </Modal>
                    <ul className="list d-none d-lg-block">
                      {(() => {
                        return (
                          <>
                            {serviceData && serviceData.guarantees_header_section && serviceData.guarantees_header_section.length > 0 &&
                              serviceData.guarantees_header_section.map(
                                (data, index) => {
                                  return <li key={index}>{data.entry}</li>;
                                }
                              )}
                          </>
                        );
                      })()}
                    </ul>
                  </div>
                  <div className="bottom-star d-none d-lg-block">
                    <HeaderRating />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header-right">
                    <div className="form-bg-img"></div>
                    <div className="order-form">
                      <div className="title">calculate your order</div>
                      <div className="calculate-dropdown">
                        <div className="form-group mb-0">
                          <Dropdown
                            isOpen={writingdropdownOpen}
                            toggle={this.writingToggle}
                          >
                            <DropdownToggle className="select-dropdown">
                              {writeValue}
                            </DropdownToggle>
                            <DropdownMenu>
                              {writingDropdown.map((writing, idx) => (
                                <DropdownItem
                                  key={idx}
                                  onClick={() =>
                                    this.changeValueHandler(
                                      writing.type_of_service_id,
                                      writing.type_of_service
                                    )
                                  }
                                >
                                  <span>{writing.type_of_service}</span>
                                </DropdownItem>
                              ))}
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                        <div className="form-group mb-0">
                          <Dropdown
                            isOpen={servicedropdownOpen}
                            toggle={this.serviceToggle}
                          >
                            <DropdownToggle className="select-dropdown">
                              {" "} {serviceValue} {" "}
                            </DropdownToggle>
                            <DropdownMenu>
                              <span>Popular Papers</span>
                              {serviceDropdown.map((service, idx) => (
                                <DropdownItem
                                  key={idx}
                                  onClick={() =>
                                    this.changeServiceHandler(
                                      service.paper_id,
                                      service.paper_name
                                    )
                                  }
                                >
                                  <span>{service.paper_name}</span>
                                </DropdownItem>
                              ))}
                              <span>Other Papers</span>
                              {otherServiceDropdown.map((service, idx) => (
                                <DropdownItem
                                  key={idx}
                                  onClick={() =>
                                    this.changeServiceHandler(
                                      service.paper_id,
                                      service.paper_name
                                    )
                                  }
                                >
                                  <span>{service.paper_name}</span>
                                </DropdownItem>
                              ))}
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                        <div className="form-group mb-0">
                          <Dropdown isOpen={datedropdownOpen} toggle={this.dateToggle}>
                            <DropdownToggle className="select-dropdown">
                              {dateValue}
                            </DropdownToggle>
                            <DropdownMenu>
                              {dateDropdown.map((date, idx) => (
                                <DropdownItem
                                  key={idx}
                                  onClick={() =>
                                    this.changeDateHandler(
                                      date.deadline,
                                      date.duration,
                                      date.deadline_label
                                    )
                                  }
                                >
                                  <span>{`${date.deadline} ${date.duration} / ${date.deadline_label}`}</span>
                                </DropdownItem>
                              ))}
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                        <div className="form-group mb-0">
                          <Dropdown isOpen={worddropdownOpen} toggle={this.wordToggle}>
                            <DropdownToggle className="select-dropdown">
                              {wordValue}
                            </DropdownToggle>
                            <DropdownMenu>
                              {wordDropdown.map((word, idx) => (
                                <DropdownItem
                                  key={idx}
                                  onClick={() =>
                                    this.changeWordHandler(word.id, word.Pages)
                                  }
                                >
                                  <span>{word.Pages}</span>
                                </DropdownItem>
                              ))}
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>

                      <div
                        className={`standard-price ${appliedCouponToken
                          ? "strike-text"
                          : ""
                          }`}
                      >
                        Standard Price:
                        <span>
                          $
                          {orderData.price_without_discount
                            ? orderData.price_without_discount
                            : "8.95"}
                        </span>
                      </div>

                      {isFirstOrder || (appliedCouponToken) ?
                        <div className="pricebox">
                          {appliedCouponToken ? (
                            <span className="discount-span">
                              Discounted Price: $
                              {orderData.totalPrice ? orderData.totalPrice : "7.61"}
                            </span>
                          ) : (
                            isFirstOrder ?
                              <>
                                <div className="details">
                                  <div className="left">
                                    <div className="text1">
                                      Special Price (LOCKED)
                                    </div>
                                    <div className="text2">
                                      Save On Your First Order
                                    </div>
                                  </div>
                                  <div className="right">
                                    <span className="price">
                                      {/* ${orderData.price ? orderData.price : "7.61"} */}
                                      $
                                      {orderData.price
                                        ? (
                                          parseFloat(orderData.price) -
                                          parseFloat(orderData.price * 0.15)
                                        ).toFixed(2)
                                        : "7.61"}
                                    </span>
                                  </div>
                                </div>
                                <UnlockOrder
                                  write={writeValue}
                                  paper={serviceValue}
                                  pages={wordValue}
                                  date={dateValue}
                                />
                              </>
                              : null
                          )}
                        </div> :
                        null}

                      <div className="text-center bottomPart">
                        <button
                          className="btn order-btn"
                          onClick={this.orderSubmitHandler}
                        >
                          order now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cheapest-detail">
              <ul className="list d-md-block d-lg-none">
                {(() => {
                  if (this.state.curUrl !== '' && (this.state.curUrl === "/" || this.state.curUrl === "/index")) {
                    return (
                      <>
                        <li>Cheapest in the market</li>
                        <li>Your data is 100% safe</li>
                        <li>Plagiarism free work</li>
                        <li>24/7 customer support</li>
                      </>
                    );
                  } else {
                    return (
                      <>
                        {serviceData && serviceData.guarantees_header_section && serviceData.guarantees_header_section.length > 0 &&
                          serviceData.guarantees_header_section.map(
                            (data, index) => {
                              return <li key={index}>{data.entry}</li>;
                            }
                          )}
                      </>
                    );
                  }
                })()}
              </ul>
            </div>
            <div className="bottom-star d-md-block d-lg-none">
              <HeaderRating />
            </div>
          </header>
          <div className="header-bottom d-none d-sm-block">
            <div className="container">
              {(() => {
                if (this.state.curUrl !== '' && (this.state.curUrl === "/" || this.state.curUrl === "/index")) {
                  return (
                    <ul className="list">
                      {serviceLinks.map(function (item, link) {
                        return (
                          <li key={link}>
                            <a className="list-link" href={`${item.href}`}>
                              <span>{item.link}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  );
                } else {
                  return (
                    <ul className="serviceLink d-flex">
                      <li
                        id="id_home"
                        className="active"
                        onClick={() => this.toggleClass("home")}
                      >
                        <a href="#home" className="service-links">
                          <svg
                            width="31"
                            height="30"
                            viewBox="0 0 31 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M29.203 13.055L16.9555 0.807509C16.6999 0.550739 16.396 0.347168 16.0613 0.208566C15.7266 0.0699636 15.3677 -0.000921196 15.0055 9.03823e-06C14.2667 9.03823e-06 13.5742 0.287509 13.0555 0.807509L0.817965 13.0438L0.807965 13.055C0.292493 13.5733 0.00314331 14.2746 0.00314331 15.0056C0.00314331 15.7366 0.292493 16.4379 0.807965 16.9563C1.30422 17.4525 1.95047 17.73 2.64297 17.765H3.20796V26.7675C3.21027 27.6241 3.55158 28.445 4.15729 29.0507C4.763 29.6564 5.58386 29.9977 6.44046 30H11.2305C11.4632 30 11.6864 29.9076 11.851 29.743C12.0155 29.5784 12.108 29.3552 12.108 29.1225V22.0588C12.108 21.25 12.7655 20.5813 13.5855 20.5813H16.413C17.2217 20.5813 17.8905 21.2388 17.8905 22.0588V29.1225C17.8905 29.6075 18.283 30 18.768 30H23.558C24.4146 29.9977 25.2354 29.6564 25.8411 29.0507C26.4468 28.445 26.7882 27.6241 26.7905 26.7675V17.765H27.2405C27.9792 17.765 28.6717 17.4763 29.1905 16.9563C29.4479 16.7012 29.6524 16.3978 29.7924 16.0635C29.9324 15.7292 30.005 15.3706 30.0062 15.0082C30.0074 14.6458 29.937 14.2868 29.7992 13.9516C29.6613 13.6164 29.4587 13.3118 29.203 13.055ZM27.9567 15.7213C27.8629 15.8159 27.7514 15.8912 27.6285 15.9427C27.5056 15.9941 27.3737 16.0208 27.2405 16.0213H25.913C25.7977 16.0213 25.6836 16.044 25.5772 16.0881C25.4707 16.1322 25.374 16.1968 25.2925 16.2783C25.211 16.3598 25.1464 16.4565 25.1023 16.563C25.0582 16.6694 25.0355 16.7835 25.0355 16.8988V26.7913C25.0355 27.5988 24.378 28.2688 23.558 28.2688H19.6455V22.0813C19.6428 21.2249 19.3014 20.4043 18.6957 19.7989C18.09 19.1935 17.2694 18.8523 16.413 18.85H13.5867C12.7303 18.8523 11.9097 19.1935 11.304 19.7989C10.6983 20.4043 10.3569 21.2249 10.3542 22.0813V28.2688H6.45422C6.06234 28.2684 5.6866 28.1127 5.40939 27.8357C5.13217 27.5587 4.97613 27.1831 4.97546 26.7913V16.8988C4.97546 16.666 4.88301 16.4428 4.71845 16.2783C4.55389 16.1137 4.33069 16.0213 4.09797 16.0213H2.73672C2.60797 16.0218 2.48042 15.9966 2.36152 15.9472C2.24262 15.8979 2.13475 15.8253 2.04421 15.7338C1.95094 15.6405 1.87694 15.5299 1.82645 15.408C1.77597 15.2862 1.74998 15.1556 1.74998 15.0238C1.74998 14.8919 1.77597 14.7613 1.82645 14.6395C1.87694 14.5177 1.95094 14.407 2.04421 14.3138L14.2905 2.05501C14.3848 1.96192 14.4967 1.88846 14.6197 1.8389C14.7426 1.78933 14.8742 1.76464 15.0067 1.76626C15.2717 1.76626 15.5255 1.87001 15.7217 2.05376L27.958 14.2913C28.1461 14.4817 28.2515 14.7386 28.2515 15.0063C28.2515 15.2739 28.1461 15.5308 27.958 15.7213H27.9567Z"
                              fill="white"
                            />
                          </svg>
                          <span>Home</span>
                        </a>
                      </li>
                      <li id="id_whyus" onClick={() => this.toggleClass("whyus")}>
                        <a href="#whyus" className="service-links">
                          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_896:2111)">
                              <path d="M20.5125 29.9165H20.4875C20.295 29.9144 20.108 29.8516 19.9532 29.7372C19.7984 29.6227 19.6835 29.4624 19.625 29.279L15.65 17.3415C15.5948 17.176 15.5867 16.9984 15.6264 16.8285C15.6661 16.6586 15.7522 16.503 15.875 16.379C16.125 16.129 16.5 16.0415 16.8375 16.154L28.775 20.129C29.15 20.254 29.4 20.604 29.4125 20.9915C29.425 21.3915 29.175 21.7415 28.8125 21.8915L23.45 23.954L21.3875 29.304C21.25 29.679 20.9 29.9165 20.5125 29.9165ZM18.0125 18.529L20.575 26.204L21.85 22.8915C21.95 22.6415 22.1375 22.454 22.3875 22.354L25.7 21.079L18.0125 18.529Z" fill="white" />
                              <path d="M15 30.5166C6.725 30.5166 0 23.7916 0 15.5166C0 7.2416 6.725 0.516602 15 0.516602C23.275 0.516602 30 7.2416 30 15.5166C30 16.1291 29.9625 16.7541 29.875 17.3541L28.0125 17.1041C28.0875 16.5791 28.1125 16.0416 28.1125 15.5166C28.1125 8.2791 22.225 2.3916 14.9875 2.3916C7.75 2.3916 1.875 8.2791 1.875 15.5166C1.875 22.7541 7.7625 28.6416 15 28.6416C15.5375 28.6416 16.075 28.6041 16.5875 28.5416L16.8375 30.4041C16.2375 30.4791 15.625 30.5166 15 30.5166Z" fill="white" />
                              <path d="M14.625 24.2541C12.37 24.1636 10.2378 23.2028 8.67619 21.5736C7.11454 19.9444 6.24494 17.7734 6.24999 15.5166C6.24999 10.6916 10.175 6.76662 15 6.76662C17.2568 6.76157 19.4277 7.63118 21.057 9.19282C22.6862 10.7545 23.647 12.8866 23.7375 15.1416L21.8625 15.2166C21.7913 13.4458 21.0367 11.7715 19.757 10.5454C18.4773 9.31935 16.7722 8.63696 15 8.64162C13.1776 8.64493 11.4309 9.37032 10.1423 10.6589C8.85368 11.9475 8.1283 13.6943 8.12499 15.5166C8.12033 17.2889 8.80271 18.9939 10.0288 20.2736C11.2549 21.5533 12.9292 22.308 14.7 22.3791L14.625 24.2541Z" fill="white" />
                              <path d="M12.075 17.8666C11.5375 17.1916 11.25 16.3666 11.25 15.5166C11.25 13.4541 12.9375 11.7666 15 11.7666C15.85 11.7666 16.6625 12.0541 17.35 12.5916L16.1875 14.0541C15.95 13.8666 15.55 13.6291 15.0125 13.6291C13.975 13.6291 13.1375 14.4666 13.1375 15.5041C13.1375 16.0416 13.3625 16.4416 13.5625 16.6791L12.075 17.8666Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_896:2111">
                                <rect width="30" height="30" fill="white" transform="translate(0 0.516602)" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>Why Us</span>
                        </a>
                      </li>
                      <li id="id_offer" onClick={() => this.toggleClass("offer")}>
                        <a href="#offer" className="service-links">
                          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_896:2119)">
                              <path d="M17.8574 9.32324C16.8109 9.32324 15.8164 9.6629 15 10.29C14.1838 9.6629 13.1893 9.32324 12.1426 9.32324C10.887 9.32324 9.70619 9.81236 8.81836 10.7002C7.93053 11.588 7.44141 12.7688 7.44141 14.0245C7.44141 15.2801 7.93053 16.4607 8.81836 17.3488L15 23.5304L21.1816 17.3488C22.0695 16.4607 22.5586 15.2803 22.5586 14.0245C22.5586 12.7686 22.0695 11.588 21.1816 10.7002C20.2936 9.81213 19.113 9.32324 17.8574 9.32324ZM19.9386 16.1059L15 21.0445L10.0614 16.1059C9.50546 15.5497 9.19922 14.8107 9.19922 14.0245C9.19922 13.2383 9.50546 12.499 10.0614 11.943C10.6171 11.3871 11.3564 11.0811 12.1426 11.0811C12.9288 11.0811 13.6681 11.3871 14.2239 11.943C14.2632 11.9822 14.3033 12.025 14.3433 12.0698L15 12.808L15.6567 12.0698C15.6965 12.025 15.7368 11.9824 15.7759 11.943C16.3319 11.3871 17.0712 11.0811 17.8574 11.0811C18.6436 11.0811 19.3826 11.3871 19.9386 11.943C20.4945 12.499 20.8008 13.2383 20.8008 14.0245C20.8008 14.8107 20.4945 15.5497 19.9386 16.1059Z" fill="white" />
                              <path d="M30 15.5166C30 14.7425 29.7526 14.008 29.2857 13.3935C28.9849 12.9966 28.8847 12.4931 29.0103 12.0126C29.2072 11.2649 29.1545 10.4915 28.8583 9.77647C28.5619 9.06122 28.0524 8.47711 27.3857 8.08824C26.9561 7.8367 26.6707 7.40961 26.6029 6.91774C26.4986 6.15167 26.1541 5.45747 25.6066 4.90999C25.0594 4.3625 24.3649 4.01804 23.6 3.91389C23.107 3.84592 22.6799 3.5605 22.429 3.13226C22.0395 2.46416 21.4556 1.95467 20.7404 1.65826C20.3112 1.48065 19.8596 1.39047 19.3977 1.39047C19.0968 1.39047 18.796 1.42938 18.5053 1.50606C18.3721 1.54085 18.235 1.55847 18.0975 1.55847C17.748 1.55847 17.4019 1.4422 17.1245 1.23186C16.5088 0.764023 15.7743 0.516602 15 0.516602C14.2259 0.516602 13.4914 0.764023 12.8767 1.23094C12.5981 1.4422 12.2523 1.55847 11.9025 1.55847C11.7652 1.55847 11.6279 1.54085 11.496 1.50629C11.204 1.42938 10.9035 1.39047 10.6023 1.39047C10.1406 1.39047 9.6888 1.48065 9.25964 1.65826C8.54462 1.95467 7.96051 2.46416 7.57141 3.13089C7.3201 3.5605 6.89301 3.84592 6.40114 3.91367C5.63507 4.01804 4.94064 4.36273 4.39339 4.90999C3.8459 5.45747 3.50143 6.15167 3.39729 6.9166C3.32932 7.40961 3.0439 7.8367 2.61566 8.08755C1.94756 8.47711 1.43806 9.06099 1.14189 9.77625C0.84549 10.4915 0.792847 11.2647 0.989456 12.0113C1.11534 12.4928 1.01509 12.9966 0.715256 13.3921C0.247421 14.008 0 14.7425 0 15.5166C0 16.2907 0.247421 17.0252 0.71434 17.6399C1.01509 18.0366 1.11534 18.5401 0.989685 19.0206C0.792847 19.7683 0.84549 20.5417 1.14166 21.2567C1.43806 21.9722 1.94756 22.5561 2.61429 22.945C3.0439 23.1965 3.32932 23.6234 3.39706 24.1152C3.50143 24.8815 3.8459 25.576 4.39339 26.1232C4.94087 26.6707 5.63507 27.0152 6.39999 27.1193C6.89301 27.1873 7.3201 27.4725 7.57095 27.9009C7.96051 28.5688 8.54439 29.0785 9.25964 29.3747C9.6888 29.5526 10.1406 29.6427 10.6023 29.6427C10.9035 29.6427 11.204 29.6038 11.4947 29.5271C11.6279 29.4924 11.7652 29.4747 11.9025 29.4747C12.252 29.4747 12.5981 29.5908 12.8755 29.8011C13.4912 30.2692 14.2259 30.5166 15 30.5166C15.7743 30.5166 16.5088 30.2692 17.1233 29.8023C17.4019 29.591 17.7477 29.4747 18.0972 29.4747C18.2348 29.4747 18.3719 29.4924 18.504 29.5269C18.796 29.6038 19.0965 29.6427 19.3975 29.6427C19.8594 29.6427 20.3112 29.5526 20.7401 29.3749C21.4554 29.0785 22.0395 28.569 22.4284 27.9023C22.6799 27.4727 23.107 27.1873 23.5989 27.1195C24.3649 27.0152 25.0594 26.6707 25.6066 26.1232C26.1541 25.576 26.4986 24.8815 26.6027 24.1166C26.6707 23.6236 26.9561 23.1965 27.3846 22.9459C28.0524 22.5561 28.5619 21.9722 28.8583 21.257C29.1545 20.5419 29.2072 19.7685 29.0108 19.0219C28.8849 18.5404 28.9849 18.0366 29.2847 17.6411C29.7526 17.0252 30 16.2907 30 15.5166ZM27.8844 16.5782C27.2562 17.4072 27.0467 18.46 27.3104 19.4678C27.4084 19.8409 27.382 20.227 27.2342 20.584C27.0861 20.9413 26.8318 21.2329 26.4974 21.4279C25.5997 21.9537 25.0033 22.8461 24.8611 23.8779C24.809 24.2601 24.6371 24.6069 24.3636 24.8802C24.0903 25.1537 23.7437 25.3258 23.3601 25.378C22.3295 25.5199 21.4371 26.1163 20.9109 27.0152C20.7163 27.3484 20.4247 27.6027 20.0674 27.7508C19.8528 27.8398 19.6273 27.8849 19.3975 27.8849C19.2474 27.8849 19.0972 27.8655 18.9498 27.8266C18.6715 27.7538 18.3847 27.7169 18.0972 27.7169C17.3666 27.7169 16.6436 27.9598 16.0604 28.402C15.7533 28.6354 15.3866 28.7588 14.9998 28.7588C14.6132 28.7588 14.2465 28.6354 13.9382 28.401C13.3559 27.9598 12.6331 27.7169 11.9025 27.7169C11.6151 27.7169 11.3283 27.7538 11.0486 27.827C10.6789 27.9241 10.2873 27.898 9.93233 27.7508C9.57504 27.6027 9.28345 27.3484 9.08844 27.014C8.56293 26.1163 7.67029 25.5199 6.63849 25.3777C6.25626 25.3256 5.90973 25.1537 5.63622 24.8802C5.3627 24.6069 5.19081 24.2601 5.1384 23.8767C4.99649 22.8461 4.40025 21.9537 3.50121 21.4272C3.16795 21.2329 2.91367 20.9413 2.76558 20.584C2.61772 20.2268 2.5914 19.8406 2.68982 19.4664C2.95303 18.46 2.74361 17.4072 2.11464 16.577C1.88118 16.2701 1.75781 15.9034 1.75781 15.5166C1.75781 15.1298 1.88118 14.7631 2.11533 14.455C2.74384 13.6258 2.95326 12.5732 2.68959 11.5654C2.5914 11.1923 2.61795 10.8062 2.76581 10.4489C2.91367 10.0916 3.16818 9.80028 3.50235 9.60527C4.40025 9.07953 4.99649 8.18712 5.13863 7.15532C5.19081 6.77309 5.36293 6.42633 5.63622 6.15305C5.90973 5.87953 6.25626 5.70741 6.63986 5.65523C7.67052 5.51332 8.56293 4.91685 9.08913 4.01804C9.28345 3.68478 9.57504 3.4305 9.93233 3.28241C10.2876 3.13524 10.6771 3.10869 11.05 3.20665C11.3283 3.27943 11.6153 3.31628 11.9025 3.31628C12.6331 3.31628 13.3562 3.07321 13.9394 2.63147C14.2465 2.39778 14.6134 2.27441 15 2.27441C15.3868 2.27441 15.7535 2.39778 16.0616 2.63216C16.6438 3.07321 17.3669 3.31628 18.0975 3.31628C18.3849 3.31628 18.6717 3.27943 18.9512 3.20642C19.3208 3.10915 19.7124 3.13524 20.0674 3.28241C20.4247 3.4305 20.7163 3.68478 20.9116 4.01918C21.4371 4.91685 22.3295 5.51332 23.3613 5.65546C23.7437 5.70764 24.0903 5.87953 24.3636 6.15282C24.6371 6.42633 24.8092 6.77309 24.8614 7.15646C25.0033 8.18712 25.5997 9.07953 26.4986 9.60573C26.8318 9.80028 27.0861 10.0919 27.2342 10.4492C27.382 10.8064 27.4084 11.1923 27.31 11.5668C27.0467 12.5732 27.2562 13.626 27.8854 14.4562C28.1188 14.7631 28.2422 15.13 28.2422 15.5166C28.2422 15.9034 28.1188 16.2701 27.8844 16.5782Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_896:2119">
                                <rect width="30" height="30" fill="white" transform="translate(0 0.516602)" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>Offer</span>
                        </a>
                      </li>
                      <li id="id_reviews" onClick={() => this.toggleClass("reviews")}>
                        <a href="#reviews" className="service-links">
                          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_896:2127)">
                              <path d="M21.8975 15.7628V24.8116C21.8972 25.0399 21.8063 25.2587 21.6449 25.4202C21.4834 25.5816 21.2646 25.6725 21.0363 25.6728H4.3275C4.15683 25.6722 3.98997 25.7232 3.84875 25.8191L1.73375 27.2341V12.1228C1.73441 11.8949 1.82523 11.6766 1.98637 11.5154C2.14751 11.3543 2.36587 11.2635 2.59375 11.2628H15.2588V9.52905H2.59375C1.90656 9.53136 1.24817 9.80537 0.762243 10.2913C0.27632 10.7772 0.00230971 11.4356 3.10767e-06 12.1228V28.8441C-0.00153473 29.0006 0.0399487 29.1546 0.119929 29.2892C0.199909 29.4238 0.315315 29.5339 0.45356 29.6074C0.591804 29.6809 0.747579 29.715 0.903895 29.7061C1.06021 29.6971 1.21106 29.6454 1.34 29.5566L4.58625 27.3941H21.0363C21.7239 27.3921 22.3828 27.118 22.869 26.6318C23.3552 26.1456 23.6293 25.4867 23.6313 24.7991V15.7491H21.8975V15.7616V15.7628Z" fill="white" />
                              <path d="M4.315 16.4504H10.0825C10.1956 16.451 10.3078 16.4292 10.4124 16.3862C10.517 16.3433 10.6121 16.2799 10.6921 16.1999C10.7721 16.12 10.8354 16.0249 10.8784 15.9202C10.9214 15.8156 10.9432 15.7035 10.9425 15.5904C10.9433 15.4771 10.9217 15.3649 10.8788 15.2601C10.8358 15.1553 10.7725 15.0601 10.6925 14.98C10.6125 14.8998 10.5174 14.8364 10.4127 14.7933C10.308 14.7503 10.1957 14.7284 10.0825 14.7291H4.315C4.20177 14.7284 4.08954 14.7503 3.98482 14.7933C3.8801 14.8364 3.78497 14.8998 3.70496 14.98C3.62496 15.0601 3.56166 15.1553 3.51875 15.2601C3.47584 15.3649 3.45417 15.4771 3.455 15.5904C3.455 16.0704 3.83625 16.4504 4.315 16.4504ZM13.155 18.1716H4.315C4.20177 18.1709 4.08954 18.1928 3.98482 18.2358C3.8801 18.2789 3.78497 18.3423 3.70496 18.4225C3.62496 18.5026 3.56166 18.5978 3.51875 18.7026C3.47584 18.8074 3.45417 18.9196 3.455 19.0329C3.455 19.5116 3.83625 19.8929 4.315 19.8929H13.155C13.2683 19.8939 13.3807 19.8723 13.4857 19.8295C13.5906 19.7866 13.686 19.7234 13.7662 19.6433C13.8465 19.5633 13.91 19.4681 13.9532 19.3633C13.9963 19.2585 14.0182 19.1462 14.0175 19.0329C14.0172 18.8043 13.9262 18.5853 13.7644 18.4238C13.6027 18.2623 13.3835 18.1716 13.155 18.1716ZM19.3038 21.6391H4.31625C4.20281 21.6381 4.09031 21.6597 3.9853 21.7026C3.88029 21.7455 3.78486 21.8089 3.70459 21.8891C3.62432 21.9692 3.5608 22.0645 3.51773 22.1695C3.47467 22.2744 3.45292 22.3869 3.45375 22.5004C3.45375 22.9791 3.83625 23.3604 4.31625 23.3604H19.3038C19.4169 23.361 19.529 23.3392 19.6336 23.2962C19.7383 23.2533 19.8334 23.1899 19.9133 23.1099C19.9933 23.03 20.0567 22.9349 20.0996 22.8302C20.1426 22.7256 20.1644 22.6135 20.1638 22.5004C20.1646 22.3871 20.1429 22.2749 20.1 22.1701C20.0571 22.0653 19.9938 21.9701 19.9138 21.89C19.8338 21.8098 19.7387 21.7464 19.6339 21.7033C19.5292 21.6603 19.417 21.6384 19.3038 21.6391ZM26.8525 16.0829L21.7987 13.4266L16.7463 16.0829L17.7175 10.4516L13.6225 6.46785L19.2788 5.64285L21.8113 0.516602L24.3438 5.6441L30 6.4666L25.9063 10.4504L26.8525 16.0816V16.0829ZM21.7987 11.6191L24.7375 13.1566L24.1725 9.88535L26.545 7.57285L23.2625 7.0941L21.8 4.1191L20.3363 7.0941L17.0538 7.5741L19.4263 9.8866L18.8613 13.1554L21.7987 11.6191Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_896:2127">
                                <rect width="30" height="30" fill="white" transform="translate(0 0.516602)" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>Reviews</span>
                        </a>
                      </li>
                      <li id="id_howwork" onClick={() => this.toggleClass("howwork")}>
                        <a href="#howwork" className="service-links">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_896:2139)">
                              <path d="M18.425 17.1429H17.8875C17.8138 17.1429 17.7525 17.0941 17.7163 17.0204C17.6523 16.859 17.5831 16.6997 17.5088 16.5429C17.4713 16.4704 17.4963 16.3966 17.545 16.3479L17.9238 15.9554C18.2529 15.6206 18.4374 15.1699 18.4374 14.7004C18.4374 14.2309 18.2529 13.7802 17.9238 13.4454L16.5413 12.0616C16.2071 11.7323 15.7567 11.5477 15.2875 11.5477C14.8183 11.5477 14.368 11.7323 14.0338 12.0616L13.6538 12.4416C13.6272 12.4684 13.593 12.4864 13.5559 12.4931C13.5188 12.4998 13.4805 12.4949 13.4463 12.4791C13.2875 12.4041 13.1275 12.3429 12.9563 12.2704C12.8838 12.2454 12.8463 12.1716 12.8463 12.0979V11.5729C12.8464 11.3398 12.8007 11.1089 12.7116 10.8935C12.6226 10.6781 12.492 10.4823 12.3273 10.3174C12.1625 10.1525 11.967 10.0216 11.7517 9.93222C11.5364 9.84287 11.3056 9.79679 11.0725 9.79663H9.115C8.64424 9.79663 8.19276 9.98364 7.85989 10.3165C7.52701 10.6494 7.34 11.1009 7.34 11.5716V12.1104C7.34 12.1841 7.2925 12.2454 7.21875 12.2816C7.06 12.3441 6.9 12.4166 6.74125 12.4904C6.70639 12.5027 6.66891 12.5058 6.63252 12.4992C6.59613 12.4926 6.56208 12.4766 6.53375 12.4529L6.15375 12.0741C5.81955 11.7448 5.36919 11.5602 4.9 11.5602C4.43081 11.5602 3.98045 11.7448 3.64625 12.0741L2.2625 13.4579C1.93332 13.7927 1.74885 14.2434 1.74885 14.7129C1.74885 15.1824 1.93332 15.6331 2.2625 15.9679L2.64125 16.3479C2.69125 16.3966 2.70375 16.4816 2.67875 16.5554C2.60812 16.7124 2.54267 16.8716 2.4825 17.0329C2.4575 17.1066 2.385 17.1429 2.31125 17.1429H1.77375C1.30321 17.1432 0.85205 17.3304 0.519444 17.6632C0.186837 17.996 -1.16679e-07 18.4473 0 18.9179L0 20.8779C0 21.8579 0.795 22.6529 1.775 22.6529H2.3125C2.38625 22.6529 2.4475 22.7029 2.47125 22.7766C2.53375 22.9354 2.59375 23.0941 2.6675 23.2529C2.705 23.3154 2.68 23.4004 2.63 23.4491L2.25125 23.8291C1.92207 24.1639 1.7376 24.6146 1.7376 25.0841C1.7376 25.5536 1.92207 26.0043 2.25125 26.3391L3.63375 27.7229C3.96801 28.0526 4.41863 28.2374 4.88813 28.2374C5.35762 28.2374 5.80825 28.0526 6.1425 27.7229L6.52125 27.3429C6.57125 27.2941 6.65625 27.2816 6.72875 27.3066C6.88875 27.3804 7.0475 27.4416 7.21875 27.5154C7.2925 27.5404 7.32875 27.6129 7.32875 27.6866V28.2241C7.32875 29.2041 8.12375 30.0004 9.10375 30.0004H11.06C11.2931 30.0004 11.5239 29.9545 11.7393 29.8653C11.9546 29.7761 12.1503 29.6453 12.3151 29.4805C12.4799 29.3157 12.6107 29.12 12.6999 28.9046C12.7891 28.6893 12.835 28.4585 12.835 28.2254V27.6866C12.835 27.6116 12.8838 27.5516 12.9563 27.5154C13.1175 27.4552 13.2768 27.3897 13.4338 27.3191C13.4963 27.2816 13.5813 27.3066 13.63 27.3566L14.0213 27.7354C14.3555 28.0647 14.8058 28.2493 15.275 28.2493C15.7442 28.2493 16.1946 28.0647 16.5288 27.7354L17.9113 26.3516C18.2404 26.0168 18.4249 25.5661 18.4249 25.0966C18.4249 24.6271 18.2404 24.1764 17.9113 23.8416L17.5325 23.4491C17.5089 23.423 17.4929 23.3909 17.4863 23.3563C17.4797 23.3216 17.4827 23.2859 17.495 23.2529C17.57 23.0941 17.63 22.9479 17.7038 22.7641C17.7288 22.6891 17.79 22.6541 17.8625 22.6541H18.4013C18.872 22.6541 19.3235 22.4671 19.6564 22.1342C19.9892 21.8014 20.1763 21.3499 20.1763 20.8791V18.9191C20.1809 18.6869 20.139 18.456 20.0531 18.2402C19.9671 18.0244 19.8388 17.8279 19.6757 17.6625C19.5126 17.4971 19.318 17.366 19.1034 17.2769C18.8888 17.1879 18.6586 17.1427 18.4263 17.1441L18.425 17.1429ZM16.225 22.2129C16.175 22.3479 16.1263 22.4704 16.0663 22.5916C15.918 22.9193 15.8725 23.2843 15.9357 23.6383C15.9988 23.9924 16.1677 24.3191 16.42 24.5754L16.8 24.9554C16.8375 24.9929 16.8488 25.0416 16.8488 25.0904C16.8488 25.1404 16.8238 25.1879 16.7988 25.2254L15.4175 26.6091C15.3438 26.6816 15.2213 26.6816 15.16 26.6091L14.7813 26.2291C14.5252 25.9768 14.1988 25.8079 13.845 25.7445C13.4912 25.6812 13.1264 25.7264 12.7988 25.8741C12.6763 25.9354 12.5425 25.9841 12.4075 26.0329C12.0732 26.1615 11.7856 26.3884 11.5826 26.6835C11.3795 26.9787 11.2706 27.3284 11.27 27.6866V28.2241C11.2694 28.2728 11.2498 28.3193 11.2155 28.3538C11.1813 28.3883 11.1349 28.4082 11.0863 28.4091H9.1275C9.07907 28.4082 9.03289 28.3885 8.99863 28.3543C8.96438 28.32 8.94471 28.2738 8.94375 28.2254V27.6866C8.94375 26.9391 8.49125 26.2904 7.80625 26.0329C7.67125 25.9841 7.54875 25.9229 7.41375 25.8741C7.18429 25.7664 6.9335 25.7117 6.68 25.7141C6.215 25.7141 5.7625 25.8979 5.42 26.2291L5.04125 26.6091C5.02467 26.6266 5.0047 26.6405 4.98256 26.65C4.96043 26.6595 4.93659 26.6644 4.9125 26.6644C4.88841 26.6644 4.86457 26.6595 4.84244 26.65C4.8203 26.6405 4.80033 26.6266 4.78375 26.6091L3.40125 25.2254C3.38426 25.2074 3.37107 25.1862 3.36248 25.163C3.35389 25.1398 3.35007 25.1151 3.35125 25.0904C3.35125 25.0404 3.37625 24.9929 3.40125 24.9554L3.78 24.5766C4.03236 24.3201 4.2013 23.9933 4.26465 23.6391C4.328 23.2848 4.28281 22.9197 4.135 22.5916C4.07375 22.4704 4.025 22.3354 3.97625 22.2004C3.84842 21.865 3.62251 21.5759 3.32797 21.3707C3.03342 21.1656 2.68392 21.054 2.325 21.0504H1.78625C1.7376 21.0494 1.69124 21.0296 1.65695 20.9951C1.62267 20.9605 1.60314 20.914 1.6025 20.8654V18.9066C1.60346 18.8582 1.62313 18.812 1.65738 18.7778C1.69164 18.7435 1.73782 18.7238 1.78625 18.7229H2.32375C3.05875 18.7229 3.72 18.2579 3.97625 17.5841C4.02625 17.4491 4.07375 17.3266 4.135 17.1929C4.28305 16.865 4.32838 16.5001 4.26501 16.146C4.20165 15.7919 4.03256 15.4653 3.78 15.2091L3.40125 14.8291C3.38426 14.8112 3.37107 14.7899 3.36248 14.7667C3.35389 14.7435 3.35007 14.7188 3.35125 14.6941C3.35125 14.6454 3.37625 14.5966 3.40125 14.5591L4.78375 13.1754C4.8575 13.1029 4.98 13.1029 5.04125 13.1754L5.42 13.5554C5.67576 13.8081 6.00217 13.9774 6.35612 14.0408C6.71007 14.1041 7.07492 14.0587 7.4025 13.9104C7.525 13.8491 7.65875 13.8004 7.79375 13.7516C8.47875 13.4941 8.93125 12.8329 8.94375 12.0979V11.5729C8.94439 11.5242 8.96392 11.4777 8.9982 11.4432C9.03249 11.4087 9.07886 11.3888 9.1275 11.3879H11.085C11.1334 11.3888 11.1796 11.4085 11.2139 11.4428C11.2481 11.477 11.2678 11.5232 11.2688 11.5716V12.1104C11.2688 12.8454 11.7338 13.5066 12.4188 13.7641C12.5525 13.8129 12.675 13.8616 12.81 13.9229C13.1375 14.0715 13.5024 14.1172 13.8565 14.0538C14.2105 13.9904 14.5369 13.8209 14.7925 13.5679L15.1713 13.1879C15.245 13.1141 15.3675 13.1141 15.4288 13.1879L16.8113 14.5716C16.8475 14.6091 16.86 14.6579 16.86 14.7066C16.86 14.7566 16.835 14.8041 16.81 14.8416L16.4313 15.2204C16.1787 15.4765 16.0096 15.8031 15.9462 16.1572C15.8829 16.5113 15.9282 16.8763 16.0763 17.2041C16.1388 17.3266 16.1863 17.4616 16.2363 17.5966C16.3647 17.9304 16.5909 18.2176 16.8854 18.4205C17.1798 18.6235 17.5286 18.7328 17.8863 18.7341H18.4263C18.4747 18.7354 18.5207 18.7554 18.5547 18.7899C18.5888 18.8244 18.6081 18.8707 18.6088 18.9191V20.8779C18.6078 20.9261 18.5883 20.9721 18.5543 21.0063C18.5203 21.0405 18.4745 21.0604 18.4263 21.0616H17.8875C17.1538 21.0616 16.4925 21.5266 16.2238 22.2116L16.225 22.2129Z" fill="white" />
                              <path d="M14.4987 19.703L14.8037 19.6905C14.8037 19.568 14.7912 19.433 14.7787 19.3105C14.7675 19.1755 14.7425 19.0417 14.7187 18.9067C14.7062 18.833 14.6812 18.7717 14.6575 18.6492C14.6325 18.5392 14.5962 18.4417 14.56 18.3305L14.4737 18.1105C14.4125 17.9392 14.3275 17.7805 14.2287 17.5842C14.0843 17.3218 13.9125 17.0755 13.7162 16.8492C13.6456 16.7648 13.5718 16.6831 13.495 16.6042L13.2137 16.3355C13.1525 16.2855 13.0912 16.2255 13.0175 16.1755L12.945 16.1155C12.1344 15.5135 11.1522 15.1871 10.1425 15.1842C10.105 15.1842 10.0687 15.1842 9.98374 15.1967C9.87374 15.1967 9.76374 15.2092 9.65374 15.2217C9.59124 15.2217 9.53124 15.2342 9.46999 15.2455C9.29669 15.2661 9.12503 15.2987 8.95624 15.343C8.3577 15.4967 7.79551 15.7674 7.30208 16.1394C6.80864 16.5114 6.39372 16.9774 6.08124 17.5105C5.76501 18.0435 5.55776 18.6339 5.4715 19.2476C5.38524 19.8613 5.42169 20.486 5.57874 21.0855C5.78942 21.906 6.21784 22.6544 6.81873 23.2515C7.41962 23.8487 8.17066 24.2724 8.99249 24.478C9.17624 24.528 9.35999 24.5642 9.54249 24.588C9.64124 24.6005 9.73874 24.6005 9.82499 24.613L9.98374 24.6255C10.0337 24.6255 10.0937 24.638 10.1425 24.638C10.29 24.638 10.4487 24.6255 10.5712 24.613L10.6562 24.6005C10.7787 24.588 10.9137 24.563 11.0487 24.5392L11.195 24.5017C11.28 24.478 11.3787 24.4542 11.4762 24.4292L11.6962 24.3555L11.905 24.2817C11.9662 24.2567 12.015 24.233 12.0637 24.2092L11.9287 23.9392L12.1375 24.1842C12.1969 24.1604 12.2542 24.1316 12.3087 24.098L12.3812 24.0617C12.8587 23.8042 13.3112 23.4867 13.7037 23.1067C13.825 22.9967 13.9362 22.8617 14.0212 22.7267C14.425 22.078 14.6937 21.3555 14.8037 20.5967L14.8412 20.2905C14.8537 20.193 14.8537 20.1067 14.8537 20.0092V19.923V19.7517L14.4987 19.7017V19.703ZM10.5225 16.4942L10.5837 16.813C10.6812 16.8255 10.7787 16.8505 10.8762 16.8742L10.9625 16.8992C11.195 16.9592 11.4275 17.058 11.635 17.1805L11.745 17.2417C11.82 17.2905 11.88 17.3267 11.9775 17.4005L12.0637 17.4617L12.32 17.6817L12.4062 17.7805C12.4562 17.8292 12.5037 17.8905 12.5525 17.9517C12.59 17.9892 12.615 18.0367 12.6387 18.0742C12.6887 18.1355 12.725 18.2092 12.7737 18.2817L12.835 18.3917C12.895 18.503 12.945 18.6005 12.9812 18.7105L13.0312 18.8455C13.055 18.9317 13.0787 19.0167 13.1037 19.0905L13.1412 19.2255C13.165 19.348 13.1887 19.4692 13.2012 19.5917L13.5075 19.5667L13.2137 19.6905C13.2137 19.788 13.2262 19.898 13.2137 19.9967V20.1067L13.1762 20.4255C13.0955 20.881 12.9144 21.3128 12.6461 21.6897C12.3778 22.0665 12.029 22.3789 11.625 22.6042L11.4162 22.703C11.16 22.8255 10.8787 22.898 10.535 22.9592C10.4862 22.9717 10.425 22.9717 10.3762 22.9842C10.3025 22.9967 10.23 22.9967 10.1687 22.9967H10.07C9.95999 22.9967 9.86249 22.9842 9.70374 22.9717C9.57915 22.959 9.45608 22.9343 9.33624 22.898C8.93903 22.7976 8.56573 22.6193 8.23805 22.3734C7.91037 22.1274 7.63484 21.8188 7.42749 21.4655C7.21612 21.1143 7.07696 20.7244 7.01815 20.3188C6.95934 19.9131 6.98206 19.4998 7.08499 19.103C7.22381 18.5621 7.50449 18.068 7.89805 17.6718C8.2916 17.2756 8.78377 16.9917 9.32374 16.8492C9.58124 16.788 9.83874 16.7517 10.1075 16.7517C10.23 16.7517 10.3637 16.7642 10.4862 16.7767L10.5237 16.4942H10.5225ZM28.2137 10.2867H26.6725C26.5737 10.2617 26.5375 10.2367 26.5125 10.1755C26.3579 9.7056 26.1699 9.24734 25.95 8.80424C25.9012 8.74299 25.925 8.65799 25.975 8.60924L27.0625 7.51924C27.3937 7.18799 27.5775 6.73549 27.5775 6.25674C27.5787 6.02515 27.5339 5.79563 27.4457 5.58149C27.3575 5.36735 27.2277 5.17284 27.0637 5.00924L24.9837 2.92549C24.6495 2.59579 24.1989 2.41094 23.7294 2.41094C23.2599 2.41094 22.8092 2.59579 22.475 2.92549L21.3875 4.01549C21.3375 4.06549 21.2525 4.08924 21.1912 4.05299C20.7475 3.83068 20.2894 3.63817 19.82 3.47674C19.7475 3.45174 19.71 3.39049 19.71 3.31799V1.77549C19.71 1.30516 19.5233 0.854062 19.191 0.521257C18.8587 0.188452 18.4078 0.00115071 17.9375 0.000488281L15 0.000488281C14.5292 0.000488281 14.0778 0.187497 13.7449 0.520374C13.412 0.853251 13.225 1.30473 13.225 1.77549V3.31924C13.2244 3.35343 13.2137 3.38669 13.1944 3.4149C13.1751 3.44312 13.1479 3.46505 13.1162 3.47799C12.648 3.63693 12.19 3.82479 11.745 4.04049C11.7135 4.05869 11.6765 4.06504 11.6408 4.05839C11.605 4.05175 11.5728 4.03254 11.55 4.00424L10.4612 2.91424C10.127 2.58454 9.67636 2.39969 9.20686 2.39969C8.73736 2.39969 8.28674 2.58454 7.95249 2.91424L5.87249 4.99674C5.54353 5.32903 5.3593 5.77791 5.35999 6.24549C5.35999 6.72299 5.54249 7.16424 5.87249 7.50674L7.47499 9.12299C7.54824 9.19683 7.63612 9.25455 7.73298 9.29244C7.82985 9.33033 7.93357 9.34754 8.03749 9.34299C8.14304 9.34296 8.24746 9.32119 8.34424 9.27904C8.44101 9.23689 8.52807 9.17526 8.59999 9.09799C8.74678 8.94982 8.82913 8.74968 8.82913 8.54111C8.82913 8.33254 8.74678 8.13241 8.59999 7.98424L6.99999 6.38049C6.98299 6.36251 6.96981 6.34129 6.96122 6.31809C6.95262 6.29489 6.9488 6.2702 6.94999 6.24549C6.94999 6.19549 6.97499 6.14799 6.99999 6.11049L9.07999 4.02924C9.09655 4.01196 9.11645 3.99821 9.13846 3.98882C9.16048 3.97942 9.18417 3.97458 9.20811 3.97458C9.23205 3.97458 9.25574 3.97942 9.27776 3.98882C9.29978 3.99821 9.31967 4.01196 9.33624 4.02924L10.425 5.11924C10.6853 5.38175 11.0221 5.55508 11.387 5.61436C11.7519 5.67365 12.1262 5.61584 12.4562 5.44924C12.835 5.26549 13.2275 5.09424 13.6187 4.97174C14.34 4.72674 14.8187 4.05299 14.8187 3.29424V1.77549C14.8197 1.72748 14.839 1.68165 14.8727 1.64746C14.9064 1.61328 14.952 1.59333 15 1.59174H17.9375C17.9857 1.59302 18.0316 1.61282 18.0656 1.64704C18.0995 1.68126 18.119 1.72727 18.12 1.77549V3.31924C18.12 4.07799 18.5975 4.75174 19.32 4.99674C19.71 5.13049 20.1025 5.29049 20.4812 5.47424C20.8114 5.64069 21.1858 5.69829 21.5507 5.63878C21.9156 5.57927 22.2523 5.4057 22.5125 5.14299L23.6125 4.05299C23.65 4.01674 23.6875 4.00424 23.7362 4.00424C23.785 4.00424 23.8337 4.02924 23.87 4.05424L25.95 6.13549C25.9875 6.17299 26 6.22049 26 6.27049C26 6.31924 25.975 6.36799 25.95 6.40424L24.8625 7.49424C24.6 7.75481 24.4266 8.0917 24.3671 8.45675C24.3076 8.82179 24.3651 9.1963 24.5312 9.52674C24.715 9.90674 24.8862 10.298 25.0075 10.6892C25.2525 11.413 25.9262 11.8892 26.6725 11.8892H28.2262C28.2749 11.8902 28.3212 11.91 28.3555 11.9446C28.3898 11.9791 28.4093 12.0256 28.41 12.0742V15.0005C28.409 15.0489 28.3894 15.0951 28.3551 15.1294C28.3209 15.1636 28.2747 15.1833 28.2262 15.1842H26.685H26.6725C26.3035 15.1815 25.9432 15.2964 25.6439 15.5121C25.3445 15.7279 25.1216 16.0333 25.0075 16.3842C24.872 16.7809 24.7129 17.169 24.5312 17.5467C24.364 17.8771 24.3059 18.2519 24.3652 18.6173C24.4245 18.9828 24.5982 19.32 24.8612 19.5805L25.95 20.6817C25.9875 20.7192 26 20.7567 26 20.8042C26 20.8542 25.975 20.903 25.95 20.9392L23.87 23.0205C23.8522 23.0373 23.8311 23.0504 23.8082 23.059C23.7852 23.0676 23.7607 23.0715 23.7362 23.0705C23.6907 23.0693 23.6471 23.0515 23.6137 23.0205L22.0112 21.4167C21.9383 21.3416 21.8512 21.2817 21.755 21.2404C21.6588 21.1991 21.5554 21.1773 21.4507 21.1761C21.346 21.175 21.2422 21.1945 21.1451 21.2337C21.048 21.2728 20.9596 21.3308 20.885 21.4042C20.8094 21.4786 20.7494 21.5672 20.7085 21.6649C20.6675 21.7627 20.6464 21.8676 20.6464 21.9736C20.6464 22.0796 20.6675 22.1845 20.7085 22.2823C20.7494 22.38 20.8094 22.4687 20.885 22.543L22.4875 24.148C22.83 24.4905 23.2825 24.6617 23.7362 24.6617C24.1887 24.6617 24.6412 24.4905 24.9962 24.148L27.0762 22.0655C27.4062 21.7355 27.5887 21.2817 27.5887 20.8042C27.5902 20.5725 27.5457 20.3428 27.4577 20.1285C27.3698 19.9141 27.2401 19.7193 27.0762 19.5555L25.9875 18.4655C25.9375 18.4167 25.9125 18.3317 25.95 18.2705C26.17 17.8292 26.3662 17.3642 26.5125 16.898C26.5375 16.8255 26.6112 16.8005 26.6837 16.788H28.2262C28.6968 16.7877 29.1479 16.6005 29.4805 16.2677C29.8132 15.9348 30 15.4835 30 15.013V12.0742C29.9974 11.6012 29.8084 11.1482 29.474 10.8136C29.1396 10.479 28.6868 10.2897 28.2137 10.2867Z" fill="white" />
                              <path d="M20.8 17.5842C21.2525 17.853 21.6675 17.7192 21.8638 17.4367C23.735 14.8292 23.515 11.1555 21.1788 8.81671C18.695 6.34296 14.8663 6.11046 12.2475 8.36421C12.125 8.47421 11.7338 9.03671 12.0388 9.51421C12.2588 9.85796 13.03 9.79671 13.2263 9.61296C15.1713 7.80046 18.1325 7.99671 20.0525 9.89421C20.8914 10.7253 21.4159 11.8217 21.5365 12.9964C21.6571 14.1711 21.3663 15.3513 20.7138 16.3355C20.5425 16.593 20.2725 17.2655 20.7988 17.5842H20.8Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_896:2139">
                                <rect width="30" height="30" fill="white" transform="translate(0 0.000488281)" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>How it works</span>
                        </a>
                      </li>
                      <li id="id_faq" onClick={() => this.toggleClass("faq")}>
                        <a href="#faq" className="service-links">
                          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_896:2133)">
                              <path d="M30.7573 20.3005C30.7573 15.9255 27.8061 12.113 23.6548 10.9505C23.3923 4.87549 18.3648 0.000488281 12.2123 0.000488281C5.89732 0.000488281 0.757324 5.13799 0.757324 11.4505C0.757324 13.513 1.30732 15.513 2.34482 17.2755L0.794824 22.863L6.38482 21.313C7.99732 22.2755 9.82357 22.813 11.7123 22.888C12.2855 24.9287 13.5092 26.7264 15.1975 28.0079C16.8859 29.2895 18.9465 29.9847 21.0661 29.988C22.8161 29.988 24.5036 29.5255 26.0048 28.638L30.7323 29.938L29.4323 25.213C30.3044 23.723 30.7619 22.0269 30.7573 20.3005ZM6.65982 19.4255L3.30857 20.3505L4.23357 17.0005L4.02107 16.6755C3.02214 15.1208 2.49266 13.311 2.49607 11.463C2.49607 6.11299 6.84732 1.76299 12.1998 1.76299C17.5523 1.76299 21.9036 6.11299 21.9036 11.463C21.9036 16.813 17.5523 21.163 12.1998 21.163C10.3498 21.163 8.53607 20.638 6.98482 19.638L6.65982 19.4255ZM28.1936 27.438L25.7061 26.7505L25.3686 26.963C24.3515 27.6206 23.1976 28.0372 21.995 28.1811C20.7924 28.3249 19.5729 28.1923 18.4293 27.7932C17.2858 27.3941 16.2485 26.7391 15.3966 25.8782C14.5447 25.0172 13.9006 23.9731 13.5136 22.8255C18.7773 22.213 22.9661 18.0255 23.5798 12.763C25.1548 13.2951 26.5238 14.3069 27.4947 15.6564C28.4656 17.006 28.9897 18.6255 28.9936 20.288C28.9936 21.8255 28.5561 23.3255 27.7186 24.613L27.5061 24.9505L28.1936 27.438Z" fill="white" />
                              <path d="M11.3361 15.8754H13.0986V17.6379H11.3361V15.8754ZM13.9623 8.78789C13.9623 9.28789 13.7623 9.75039 13.3873 10.0879L11.3248 11.9754V14.1254H13.0873V12.7504L14.5748 11.3879C15.2998 10.7254 15.7136 9.77539 15.7136 8.78789C15.7136 6.85039 14.1386 5.27539 12.1998 5.27539C11.2683 5.27605 10.3752 5.64629 9.71639 6.30483C9.05762 6.96338 8.68706 7.85641 8.68607 8.78789H10.4486C10.4486 7.81289 11.2361 7.02539 12.2111 7.02539C13.1873 7.02539 13.9623 7.82539 13.9623 8.78789Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_896:2133">
                                <rect width="30" height="30" fill="white" transform="translate(0.757324 0.000488281)" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>FAQ</span>
                        </a>
                      </li>
                    </ul>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Index

