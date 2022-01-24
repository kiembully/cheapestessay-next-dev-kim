import React, { Component } from "react";
import Router from "next/router";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import moment from 'moment-timezone'

// scss
import orderCss from "../../../../styles/order.scss";
import orderStatusCss from "./orderStatus.scss";

import { apiHelper } from '../../../../helper/apiHelper';
import DraftOrder from "../../placeOrder/draftOrder";
import CheckOrderDetails from "./checkOrderDetails";
import CheckOrderFile from "./checkOrderFile";
// import countDown from "../countDown";
import Countdown, { zeroPad } from "react-countdown";

class OrderStatus extends Component {
  constructor() {
    super()
    this.state = {
      activePaymentTab: "1",
      apiLoader: false,
      orderData: null,
      orderId: ''
    }
  }

  componentDidMount() {
    if (Router.router && Router.router.query) {
      var orderId = Router.router.query.order_id
      if (orderId && orderId !== '') {
        this.setState({
          orderId: orderId
        }, () => {
          this.getOrder()
        })
      } else {
        this.backToOrderList()
      }
    } else {
      this.backToOrderList()
    }

  }

  backToOrderList = () => {
    Router.router.push(`${process.env.basePath}/my-orders`)
  }

  paymentToggle = (tab) => {
    if (this.state.activePaymentTab !== tab) {
      this.setState({
        activePaymentTab: tab
      })
    };
  }

