import React, { Component } from 'react';
import Router from 'next/router';

import Img from '../../../Common/image';

import { apiHelper } from '../../../../helper/apiHelper';
import { jwtDecode } from '../../../../helper/jwtHelper';
class Index extends Component {
    _unmounted = false;
    constructor() {
        super()
        this.state = {
            oDetails: null,
            pDetails: null
        }
    }

    //componentDidMount
    componentDidMount() {
        this._unmounted = true;
        if (this._unmounted) {
            this.getCompletedOrderData();
        }
    }

    componentWillUnmount() {
        this._unmounted = false;
    }

    componentWillReceiveProps = () => {
        if (this._unmounted) {
            this.getCompletedOrderData();
        }
    }

    //getCompletedOrderData
    getCompletedOrderData = async () => {
        if (this._unmounted) {
            var query = Router.router.query;
            if (query.order_id) {
                const loginToken = localStorage.getItem('token');
                var convertedToken = JSON.parse(loginToken);

                const formData = new FormData();
                formData.append("order_id", query.order_id);
                formData.append("user_token", convertedToken ? convertedToken.value : '');

                var res = await apiHelper('orderSummary', 'POST', formData, null)
                if (res.data.status) {
                    this.setState({ oDetails: res.data.data.order_data, pDetails: res.data.data.payment_data });
                    convertedToken.value = res.data.data.user_token
                    localStorage.setItem('token', JSON.stringify(convertedToken));
                    this.props.changeUserProfile()
                }
            }
        }
    }

    viewOrder = () => {
        if (this._unmounted) {
            // order related 
            localStorage.removeItem("orderId");
            localStorage.removeItem("orderToken");
            localStorage.removeItem("uploadedToken");
            localStorage.removeItem("discount_token");

            // Rightbar related
            localStorage.removeItem("orderRight");

            //completed order
            localStorage.removeItem('paidOrderDetails')
            localStorage.removeItem('paidPaymentDetails')
            localStorage.removeItem('cardData');

            this.resetOrder()

        }
    }

    resetOrder = () => {
        if (this._unmounted) {
            const loginToken = localStorage.getItem('token');
            var convertedUserToken = loginToken && loginToken !== '' ? JSON.parse(loginToken) : null;

            const formData = new FormData();
            formData.append("service", 3);
            formData.append("page", 1);
            formData.append("set_spacing", 1);
            formData.append("academic", 3);
            formData.append("paper", 1);
            formData.append("other_paper", '');
            formData.append("subject", 18);
            formData.append("other_subject", '');
            formData.append("formated_style", 1);
            formData.append("other_format", '');
            formData.append("source", 0);
            formData.append("discipline", 2);
            formData.append("topic", `Writer's Choice`);
            formData.append("add_detail", '');
            formData.append("timezone", 'Europe/London');
            formData.append("deadline", 19);
            formData.append("duration", 'Days');
            formData.append("coupon_code", '');
            formData.append("slide", 0);
            formData.append("chart", 0);
            formData.append("preferred_writer", 'any_writer');
            formData.append("writer_id", '');
            formData.append("additionalextra", []);
            // formData.append("order_token", order_token && order_token);
            formData.append("user_token", convertedUserToken && convertedUserToken.value ? convertedUserToken.value : '');
            // formData.append("discount_token", '');

            // formData.append("deadlineLable", this.state.deadlineLable);
            formData.append("deadlineid", 0);

            apiHelper('setOrderV1', 'POST', formData, null).then(res => {
                if (res.data.status) {
                    const data = res.data.data;
                    localStorage.setItem("orderToken", data.order_token);

                    var decodeOrder = jwtDecode(data.order_token);

                    var rightData = {
                        discountTotal: "0.00",
                        page: decodeOrder.page ? decodeOrder.page : 1,
                        spacing: 'Double-spaced',
                        paper: decodeOrder.calculater_labels && decodeOrder.calculater_labels.paper_label,
                        // abstractPrice: decodeOrder.abstractPageprice && decodeOrder.abstractPageprice,
                        discipline: 'English (U.S)',
                        format: 'MLA',
                        preferred: '1',
                        preferredWriter: 'Any Writer  (Free)',
                        level: 'College'
                    }

                    rightData['ppSlideCost'] = decodeOrder.slideCost ? (decodeOrder.slideCost).toString() : '';
                    rightData['pageCost'] = decodeOrder.pageCost ? (decodeOrder.pageCost).toString() : '';
                    if (decodeOrder.service === 2) {
                        rightData['ppSlideTotal'] = decodeOrder.slideTotal ? (decodeOrder.slideTotal).toString() : '';
                    } else {
                        rightData['totalCost'] = decodeOrder.pageTotal ? (decodeOrder.pageTotal).toString() : '';
                    }

                    localStorage.setItem('orderRight', JSON.stringify(rightData));
                    var digit = decodeOrder.deadline ? decodeOrder.deadline : 19
                    var duration = decodeOrder.duration ? decodeOrder.duration : 'Days'
                    var deadline = {
                        "digit": digit,
                        "durations": duration,
                        "label": `${digit} ${duration} / ${decodeOrder.deadlineLable && decodeOrder.deadlineLable}`
                    }
                    localStorage.setItem('calculator_deadline', JSON.stringify(deadline))
                    localStorage.setItem("calculator_service", JSON.stringify({ id: 3, label: "Writing" }));
                    localStorage.setItem("calculator_pages", JSON.stringify({ value: 1, label: "Essay (Any Type)" }));
                    localStorage.setItem("calculator_word", JSON.stringify({ id: 1, label: "280 words / 1 page" }));
                    localStorage.setItem('currStep', 1)

                    localStorage.removeItem('orderViewId')
                    localStorage.removeItem('onceStep')
                    localStorage.removeItem('orderFileUpload')
                    localStorage.removeItem('hireWriter')
                    localStorage.removeItem('editCoupon');

                    Router.push(`${process.env.basePath}/my-orders/order-details?order_id=${this.state.oDetails && parseInt(this.state.oDetails.order_id)}`);

                }
            }).catch(error => console.error(`Error: ${error}`));
        }
    }

