import React, { Component } from 'react';
import Router from "next/router";
import { Modal, ModalBody } from 'reactstrap';
import { jwtDecode } from "../../../helper/jwtHelper";
import { apiHelper } from '../../../helper/apiHelper';

// scss
import orderCss from "../../../styles/order.scss";

// Toaster
import ReactToastifyCss from 'react-toastify/dist/ReactToastify.min.css';

import Img from '../../Common/image';
import close from "../../../public/close.svg";
import couponOffer from "../../../public/couponOffer.webp";

const a_Coupon = [
    { save: "20%", dis: "20%", text: "discount For Every New Assignment", desc: "Get Flat 20% Discount Upto $50 on all Assignment Orders", topPick: true },
    { save: "50%", dis: "30%", text: "discount On Essay Writing", desc: "Here's 20% off on your next order! May all the good things of life be yours, not only at Thanksgiving but throughout the coming year. $50 or more purchase" },
    { save: "40%", dis: "40%", text: "discount On Essay Writing", desc: "Get Flat 40% Discount Upto $50 on all Esaay Writing Ordrs" },
]
class SidebarRight extends Component {

    _unmounted = false;

    constructor() {
        super();
        this.state = {
            isLogin: false,

            // Data
            enteredTopic: "Writer's Choice",
            serviceName: "",
            paperName: "",
            subjectName: "English",
            writerName: "College",
            numberCounter: "",
            numberCounterSlide: "",

            // pages
            pageCost: "",
            pageTotal: "",

            // powerpoint
            ppslideCost: "",
            ppslideTotal: "",

            isAppliedDiscount: false,
            couponDisc: 0,
            enteredCoupon: "",
            coupenSuccess: "",
            coupenError: "",
            source: "",

            // chart
            chart: "",
            chartCost: "",
            chartTotal: "",

            // slide
            slide: "",
            slideCost: "",

            abstractPrice: "",
            emailPrice: "",
            turnitinPrice: "",
            topWriter: "",
            writerId: "",
            writer20: '',

            // total Price
            totalPrice: 0,
            lifeTimeDesc: 0,

            // loader
            isCodeLoader: false,

            isShowCalculatePart: false,
            discountToken: '',
            orderId: '',

            // Popup 
            popup: false,

            // Special Coupon
            availCoupon: a_Coupon,
            totalCoupon: 0,
            specialCouponSuccess: "",
            specialCouponError: ""
        }
    }

    // componentDidMount
    componentDidMount() {
        this._unmounted = true;

        if (this._unmounted) {

            if (Router.router && Router.router.query) {
                var orderId = Router.router.query.order_id
                if (orderId && orderId !== '') {
                    this.setState({ orderId: orderId });
                }

                let ccode = Router.router.query.code || Router.router.query.discount_code;
                if (ccode && ccode !== '') {
                    this.setState({ enteredCoupon: ccode }, () => { this.setOrderData(true); });
                } else {
                    //getAlldata
                    this.getAlldata();
                }

            } else {
                //getAlldata
                this.getAlldata();
            }

            //set user is login or not
            var user_token = localStorage.getItem("token");
            if (user_token) { this.setState({ isLogin: true }); }
            else { this.setState({ isLogin: false }); }

            //get coupon code
            this.getCouponData();
        }
    }

    componentWillUnmount() {
        this._unmounted = false;
    }

