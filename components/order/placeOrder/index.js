import React, { Component } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Modal, ModalBody
} from "reactstrap";

import { toast, ToastContainer } from 'react-toastify';
import ReactToastifyCss from 'react-toastify/dist/ReactToastify.min.css';

// API and JWT helper
import { apiHelper } from '../../../helper/apiHelper';
import { jwtDecode } from "../../../helper/jwtHelper";

//Icons
import OneIcon from "./icons/one";
import TwoIcon from "./icons/two";
// import ThreeIcon from "./icons/three";
import FourIcon from "./icons/four";
// import EditIcon from "./icons/edit";
// import DeleteIcon from "./icons/delete";

// Sub components
import OrderPaperDetail from "./orderPaperDetail/index";
import OrderPreference from "./orderPreference/index";
// import CheckOrderDetails from "./checkOrderDetails/index";
// import CheckOrderFile from "./checkOrderFile/index";
// import OrderSummary from "./orderSummary/index";
import PaymentSection from "./paymentSection/index";

// sub components
import DraftOrder from './draftOrder';

// order complete
import OrderCompleteSection from "./orderComplete"
import Router from 'next/router';

class Index extends Component {
    _unmounted = false;

    constructor() {
        super()
        this.state = {

            // Main Steps
            currentStep: 1,
            completedStep: 1,

            // Extra Step for Logic
            onceStep: [1],

            // Inner Step 
            listTab: 1,
            draftTab: 1,

            // Default steps 
            step1: "disabled",
            step2: "disabled",
            step3: "disabled",
            step4: "disabled",

            leaveChanges: false,

            isFullOrderComplete: false,

            current_slide: 0,
            isOrderEdit: false,
            orderToken: '',
            totalPrice: 0
        }
    }

    // ToggleStep
    toggleStep = (step) => {
        if (this._unmounted) {
            this.setState({ currentStep: step });
            setTimeout(() => { this.changeStatus(); }, 10);
        }
    }

    //componentDidMount
    componentDidMount() {

        this._unmounted = true;

        if (this._unmounted) {
            //onceStep

            if (localStorage.getItem('onceStep') && localStorage.getItem('onceStep') !== '') {
                let once_step = JSON.parse(localStorage.getItem('onceStep'));
                if (once_step && once_step.length > 0) {
                    let o_arr = once_step;
                    // let o_arr = once_step.split(',');
                    var o_arr_str = o_arr.map(function (x) { return parseInt(x); });
                    this.setState({ onceStep: o_arr_str });
                } else {
                    this.setState({ onceStep: [1] });
                }
            } else {
                const loginToken = localStorage.getItem('token');
                var convertedToken = JSON.parse(loginToken);
                if (loginToken) {
                    const now = new Date();
                    if (now.getTime() > convertedToken.expiry) {
                        localStorage.removeItem('token');
                        Router.push(`${process.env.basePath}/login`);
                    } else {
                        let data1 = localStorage.getItem('orderToken');
                        if (data1 && data1 !== '') {
                            var orderToken = jwtDecode(data1);
                            if (orderToken.add_detail !== "") {
                                this.setState({ onceStep: [1] }, () => {
                                    this.changeNext(1)
                                    this.toggleStep(2)
                                });
                            }
                        }
                    }
                } else {
                    this.setState({ onceStep: [1] });
                }
            }

            var ordId = this.getIdFromUrl()
            if (ordId && ordId !== '') {
                this.getOrder(ordId, false);
            }

            // call changeStatus
            setTimeout(() => { this.changeStatus(); }, 100);
            var step = localStorage.getItem('currStep') && localStorage.getItem('currStep') !== '' ? parseInt(localStorage.getItem('currStep')) : 1
            if (step === 2) {
                this.changeNext(1)
                this.toggleStep(parseInt(step))
            }
            if (step === 3 || step === 4) {
                this.changeNext(1)
                this.changeNext(2)
                if (step === 4) {
                    this.changeNext(3)
                }
                this.changeOrderEditVal(true);
                this.toggleStep(parseInt(step))
            }
        }
    }

    componentWillUnmount() {
        this.resetOrder('')
        this._unmounted = false;
        localStorage.removeItem('cardData');
    }