    render() {
        return (
            <>
                <div className="row align-items-center">
                    <div className="col-md-8 col-xl-6 m-auto order-2 order-xl-1">
                        <div className="section-part leftSide orderComplete">
                            <div className="orderSummary rightSection">
                                <h3 className="section-title">Order Summary</h3>
                                <div className="calculate-Part pt-0">
                                    <div className="price d-flex justify-content-between">
                                        <span>Order ID</span> <span> {this.state.oDetails && this.state.oDetails.order_no_custom} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Type of Service</span> <span> {this.state.oDetails && this.state.oDetails.service_id} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Academic Level</span> <span> {this.state.oDetails && this.state.oDetails.academic_id} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Subject</span> <span> {this.state.oDetails && this.state.oDetails.subject} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Page {this.state.oDetails && this.state.oDetails.pages && parseInt(this.state.oDetails.pages) > 1 ? "s" : ""}</span> <span> {this.state.oDetails && this.state.oDetails.pages} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Slides</span> <span> {this.state.oDetails && this.state.oDetails.slides} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Turnitin Plagiarism Report </span> <span> {this.state.oDetails && this.state.oDetails.is_plagiarism_report === 1 ? "Yes" : "No"}  </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Top 10 Writers</span> <span> {this.state.oDetails && this.state.oDetails.writer} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Deadline</span> <span> {this.state.oDetails && this.state.oDetails.deadlinedate} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Order On</span> <span> {this.state.oDetails && this.state.oDetails.date_paid} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Payment Mode</span> <span> {this.state.oDetails && this.state.pDetails.payment_mode} </span>
                                    </div>
                                    <div className="price d-flex justify-content-between">
                                        <span>Transaction ID</span> <span> {this.state.oDetails && this.state.pDetails.transaction_id} </span>
                                    </div>
                                    <div className="calculate-Part bottomCalculate">
                                        <div className="price d-flex justify-content-between">
                                            <span>SubTotal</span> <span> $ {this.state.oDetails && this.state.oDetails.sub_total} </span>
                                        </div>
                                        <div className="price d-flex justify-content-between">
                                            <span>Coupon Discount</span> <span> $ {this.state.oDetails && this.state.oDetails.coupon_discount ? this.state.oDetails.coupon_discount : '0.00'} </span>
                                        </div>
                                        {this.state.oDetails && this.state.oDetails.redeemAmt && parseFloat(this.state.oDetails.redeemAmt) > 0 ?
                                            <div className="price d-flex justify-content-between">
                                                <span>Redeemed Amount</span> <span> $ {this.state.oDetails.redeemAmt} </span>
                                            </div> :
                                            null}
                                        <div className="bottomPart">
                                            <div className="d-flex justify-content-between">
                                                <span className="totalPrice">Total</span>
                                                <span className="price mt-0"> $ {this.state.oDetails && this.state.oDetails.total} </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 order-md-2">
                        <div className="orderSummaryDiv">
                            <div className="orderingDiv text-center">
                                <Img title="Thank you For Ordering" src="/order/completedOrder.svg" alt="Thank you For Ordering" width={280} height={280} />
                                <h3 className="title">Thank you For Ordering</h3>
                                <p className="desc">
                                    We received your order and will begin processing it soon.
                                    Your order information appears below.
                                </p>
                                <button className="btn theme-btn" onClick={this.viewOrder}>
                                    View Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Index