    //getAlldata
    getAlldata = () => {
        if (this._unmounted) {
            //orderToken
            let data1 = localStorage.getItem('orderToken');

            if (data1 && data1 !== '') {
                var orderToken = jwtDecode(data1);

                if (orderToken && orderToken !== '') {
                    // console.log(orderToken.couponDisc);
                    this.setState({
                        totalPrice: orderToken.totalPrice,
                        pageTotal: orderToken.pageTotal,
                        chart: orderToken.chart,
                        chartCost: orderToken.chartCost,
                        chartTotal: orderToken.chartTotal,
                        slide: orderToken.slide,
                        slideCost: orderToken.slideCost,
                        ppslideTotal: orderToken.slideTotal,
                        couponDisc: orderToken.couponDisc ? parseFloat(orderToken.couponDisc) : 0.00,
                        lifeTimeDesc: orderToken.lifeTimeDesc ? parseFloat(orderToken.lifeTimeDesc) : 0.00,
                        serviceName: orderToken.service,
                        enteredCoupon: (localStorage.getItem('editCoupon') && localStorage.getItem('editCoupon') !== '') ? localStorage.getItem('editCoupon') : orderToken.coupon_code,
                        coupenSuccess: orderToken.coupon_code !== '' && orderToken.coupon_status ? orderToken.coupon_message : '',
                        coupenError: orderToken.coupon_code !== '' && !orderToken.coupon_status ? orderToken.coupon_message : '',
                        writer20: orderToken.additional_20_percent
                    });

                }
            }

            //orderRight
            var data = localStorage.getItem("orderRight");
            if (data && data !== '') {
                var orderData = JSON.parse(data);
                if (orderData) {
                    this.setState({
                        enteredTopic: this.props.enteredTopic,
                        writerName: orderData.level ? orderData.level : 'College',
                        subjectName: orderData.subject ? orderData.subject : 'English',
                        paperName: orderData.paper,
                        numberCounter: orderData.page,
                        numberCounterSlide: orderData.slide,
                        pageCost: orderData.pageCost,
                        ppslideCost: orderData.ppSlideCost,
                        source: orderData.source,
                        abstractPrice: orderData.abstractPrice,
                        turnitinPrice: orderData.turnitinPrice,
                        emailPrice: orderData.emailPrice,
                        topWriter: orderData.topWriter,
                        writerId: orderData.writerId
                    });
                }
            }

            // setTimeout(() => {
            //     if (
            //         (
            //             this.state.source > 0 ||
            //             this.state.chart > 0 ||
            //             (this.state.abstractPrice && this.state.abstractPrice > 0) ||
            //             this.props.emailToggle ||
            //             (this.state.turnitinPrice && this.state.turnitinPrice > 0) ||
            //             (this.state.topWriter && this.state.topWriter.length > 0) ||
            //             (this.state.writerId && this.state.writerId !== '') ||
            //             (this.state.lifeTimeDesc && this.state.lifeTimeDesc > 0) ||
            //             this.state.numberCounterSlide > 0
            //         ) ||
            //         ((this.props.currentStep === "") || (this.props.currentStep === undefined) || (this.props.currentStep === 1))
            //     ) {
            //         this.setState({
            //             isShowCalculatePart: true
            //         })
            //     } else {
            //         this.setState({ isShowCalculatePart: false })
            //     }
            // }, 50);
        }
    }

    //getCouponData
    getCouponData = async () => {
        await apiHelper('specialCoupon', 'POST', null, null).then(res => {
            if (res.data.status === true) {
                this.setState({ availCoupon: res.data.data.available_coupons });
                this.setState({ totalCoupon: res.data.data.count });
            }
        });
    }


    // componentDidUpdate
    componentDidUpdate = (prevProps, prevState) => {
        if (this._unmounted) {
            if (this.props.currentStep !== prevProps.currentStep || this.props.isorderChanged !== prevProps.isorderChanged) {

                // if (
                //     ((this.props.discountCoupon !== prevProps.discountCoupon) || this.props.discountCoupon === '') &&
                //     (this.state.discountToken !== prevState.discountToken || this.state.discountToken === '')
                // ) {
                // check coupen code from orderToken
                // let data1 = localStorage.getItem('orderToken');

                // if (data1 && data1 !== '') {
                //     var orderToken = jwtDecode(data1);
                //     if (orderToken.coupon_code !== "" && this.state.enteredCoupon !== orderToken.coupon_code &&
                //         (localStorage.getItem('discount_token') && localStorage.getItem('discount_token') !== this.state.discountToken)
                //     ) {
                //         this.applyCouponHandler(orderToken.coupon_code);
                //     }
                // }

                // } else {
                if (localStorage.getItem('editCoupon') && localStorage.getItem('editCoupon') !== '') {
                    this.setState({
                        enteredCoupon: localStorage.getItem('editCoupon')
                    }, () => {
                        this.setOrderData(true)
                    })
                } else {
                    this.getAlldata();
                }

                // }
            }
        }

    }