  getOrder = () => {
    const loginToken = localStorage.getItem('token');
    var convertedToken = JSON.parse(loginToken);

    this.setState({
      apiLoader: true
    })
    const formData = new FormData();
    formData.append("user_token", (convertedToken ? convertedToken.value : ''));
    formData.append("order_id", parseInt(this.state.orderId));

    apiHelper('displayorder', 'POST', formData, null)
      .then(res => {
        if (res.data.status) {
          this.setState({
            apiLoader: false
          })

          const orderData = res.data.data;
          this.setState({
            orderData: orderData
          })
        } else {
          this.backToOrderList()
        }
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  renderTimer = ({ days, hours, minutes, seconds, completed }) => {
    // Render a countdown
    var isTimeMinus = false
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      isTimeMinus = true;
    }
    return <div className='timer-div d-flex align-items-center justify-content-evenly'>
      <div className='square-timer'><span className='timer-text'>{isTimeMinus ? '00' : zeroPad(days)}</span><span className='timer-subText'>Days</span></div>
      <div className='square-timer'><span className='timer-text'>{isTimeMinus ? '00' : zeroPad(hours)}</span><span className='timer-subText'>Hours</span></div>
      <div className='square-timer'><span className='timer-text'>{isTimeMinus ? '00' : zeroPad(minutes)}</span><span className='timer-subText'>Mins</span></div>
      <div className='square-timer'><span className='timer-text'>{isTimeMinus ? '00' : zeroPad(seconds)}</span><span className='timer-subText'>Sec</span></div>
    </div>;
  };

  render() {
    const { activePaymentTab, orderData } = this.state
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: orderCss }}></style>
        <style dangerouslySetInnerHTML={{ __html: orderStatusCss }}></style>
        <div className="orderStatus">
          <div className="back mb-3" onClick={this.backToOrderList}>
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99935 1.3335L1.33268 6.00016L5.99935 10.6668M10.666 6.00016H1.99935H10.666Z"
                stroke="#12245A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ms-2">Back</span>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="paymentViewTab">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activePaymentTab === "1" })}
                      onClick={() => {
                        this.paymentToggle("1");
                      }}
                    >
                      paper
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activePaymentTab === "2" })}
                      onClick={() => {
                        this.paymentToggle("2");
                      }}
                    >
                      details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activePaymentTab === "3" })}
                      onClick={() => {
                        this.paymentToggle("3");
                      }}
                    >
                      files
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activePaymentTab === "4" })}
                      onClick={() => {
                        this.paymentToggle("4");
                      }}
                    >
                      payment
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activePaymentTab}>
                  <TabPane tabId="1">
                    <div className="section-part">
                      <div className="content">
                        {orderData && orderData.status.order_status_flag === 3 ?
                          orderData.status.paper_stats.description && orderData.status.paper_stats.description[0] :
                          orderData && orderData.status.order_status_flag === 11 ?
                            orderData.status.paper_stats.stats :
                            'Your order is complete!'
                        }
                      </div>
                      <div className="innerTitle">
                        {orderData && orderData.status.order_status_flag === 3 ?
                          orderData.status.paper_stats.description && orderData.status.paper_stats.description[1] :
                          orderData && orderData.status.order_status_flag === 11 ?
                            orderData.status.paper_stats.description && orderData.status.paper_stats.description[0] :
                            null}
                      </div>
                      {orderData && orderData.status.order_status_flag === 3 ?
                        <p className="desc">{orderData.status.paper_stats.description && orderData.status.paper_stats.description[2]}</p> :
                        orderData && orderData.status.order_status_flag === 11 ?
                          <p className="desc">{orderData.status.paper_stats.description && orderData.status.paper_stats.description[1]}</p> :
                          <>
                            <div className="mb-4">
                              <div className="writerDetail">
                                <span>Writer ID&nbsp;:&nbsp;</span>
                                <span>{orderData && orderData.status.paper_stats.writer_username}</span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xxl-6">
                                {orderData && orderData.files.writer_latest_upload ?
                                  <div className="fileDetails d-flex justify-content-between completeOrder">
                                    <div className="icon d-flex">
                                      <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.9085 0C16.0525 0 18.1645 2.153 18.1645 5.357V14.553C18.1645 17.785 16.1175 19.887 12.9495 19.907L5.25651 19.91C2.11251 19.91 -0.000488281 17.757 -0.000488281 14.553V5.357C-0.000488281 2.124 2.04651 0.023 5.21451 0.004L12.9075 0H12.9085ZM12.9085 1.5L5.21951 1.504C2.89151 1.518 1.49951 2.958 1.49951 5.357V14.553C1.49951 16.968 2.90451 18.41 5.25551 18.41L12.9445 18.407C15.2725 18.393 16.6645 16.951 16.6645 14.553V5.357C16.6645 2.942 15.2605 1.5 12.9085 1.5ZM12.7156 13.4737C13.1296 13.4737 13.4656 13.8097 13.4656 14.2237C13.4656 14.6377 13.1296 14.9737 12.7156 14.9737H5.49561C5.08161 14.9737 4.74561 14.6377 4.74561 14.2237C4.74561 13.8097 5.08161 13.4737 5.49561 13.4737H12.7156ZM12.7156 9.2872C13.1296 9.2872 13.4656 9.6232 13.4656 10.0372C13.4656 10.4512 13.1296 10.7872 12.7156 10.7872H5.49561C5.08161 10.7872 4.74561 10.4512 4.74561 10.0372C4.74561 9.6232 5.08161 9.2872 5.49561 9.2872H12.7156ZM8.25031 5.1104C8.66431 5.1104 9.00031 5.4464 9.00031 5.8604C9.00031 6.2744 8.66431 6.6104 8.25031 6.6104H5.49531C5.08131 6.6104 4.74531 6.2744 4.74531 5.8604C4.74531 5.4464 5.08131 5.1104 5.49531 5.1104H8.25031Z" fill="black" />
                                      </svg>
                                      <div className="details">
                                        <h4 className="name" title={orderData.files.writer_latest_upload.file_name}>{orderData.files.writer_latest_upload.file_name}</h4>
                                        {/* <span className="text">{moment(orderData.files.writer_latest_upload.date_added).format('DD MMM YYYY hh:mm A')}</span> */}
                                      </div>
                                    </div>
                                    <div className="userName">Writer ID {orderData.files.writer_latest_upload.user_name}</div>
                                    <a title="Download" className="view downloadFile" target='_blank' href={`https://web.cheapestessay.com/downloadFile?from=0&filename=${orderData.files.writer_latest_upload.generated_filename}`}>
                                      <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9.99984V12.6665C1 13.3998 1.6 13.9998 2.33333 13.9998H11.6667C12.0203 13.9998 12.3594 13.8594 12.6095 13.6093C12.8595 13.3593 13 13.0201 13 12.6665V9.99984M10.3333 5.99984L7 9.33317L3.66667 5.99984M7 8.53317V1.6665" stroke="#12245A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    </a>
                                  </div> :
                                  null
                                }
                              </div>
                            </div>
                            {
                              orderData && orderData.status.order_status_flag === 2 ?
                                <>
                                  <p>{orderData.status.paper_stats.stats}</p>
                                  <p>{orderData.status.paper_stats.description && orderData.status.paper_stats.description[0]}</p>
                                </> :
                                null}
                          </>
                      }
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <CheckOrderDetails orderData={orderData} />
                  </TabPane>
                  <TabPane tabId="3">
                    <CheckOrderFile orderData={orderData} getOrder={this.getOrder} />
                  </TabPane>
                  <TabPane tabId="4">
                    <div className="section-part">
                      <div className="calculate-Part pt-0">
                        <div className="price d-flex justify-content-between">
                          <span>Sales ID</span>
                          <span>{orderData && orderData.payment.payment_method ? (orderData.payment.transaction_id === '' ? orderData.payment.payment_method : orderData.payment.transaction_id) : ''}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                          <span>Lifetime Discount</span>
                          <span>{orderData && orderData.payment.ltDisc}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                          <span>Redeem Ammount</span>
                          <span>{orderData && orderData.payment.redeem}</span>
                        </div>
                      </div>
                      <div className="calculate-Part bottomCalculate">
                        <div className="price d-flex justify-content-between">
                          <span>Subtotal</span>
                          <span className="status">{orderData && orderData.payment.sub_total}</span>
                        </div>
                      </div>
                      <div className="bottomPart">
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="totalPrice">Total Price</span>
                          <span className="price">{orderData && orderData.payment.total}</span>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
            <div className="col-md-4">
              <div className="section-part rightSide">
                <div className="orderSummary rightSection">
                  <h3 className="section-title">Order Summary</h3>
                  <div className="calculate-Part pt-0">
                    <div className="price d-flex justify-content-between">
                      <span title="Order Number">Order Number</span>
                      <span title={orderData && orderData.order_no_custom}>{orderData && orderData.order_no_custom}</span>
                    </div>
                    <div className="price d-flex justify-content-between">
                      <span title="Order Date">Order Date</span>
                      <span title={orderData && orderData.order_date}>{orderData && orderData.order_date}</span>
                    </div>
                    <div className="price d-flex justify-content-between">
                      <span title="Deadline">Deadline</span>
                      <span title={orderData && orderData.deadlinedate}>{orderData && orderData.deadlinedate}</span>
                    </div>
                  </div>
                  <div className="calculate-Part bottomCalculate">
                    <div className="price d-flex justify-content-between align-items-center">
                      <span>Order Status</span>
                      <span className={`status ${orderData && orderData.status.order_status_flag ? ((orderData.status.order_status_flag === 3 || orderData.status.order_status_flag === 11) ? 'inProgress' : (orderData.status.order_status_flag === 2 ? 'completed' : '')) : ''}`}>
                        {orderData && orderData.status.order_status_flag ? ((orderData.status.order_status_flag === 3 || orderData.status.order_status_flag === 11) ? 'In Progress' : (orderData.status.order_status_flag === 2 ? 'Completed' : '')) : ''}
                      </span>
                    </div>
                  </div>
                  {orderData && orderData.status.order_status_flag && (orderData.status.order_status_flag === 3 || orderData.status.order_status_flag === 11) ?
                    <div className="statusTime">
                      <span>completed In</span>
                      <Countdown date={orderData && orderData.deadlinedate} renderer={this.renderTimer} />
                    </div> :
                    null}
                </div>
              </div>
            </div>
          </div>
          <DraftOrder currentStep={orderData && orderData.status.order_status_flag} />
        </div>
      </>
    );
  }
}
export default OrderStatus;