    resetOrder = (url) => {
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

                    if (url !== '') {
                        Router.router.push(url)
                    }

                }
            }).catch(error => console.error(`Error: ${error}`));
        }
    }

    getOrder = async (orderId, editOrder) => {
        if (this._unmounted) {
            const loginToken = localStorage.getItem('token');
            var convertedToken = JSON.parse(loginToken);

            const formData = new FormData();
            formData.append("order_id", orderId);
            formData.append("user_token", convertedToken ? convertedToken.value : '');

            var res = await apiHelper('getorderV1', 'POST', formData, null)
            if (res.data.status) {
                const data = res.data.data;

                var decodeOrder = jwtDecode(data.order_token);
                if (!decodeOrder || (decodeOrder && decodeOrder.payment_status)) {
                    Router.router.push(`${process.env.basePath}/my-orders/order-details?order_id=${orderId}`)
                } else if (!decodeOrder || (decodeOrder && decodeOrder.is_deleted)) {
                    Router.router.push(`${process.env.basePath}/my-orders`)
                } else {
                    localStorage.setItem("orderToken", data.order_token);
                    localStorage.setItem("uploadedToken", data.uploaded_token);

                    var digit = decodeOrder.deadline ? decodeOrder.deadline : 19
                    var duration = decodeOrder.duration ? decodeOrder.duration : 'Days'
                    var deadline = {
                        "digit": digit,
                        "durations": duration,
                        "label": `${digit} ${duration} / ${decodeOrder.deadlineLable && decodeOrder.deadlineLable}`
                    }

                    var serviceLabel = decodeOrder.service ? (decodeOrder.service === 1 ? 'Editing' : (decodeOrder.service === 2 ? 'PowerPoint' : 'Writing')) : 'Writing';
                    localStorage.setItem('calculator_deadline', JSON.stringify(deadline))
                    localStorage.setItem("calculator_service", JSON.stringify({ id: decodeOrder.service ? decodeOrder.service : 3, label: serviceLabel }));
                    localStorage.setItem("calculator_pages", JSON.stringify({ value: decodeOrder.paper ? decodeOrder.paper : 1, label: decodeOrder.paper_label ? decodeOrder.paper_label : 'Essay (Any Type)' }));
                    localStorage.setItem("calculator_word", JSON.stringify({ id: 1, label: "280 words / 1 page" }));

                    this.setState({
                        orderToken: data.order_token
                    }, () => {
                        if (editOrder) {
                            localStorage.setItem('onceStep', JSON.stringify([1, 2]));
                            this.setState({ onceStep: [1, 2] }, () => {
                                this.changePrev(2)
                                // this.changePrev(1)
                                this.toggleStep(2)
                            });
                        }
                    })
                }
            }
        }
    }

    //changeNext
    changeNext = (step) => {
        if (this._unmounted) {
            // set state of first time occured
            let oSt = this.state.onceStep;
            oSt.push(parseInt(step) + 1);
            localStorage.setItem('onceStep', JSON.stringify(oSt));

            this.setState({
                onceStep: oSt,
                currentStep: parseInt(step) + 1
            }, () => {
                this.setState({ completedStep: parseInt(step) + 1 });
                this.changeStatus();
            });
        }
    }

    //changePrev
    changePrev = (step) => {
        if (this._unmounted) {
            this.setState({ currentStep: parseInt(step) - 1 }, () => {
                this.setState({ completedStep: parseInt(step) + 1 });
                this.changeStatus();
            });
        }
    }

    //changeStatus
    changeStatus = () => {
        if (this._unmounted) {
            let { currentStep, completedStep, onceStep } = this.state;

            localStorage.setItem('currStep', currentStep);
            var ordId = this.getIdFromUrl()

            let s1 = this.state.step1;
            let s2 = this.state.step2;
            let s3 = this.state.step3;
            let s4 = this.state.step4;
            let e1 = onceStep.find(e1 => e1 === 1);
            if (e1) { s1 = s1.replaceAll("disabled", ""); }
            let e2 = onceStep.find(e2 => e2 === 2);
            if (e2) { s2 = s2.replaceAll("disabled", ""); }
            let e3 = onceStep.find(e3 => e3 === 3);
            if (e3) { s3 = s3.replaceAll("disabled", ""); }
            let e4 = onceStep.find(e4 => e4 === 4);
            if (e4) { s4 = s4.replaceAll("disabled", ""); }
            // active step
            if (currentStep === 1) {
                if (currentStep < completedStep) { s1 += " done active"; }
                else { s1 += " active"; }
                s4 = s4.replaceAll("active", ""); s3 = s3.replaceAll("active", ""); s2 = s2.replaceAll("active", "");
                if (ordId && ordId !== '' && !this.state.isOrderEdit) {
                    s3 += " disabled"; s4 += " disabled";
                    s2 = s2.replaceAll("disabled", "");
                }
            }
            if (currentStep === 2) {
                s1 = s1.replaceAll("active", "");
                s1 += " done";
                if (currentStep < completedStep) { s2 += " done active"; } else { s2 += " active"; }
                s4 = s4.replaceAll("active", ""); s3 = s3.replaceAll("active", "");
            }
            if (currentStep === 3) {
                s1 = s1.replaceAll("active", "");
                s2 = s2.replaceAll("active", "");
                s1 += " done";
                s2 += " done";
                if (ordId && ordId !== '' && this.state.isOrderEdit) {
                    s1 += " disabled"; s2 += " disabled";
                }
                if (currentStep < completedStep) { s3 += " done active"; } else { s3 += " active"; }
                s4 = s4.replaceAll("active", "");
            }
            if (currentStep === 4) {
                s1 = s1.replaceAll("active", "");
                s2 = s2.replaceAll("active", "");
                s3 = s3.replaceAll("active", "");
                s1 += " done";
                s2 += " done";
                s3 += " done";
                if (currentStep < completedStep) { s4 += " done active"; } else { s4 += " active"; }
            }
            if (currentStep === 5) {
                s1 = " disabled";
                s2 = " disabled";
                s3 = " disabled";
                s4 = " disabled";
            }
            this.setState({ step1: this.removeDuplication(s1), step2: this.removeDuplication(s2), step3: this.removeDuplication(s3), step4: this.removeDuplication(s4) });
        }
    }
    removeDuplication = (string) => {
        if (this._unmounted) {
            return string.split(' ').filter(function (allItems, i, a) {
                return i == a.indexOf(allItems);
            }).join(' ');
        } else {
            return string;
        }
    }

    //skipNextStep
    skipNextStep = (e) => {
        // console.log(e);
    }

    //redirectPage
    redirectPage = (path) => {
        if (this._unmounted) {
            this.props.redirectPage(path);
        }
    }

    confirmLeavePage = () => {
        if (this._unmounted) {
            this.setState({
                current_slide: 0,
                isOrderEdit: false,
                leaveChanges: false
            }, () => {
                this.resetOrder(`${process.env.basePath}/order`)
            })
        }
    }

    cancelEditOrder = () => {
        if (this._unmounted) {
            localStorage.setItem('onceStep', JSON.stringify([1, 2, 3]));
            this.setState({ isOrderEdit: true, onceStep: [1, 2, 3] }, () => {
                this.toggleStep(3)
            });
        }
    }

    //orderComplete
    orderComplete = (comp) => {
        if (this._unmounted) {
            this.setState({ isFullOrderComplete: comp });
        }
    }

    //changeSlide
    changeSlide = (nCount) => {
        if (this._unmounted) {
            this.setState({ current_slide: nCount });
        }
    }

    changeOrderEditVal = (status) => {
        if (this._unmounted) {
            this.setState({
                isOrderEdit: status
            }, () => {
                if (!status) {
                    var orderId = this.getIdFromUrl()
                    this.getOrder(orderId, true);
                }
            })
        }
    }

    setTotalPrice = (price) => {
        if (this._unmounted) {
            this.setState({
                totalPrice: price
            })
        }
    }

    saveOrder = (isMsgShow) => {
        if (this._unmounted) {
            const loginToken = localStorage.getItem('token');
            var convertedToken = JSON.parse(loginToken);
            var order_token = localStorage.getItem("orderToken");
            var uploadedFile = localStorage.getItem("uploadedToken");
            var orderIdData = this.getIdFromUrl();
            let orderId = orderIdData ? orderIdData : '';
            const formData = new FormData();
            formData.append("user_token", convertedToken ? convertedToken.value : '');
            formData.append("order_id", orderId);
            formData.append("uploaded_token", uploadedFile && uploadedFile);
            formData.append("order_token", order_token && order_token);
            apiHelper('saveorder', 'POST', formData, null).then(res => {
                if (res.data.status) {
                    this.getOrder(res.data.data.order_id, false)
                    // localStorage.setItem("orderViewId", res.data.data.order_id);
                    localStorage.setItem('currStep', 3)
                    Router.push(`${process.env.basePath}/order?order_id=${res.data.data.order_id}`)
                    if (isMsgShow) {
                        toast.success("Order Saved to Drafts");
                    }
                    setTimeout(() => {
                        if (!this.state.isOrderEdit) {
                            this.changeOrderEditVal(true)
                        }
                        this.changeNext(2);
                    }, 200);
                } else {
                    toast.error(res.data.message);
                }
            }).catch(error => console.error(`Error: ${error}`));
        }
    }

    getIdFromUrl = () => {
        var orderId = '';
        if (this._unmounted) {
            if (Router.router && Router.router.query && Router.router.query.order_id) {
                orderId = Router.router.query.order_id
            }
        }
        return orderId;
    }

    render() {
        var ordId = this.getIdFromUrl()
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
                <div className="topLink">
                    <div className="orderTotalPrice d-md-none">
                        <span className="totalPrice">Total Price</span>
                        <span className="price">{(this.state.totalPrice ? this.state.totalPrice : '$0.00')}</span>
                    </div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={`step1 ${this.state.step1}`}
                                onClick={() => this.toggleStep(1)}>
                                <div className="tabMedia d-flex align-items-center">
                                    <div className="icon">
                                        <OneIcon />
                                    </div>
                                    <div className="details">
                                        <h4 className="text">Step 1</h4>
                                        <h3 className="stepName">Paper details</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={`step2 ${this.state.step2}`}
                                onClick={() => this.toggleStep(2)}>
                                <div className="tabMedia d-flex align-items-center">
                                    <div className="icon">
                                        <TwoIcon />
                                    </div>
                                    <div className="details">
                                        <h4 className="text">Step 2</h4>
                                        <h3 className="stepName">Order preference</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink className={`step3 ${this.state.step3}`}
                                onClick={() => this.toggleStep(3)}>
                                <div className="tabMedia d-flex align-items-center">
                                    <div className="icon">
                                        <ThreeIcon />
                                    </div>
                                    <div className="details">
                                        <h4 className="text">Step 3</h4>
                                        <h3 className="stepName">Check order details</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink className={`step3 ${this.state.step3}`}
                                onClick={() => this.toggleStep(3)}>
                                <div className="tabMedia d-flex align-items-center">
                                    <div className="icon">
                                        <FourIcon />
                                    </div>
                                    <div className="details">
                                        <h4 className="text">Step 3</h4>
                                        <h3 className="stepName">Make Payment</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                {this.state.isFullOrderComplete === true ?
                    <>
                        {/* OrderCompleteSection */}
                        <div className="tab-content">
                            <OrderCompleteSection changeUserProfile={this.props.changeUserProfile} resetOrder={this.resetOrder} />
                        </div>

                        {/* OrderProcessSection */}
                        {/* <DraftOrder currentStep='2' /> */}
                    </>
                    :
                    <>
                        <TabContent activeTab={this.state.currentStep}>
                            <TabPane tabId={1}>

                                {/* OrderPaperDetail */}
                                <OrderPaperDetail
                                    currentStep={this.state.currentStep}
                                    onChangeNext={(e) => this.changeNext(e)}
                                    onSkipNextStep={(e, b) => this.skipNextStep(e, b)}
                                    current_slide={this.state.current_slide}
                                    changeSlide={(nCount) => this.changeSlide(nCount)}
                                    setTotalPrice={(p) => this.setTotalPrice(p)}
                                    saveOrder={this.saveOrder}
                                />
                            </TabPane>
                            <TabPane tabId={2}>
                                {(ordId && ordId !== '') ?
                                    <div className="orderDetailsBtn d-flex align-items-center justify-content-end mb-3">
                                        <button onClick={() => this.setState({ leaveChanges: true })} className="btn theme-btn"><span>New Order</span></button>
                                        <button className="ms-2" onClick={this.cancelEditOrder} className="btn outline-btn"><span>Cancel</span></button>
                                    </div> :
                                    null
                                }
                                {/* OrderPreference */}
                                <OrderPreference
                                    getIdFromUrl={this.getIdFromUrl}
                                    currentStep={this.state.currentStep}
                                    onChangeNext={(e) => this.changeNext(e)}
                                    onChangePrev={(e) => this.changePrev(e)}
                                    current_slide={this.state.current_slide}
                                    changeSlide={(nCount) => this.changeSlide(nCount)}
                                    isOrderEdit={this.state.isOrderEdit}
                                    changeOrderEditVal={(val) => this.changeOrderEditVal(val)}
                                    setTotalPrice={(price) => this.setTotalPrice(price)}
                                    saveOrder={this.saveOrder}
                                />
                            </TabPane>
                            {/* <TabPane tabId={4}>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="checkOrderDetails">
                                            <div className="orderDetailsBtn d-flex align-items-center justify-content-center">
                                                <button onClick={() => this.changeOrderEditVal(false)}> <EditIcon /> <span className="ms-2">Edit</span>  </button>
                                                <button className="ms-2" onClick={() => this.setState({ deleteConfirm: true })}> <DeleteIcon /> <span className="ms-1">Delete</span> </button>
                                            </div>
                                            <Nav tabs>
                                                <NavItem>
                                                    <NavLink className={this.state.listTab === 1 ? "active" : ""} onClick={() => this.setState({ listTab: 1 })}>
                                                        Details
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={this.state.listTab === 2 ? "active" : ""}
                                                        onClick={() => this.setState({ listTab: 2 })}>
                                                        Files
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={this.state.listTab} className="p-0">
                                                <TabPane tabId={1}>
                                                    <CheckOrderDetails
                                                        currentStep={this.state.currentStep}
                                                        onChangeNext={(e) => this.changeNext(e)}
                                                        onChangePrev={(e) => this.changePrev(e)}
                                                        changeOrderEditVal={(val) => this.changeOrderEditVal(val)}
                                                    />
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                    <CheckOrderFile
                                                        currentStep={this.state.currentStep}
                                                        listTab={this.state.listTab} />

                                                </TabPane>
                                            </TabContent>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <OrderSummary getIdFromUrl={this.getIdFromUrl} onChangeNext={(e) => this.changeNext(e)} currentStep={this.state.currentStep} setTotalPrice={(price) => this.setTotalPrice(price)} />
                                    </div>
                                </div>

                                <DraftOrder currentStep='1' />

                            </TabPane> */}
                            <TabPane tabId={3}>

                                {/* PaymentSection */}
                                <PaymentSection
                                    getIdFromUrl={this.getIdFromUrl}
                                    changeUserProfile={this.props.changeUserProfile}
                                    onChangePrev={(e) => this.changePrev(e)}
                                    orderComplete={(isComp) => this.orderComplete(isComp)}
                                    currentStep={this.state.currentStep}
                                    onChangeNext={(e) => this.changeNext(e)}
                                    setTotalPrice={(price) => this.setTotalPrice(price)}
                                    changeOrderEditVal={this.changeOrderEditVal} />
                                <DraftOrder currentStep='1' />
                            </TabPane>
                        </TabContent>
                    </>}

                <Modal centered={true} size="lg" isOpen={this.state.leaveChanges} toggle={() => { this.setState({ leaveChanges: !this.state.leaveChanges }) }}>
                    <ModalBody className="text-center">
                        <h3 className="modalTitle">
                            Leave changes ?
                        </h3>
                        <p className="desc mb-5">Changes will not be save and create new order ? </p>
                        <div className="text-center">
                            <button className="btn outline-btn" onClick={() => { this.setState({ leaveChanges: !this.state.leaveChanges }) }}>No</button>
                            <button className="btn theme-btn" onClick={this.confirmLeavePage}>Yes</button>
                        </div>
                    </ModalBody>
                </Modal>

                <ToastContainer autoClose={2000} />
            </>
        )
    }
}

export default Index