    setOrderData = async (applyCoupon) => {
        if (this._unmounted) {
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
            formData.append("coupon_code", this.state.enteredCoupon ? this.state.enteredCoupon : '');
            formData.append("slide", decodeToken && decodeToken.slide ? decodeToken.slide : 0);
            formData.append("chart", decodeToken && decodeToken.chart);
            formData.append("preferred_writer", decodeToken && decodeToken.preferred_writer);
            formData.append("writer_id", decodeToken && decodeToken.writer_id ? decodeToken.writer_id : '');
            formData.append("additionalextra", decodeToken && decodeToken.additionalextra);
            formData.append("user_token", convertedUserToken && convertedUserToken.value ? convertedUserToken.value : '');

            formData.append("deadlineLable", decodeToken && decodeToken.deadlineLable ? decodeToken.deadlineLable : '');
            formData.append("deadlineid", decodeToken && decodeToken.deadlineid ? decodeToken.deadlineid : 0);

            apiHelper('setOrderV1', 'POST', formData, null).then(res => {
                if (res.data.status) {
                    const data = res.data.data;
                    var decodeOrder = jwtDecode(data.order_token);

                    if (applyCoupon) {
                        localStorage.removeItem('editCoupon');
                    }

                    if (decodeOrder && decodeOrder.coupon_status) {
                        this.setState({
                            coupenSuccess: decodeOrder.coupon_message + ' You saved: $' + decodeOrder.couponDisc
                        });
                    } else if (decodeOrder && !decodeOrder.coupon_status) {
                        this.setState({ coupenError: decodeOrder.coupon_message });

                    }

                    localStorage.setItem("orderToken", data.order_token);
                    setTimeout(() => {
                        this.getAlldata();
                    }, 50);
                }
            }).catch(error => console.error(`Error: ${error}`));
        }
    }

    //applyCouponHandler
    applyCouponHandler = (code) => {
        if (this._unmounted) {
            if (code && code !== '') {
                this.setOrderData(true);
            }
            else {
                this.setState({ coupenError: "Enter Coupon Code" });
            }
        }
    }

    closeCouponModel = () => {
        this.setState({
            popup: !this.state.popup
        });
    }

    // Coupon change handler
    changeCoupen = (e) => {
        if (this._unmounted) {
            this.setState({ enteredCoupon: e.target.value, coupenSuccess: '', coupenError: '' });
            localStorage.setItem('editCoupon', e.target.value);
        }
    }

    // saveSecondStep
    saveSecondStep = () => {
        if (this._unmounted) {
            this.props.onNext2(true);
        }
    }

    removeCoupon = (type) => {
        if (this._unmounted) {

            var discount = '';
            // this.props.setDiscount('')
            if (type !== 'remove') {
                let data1 = localStorage.getItem('orderToken');

                if (data1 && data1 !== '') {
                    var orderToken = jwtDecode(data1);

                    if (orderToken && orderToken !== '') {
                        discount = orderToken.coupon_code
                        localStorage.setItem('editCoupon', discount);
                    }
                }
            }

            this.setState({
                enteredCoupon: ''
                // enteredCoupon: (type === 'remove' ? '' : discount)
            }, () => {
                setTimeout(() => {
                    this.setOrderData(type === 'remove' ? true : false);

                    if (Router.router && Router.router.query) {
                        let ccode = Router.router.query.code || Router.router.query.discount_code;
                        if (ccode && ccode !== '') {
                            window.history.replaceState(null, null, Router.router.pathname)
                        }
                    }
                }, 50);
            })
        }
    }

    //applySpecialCoupon
    applySpecialCoupon = async (coupon) => {

        this.setState({ enteredCoupon: coupon, popup: false });

        var order_token = localStorage.getItem("orderToken");

        var uTokenValue = "";
        if (localStorage.getItem("token")) {
            var user_token = JSON.parse(localStorage.getItem("token"));
            var uTokenValue = user_token.value;
        }

        const formData = new FormData();
        formData.append("coupon_code", coupon);
        formData.append("order_token", order_token);
        formData.append("user_token", uTokenValue);

        apiHelper('applyDiscount', 'POST', formData, null).then(res => {

            if (res.data.status === true) {

                localStorage.setItem('discount_token', res.data.data.discount_token);
                let dToken = jwtDecode(res.data.data.discount_token);
                this.setState({ coupenSuccess: res.data.message, coupenError: "", couponDisc: dToken.coupon_discount });

                this.setOrderData(true);

            }
            else if (res.data.status === false) {
                this.setState({ coupenError: res.data.message, coupenSuccess: "" });
            }
        });

    }

    render() {

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: orderCss }}></style>
                <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>

                <div className="col-md-4">
                    <div className="section-part rightSide">
                        <div className="rightSection">
                            <h3 className="section-title">{this.state.enteredTopic ? this.state.enteredTopic : "Writer's Choice"}</h3>
                            <div className="writersOptions">
                                <div className="options">
                                    <span className="text1">Type of Service </span>
                                    <span className="text2">
                                        {(() => {
                                            if (this.state.serviceName === 1) {
                                                return (<>Editing</>)
                                            }
                                            else if (this.state.serviceName === 2) {
                                                return (<>Powerpoint</>)
                                            }
                                            else if (this.state.serviceName === 3) {
                                                return (<>Writing</>)
                                            }
                                        })()} </span>
                                </div>

                                <div className="options">
                                    <span className="text1">Writer Level </span>
                                    <span className="text2">{this.state.writerName} </span>
                                </div>
                                <div className="options">
                                    <span className="text1">Type of  {this.state.serviceName === 2 ? "Slide" : "Paper"} </span>
                                    <span className="text2">{this.state.paperName ? this.state.paperName : "Essay (Any Type)"} </span>
                                </div>
                                <div className="options">
                                    <span className="text1">Subject</span>
                                    <span className="text2">{this.state.subjectName}</span>
                                </div>
                            </div>
                        </div>

                        <div className={`calculate-Part`}>
                        {/* <div className={`${this.state.isShowCalculatePart ? 'calculate-Part' : ''}`}> */}
                            {/* {(() => {
                                if ((this.props.currentStep === "") || (this.props.currentStep === undefined) || (this.props.currentStep === 1)) {
                                    return ( */}
                            {/* <>
                                            {this.state.serviceName === 2 ? */}
                            {/* <> */}
                            {this.state.numberCounterSlide > 0 ?
                                <div className="price d-flex justify-content-between align-items-center">
                                    <span title={`${this.state.numberCounterSlide} Slide(s) x $ ${this.state.ppslideCost}`}>{this.state.numberCounterSlide} Slide(s) x $ {this.state.ppslideCost}</span>
                                    <span title={`$ ${this.state.ppslideTotal}`}>$ {parseFloat(this.state.ppslideTotal).toFixed(2)}</span>
                                </div>
                                : null}
                            {/* </> */}
                            {/* : */}
                            {/* <> */}
                            {this.state.numberCounter && this.state.numberCounter > 0 ?
                                <div className="price d-flex justify-content-between align-items-center">
                                    <span title={`${this.state.numberCounter} Page(s) x $ ${this.state.pageCost}`}>{this.state.numberCounter} Page(s) x $ {this.state.pageCost}</span>
                                    <span title={`$ ${this.state.pageTotal}`}>$ {this.state.pageTotal}</span>
                                </div> :
                                null}
                            {/* </> */}
                            {/* }
                                        </>
                                    ) */}
                            {/* } else if (this.props.currentStep === 2) {
                                    return (
                                        <>
                                            {this.state.numberCounterSlide > 0 ?
                                                <div className="price d-flex justify-content-between">
                                                    <span title={`${this.state.numberCounterSlide} Slide(s) x $ ${this.state.ppslideCost}`}>{this.state.numberCounterSlide} Slide(s) x $ {this.state.ppslideCost}</span>
                                                    <span title={`$ ${this.state.ppslideTotal}`}>$ {parseFloat(this.state.ppslideTotal).toFixed(2)}</span>
                                                </div>
                                                : null}
                                        </>
                                    )
                                }
                            })()} */}

                            {/* {this.props.currentStep === 2 ? */}
                            <>
                                {this.state.source > 0 ?
                                    <div className="price d-flex justify-content-between">
                                        <span title={`${this.state.source} Source(s)`}>{this.state.source} Source(s)</span>
                                        <span title="Free">Free</span>
                                    </div>
                                    : null
                                }
                                {this.state.chart > 0 ?
                                    <div className="price d-flex justify-content-between">
                                        <span title={`${this.state.chart} Chart(s) x ${this.state.chartCost}`}>{this.state.chart} Chart(s) x ${this.state.chartCost}</span>
                                        <span title={`$ ${this.state.chartTotal}`}>${this.state.chartTotal}</span>
                                    </div>
                                    : null
                                }

                                {this.state.abstractPrice > 0 ?
                                    <div className="price d-flex justify-content-between">
                                        <span title="Abstract Page">Abstract Page</span>
                                        <span title={`$ ${this.state.abstractPrice}`}>${this.state.abstractPrice}</span>
                                    </div>
                                    : null
                                }

                                {this.props.emailToggle === true ?
                                    <div className="price d-flex justify-content-between">
                                        <span title="Send it to my E-mail">Send it to my E-mail</span>
                                        <span title={`${this.state.emailPrice && (this.state.emailPrice.toString()).toLowerCase() === 'free' ? '' : '$'}${this.state.emailPrice}`}>{this.state.emailPrice && (this.state.emailPrice.toString()).toLowerCase() === 'free' ? '' : '$'}{this.state.emailPrice}</span>
                                    </div>
                                    : null
                                }

                                {this.state.turnitinPrice > 0 || (this.state.turnitinPrice && this.state.turnitinPrice.toLowerCase() === 'free') ?
                                    <div className="price d-flex justify-content-between">
                                        <span title="Turnitin Plagiarism Report">Turnitin Plagiarism Report</span>
                                        <span title={`${this.state.turnitinPrice && (this.state.turnitinPrice.toString()).toLowerCase() === 'free' ? '' : '$'}${this.state.turnitinPrice}`}>{this.state.turnitinPrice && (this.state.turnitinPrice.toString()).toLowerCase() === 'free' ? '' : '$'}{this.state.turnitinPrice}</span>
                                    </div>
                                    : null
                                }
                                {this.state.topWriter && this.state.topWriter.length > 0 ?
                                    <div className="price d-flex justify-content-between">
                                        <span title="Top 10 Writers">Top 10 Writers</span>
                                        <span title={this.state.topWriter}>{this.state.topWriter}</span>
                                    </div>
                                    : null
                                }

                                {this.state.writerId && this.state.writerId.length > 0 ?
                                    <div className="price d-flex justify-content-between">
                                        <span title={`Writer ID${this.state.writer20 ? this.state.writerId : ''}`}>Writer ID {this.state.writer20 ? this.state.writerId : ''}</span>
                                        <span title={`${this.state.writer20 ? '+20%' : this.state.writerId}`}>{this.state.writer20 ? '+20%' : this.state.writerId}</span>
                                    </div>
                                    : null
                                }

                                {this.state.lifeTimeDesc && this.state.lifeTimeDesc > 0 ?
                                    <div className="price d-flex justify-content-between">
                                        <span title="Lifetime Discount">Lifetime Discount</span>
                                        <span title={`$ ${this.state.lifeTimeDesc ? this.state.lifeTimeDesc : 0.00}`}>$ {this.state.lifeTimeDesc ? this.state.lifeTimeDesc : 0.00}</span>
                                    </div>
                                    : null
                                }
                            </>
                            {/* :
                                null
                            } */}
                        </div>
                        <div className="couponCode border-top-0">

                            {(this.state.coupenSuccess !== '' && this.state.couponDisc > 0) ?
                                <>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="appliedCoupon success">
                                            {this.state.coupenSuccess} $ {this.state.couponDisc ? this.state.couponDisc : 0.00} Saved.
                                        </div>
                                        <div className="couponActionBtn d-flex">
                                            <div onClick={() => this.removeCoupon('edit')} className="editCoupon me-2">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3333 9.77317V13.3332C13.3333 13.6868 13.1928 14.0259 12.9428 14.276C12.6927 14.526 12.3536 14.6665 12 14.6665H2.66665C2.31302 14.6665 1.97389 14.526 1.72384 14.276C1.47379 14.0259 1.33331 13.6868 1.33331 13.3332V3.99984C1.33331 3.64622 1.47379 3.30708 1.72384 3.05703C1.97389 2.80698 2.31302 2.6665 2.66665 2.6665H6.22665" stroke="#12245A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 1.3335L14.6666 4.00016L7.99998 10.6668H5.33331V8.00016L12 1.3335Z" stroke="#12245A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div onClick={() => this.removeCoupon('remove')} className="removCoupon">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.4895 1.98975L13.4895 13.9897" stroke="#de350b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.6567 2L7.99988 7.65685" stroke="#de350b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M1.65649 14L7.65649 8" stroke="#de350b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <label>Have a coupon code ?</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Enter Code" value={this.state.enteredCoupon} onChange={(e) => this.changeCoupen(e)} />
                                        <button className="btn secondary-btn apply-btn" onClick={() => this.applyCouponHandler(this.state.enteredCoupon)}>Apply</button>
                                    </div>

                                </>
                            }
                            <div className="couponOffer d-flex align-items-center mt-2">
                                <Img src={couponOffer} className="me-2" />
                                <span onClick={() => this.setState({ popup: !this.state.popup })}>Check {this.state.totalCoupon} Coupon available</span>
                            </div>
                            {this.state.coupenError ? <p className="errorMsg">{this.state.coupenError}</p> : null}
                        </div>

                        <div className="bottomPart">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <span className="totalPrice">Total Price  </span>
                                <span className="price">$ {parseFloat(this.state.totalPrice).toFixed(2)}</span>
                            </div>
                            <div className="mt-2">
                                {
                                    this.state.isLogin ?
                                        <>
                                            {this.props.currentStep === 1 ?
                                                <>
                                                    {this.props.isTurnitin ?
                                                        <button onClick={this.props.onSkipNext} className="btn theme-btn w-100 step1">Next Step <Img src="/order/nextStep.svg" title="Next" width={12} height={12} className="ms-2" alt="Next Step Image" /></button>
                                                        :
                                                        <button onClick={this.props.onNext} className="btn theme-btn w-100 step1">Next Step <Img src="/order/nextStep.svg" title="Next" width={12} height={12} className="ms-2" alt="Next Step Image" /></button>}
                                                </>
                                                :
                                                <>
                                                    {this.props.currentStep === 2 ?
                                                        <button onClick={() => this.saveSecondStep()} className="btn theme-btn w-100 step2">
                                                            {(this.state.orderId && this.state.orderId !== '') ? 'Save Changes' : 'Save & Continue'}
                                                        </button>
                                                        :
                                                        <>
                                                            {this.props.currentStep === 3 ?
                                                                <>
                                                                    <a href={`${process.env.hostBaseUrl}/login`} className="btn theme-btn w-100">Order Now<Img src="/order/nextStep.svg" title="Next" width={12} height={12} className="ms-2" alt="Next Step Image" /></a>
                                                                </> :
                                                                null}
                                                        </>
                                                    }
                                                </>
                                            }
                                        </>
                                        :
                                        <button onClick={() => this.props.submitFirstStep()} className="btn theme-btn w-100"> Next Step <Img src="/order/nextStep.svg" title="Next" width={12} height={12} className="ms-2" alt="Next Step Image" /></button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popup For Coupon */}
                <Modal isOpen={this.state.popup} toggle={() => this.setState({ popup: !this.state.popup })} centered className="couponDetailModal">
                    <div className="couponDetail">
                        <h2 className="section-title text-center">{this.state.totalCoupon} Special Coupons Available</h2>
                        <div className="close" onClick={this.closeCouponModel}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.4895 1.98975L13.4895 13.9897" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.6567 2L7.99988 7.65685" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.65649 14L7.65649 8" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="order bg-transparent d-md-flex">
                            {this.state.availCoupon.map((list, index) => {
                                return (
                                    <div className="couponWrap bg-white section-part" key={index}>
                                        {list.top_pick ? <span className="topPick"></span> : null}
                                        <span className="text-uppercase saveDis">{list.coupon_discount}</span>
                                        {/* <div className="disText">{list.dis}<span className="discount"> {list.coupon_discount}</span> </div> */}

                                        <div className="disText"><span className="discount"> {list.coupon_code}</span> </div>

                                        <p className="desc mb-3">{list.coupon_description}</p>
                                        <div className="input-group couponCode border-top-0 p-0 border-bottom-0">
                                            <input type="text" className="form-control me-0" readOnly
                                                placeholder="Enter Code"
                                                value={list.coupon_code} />
                                            <button type="button"
                                                className="btn secondary-btn apply-btn"
                                                onClick={() => this.applySpecialCoupon(list.coupon_code)}>Apply</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}
export default SidebarRight