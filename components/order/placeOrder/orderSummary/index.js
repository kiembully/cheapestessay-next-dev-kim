import React, { Component } from 'react';
import Router from 'next/router'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../paymentSection/CheckoutForm';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Modal, ModalBody
} from "reactstrap";

// API helper
import { apiHelper } from '../../../../helper/apiHelper';
import { jwtDecode } from '../../../../helper/jwtHelper';

// scss
import orderCss from "../../../../styles/order.scss";

// Toaster
import ReactToastifyCss from 'react-toastify/dist/ReactToastify.min.css';

import CheckOrderDetails from "../checkOrderDetails/index";
import CheckOrderFile from "../checkOrderFile/index";

import EditIcon from "../icons/edit";
import DeleteIcon from "../icons/delete";

// const stripeTestPromise = loadStripe('pk_live_BIwIJ20n2rhBcb5y46PEpAzu');
var stripePromise = ''

class Index extends Component {
    _unmounted = false;

    constructor() {
        super()
        this.state = {
            detailOrder: null,
            orderId: 0,
            showModal: false,
            listTab: 1,

            //deleteConfirm
            deleteConfirm: false,
        }
    }

    // Display Order data
    displayOrder = async () => {
        if (this._unmounted) {
            const loginToken = localStorage.getItem('token');
            var convertedToken = JSON.parse(loginToken);

            const formData = new FormData();
            formData.append("order_id", this.state.orderId);
            formData.append("user_token", convertedToken ? convertedToken.value : '');

            apiHelper('displayorder', 'POST', formData, null).then(res => {
                if (res.data.status) {
                    const data = res.data.data;
                    this.setState({ detailOrder: data });
                    this.props.setTotalPrice(data && data.payment && data.payment.total)
                }
            }).catch(error => console.error(`Error: ${error}`));
        }
    }

    //componentDidMount
    componentDidMount() {
        this._unmounted = true;

        if (this._unmounted) {
            var orderId = this.props.getIdFromUrl()
            if (orderId && orderId !== '') {
                this.setState({
                    orderId: orderId
                }, () => {
                    this.displayOrder();
                })
            }

            if (localStorage.getItem('view-popup-enabled')) {
                this.setState({
                    showModal: true
                }, () => {
                    localStorage.removeItem('view-popup-enabled')
                })
            }

            const loginToken = localStorage.getItem('token');
            var convertedToken = JSON.parse(loginToken);
            var userTok = convertedToken ? convertedToken.value : ''
            var isTesterUser = false
            if (userTok !== '') {
                var decodeToken = jwtDecode(userTok)
                if (decodeToken && decodeToken.user_details && decodeToken.user_details.isTester) {
                    isTesterUser = true
                }
            }

            if (isTesterUser) {
                stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TEST_KEY)
            } else {
                stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_LIVE_KEY)
            }
        }
    }

    componentWillUnmount() {
        this._unmounted = false;
    }

    // componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        if (this._unmounted) {
            setTimeout(() => {
                if (prevProps.currentStep !== this.props.currentStep && (this.props.currentStep === 3 || this.props.currentStep === 4)) {
                    var orderId = this.props.getIdFromUrl()

                    if (orderId && orderId !== '') {
                        this.setState({
                            orderId: orderId
                        }, () => {
                            this.displayOrder();
                        })
                    }
                }

            }, 100);
        }
    }

    //gotoNextStep
    gotoNextStep = () => {
        if (this._unmounted) {
            // if (this.props.currentStep === 3) {
            //     // toast.success("Saved as Draft");
            //     setTimeout(() => {
            //         this.props.onChangeNext(3);
            //     }, 100);
            // } else {
            this.props.confirmPayment();
            // }
        }
    }

    openViewModal = () => {
        if (this.state.detailOrder) {
            this.setState({
                showModal: true
            })
        } else {
            var orderId = this.props.getIdFromUrl()
            if (orderId && orderId !== '') {
                this.setState({
                    orderId: orderId
                }, () => {
                    this.displayOrder();
                    setTimeout(() => {
                        this.setState({
                            showModal: true
                        })
                    }, 500);
                })
            }
        }
    }

    editOrder = () => {
        this.props.changeOrderEditVal(false)
        setTimeout(() => {
            this.setState({
                showModal: false
            })
        }, 100);
    }

    //confirmDelete
    confirmDelete = async () => {
        if (this._unmounted) {

            // get orderId from saved token
            const loginToken = localStorage.getItem('token');
            var convertedToken = JSON.parse(loginToken);

            const formData = new FormData();
            formData.append("order_id", this.state.orderId);
            formData.append("user_token", convertedToken ? convertedToken.value : '');

            // call delete API
            apiHelper('deleteOrder', 'POST', formData, null).then(res => {
                if (res.data.status === true) {
                    Router.push(`${process.env.basePath}/my-orders`);
                }
            }).catch(error => console.error(`Error: ${error}`));
        }
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        var { detailOrder } = this.state
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
                <style dangerouslySetInnerHTML={{ __html: orderCss }}></style>
                <div className="section-part rightSide">
                    <div className="orderSummary rightSection">
                        <div className="d-flex align-items-center justify-content-between summaryDetail">
                            <h3 className="summaryTitle mb-0">Order Summary</h3>
                            <a className="viewOrderDetailsLink btn outline-btn" onClick={this.openViewModal}><span>Order Detail</span></a>
                        </div>
                        <div className="calculate-Part pt-0">
                            <div className="price d-flex justify-content-between">
                                <span title="Order Number">Order Number</span>
                                <span title={this.state.detailOrder && this.state.detailOrder.order_no_custom}>{this.state.detailOrder && this.state.detailOrder.order_no_custom}</span>
                            </div>
                            <div className="price d-flex justify-content-between">
                                <span title="Order Date">Order Date</span>
                                <span title={detailOrder && detailOrder.order_date}>{detailOrder && detailOrder.order_date}</span>
                            </div>
                            <div className="price d-flex justify-content-between">
                                <span title="Deadline">Deadline</span>
                                <span title={detailOrder && detailOrder.deadlinedate}>{detailOrder && detailOrder.deadlinedate}</span>
                            </div>
                            <div className="price d-flex justify-content-between">
                                <span title="Lifetime Discount">Lifetime Discount</span>
                                <span title={detailOrder && detailOrder.payment.ltDisc ? detailOrder.payment.ltDisc : 0}>{detailOrder && detailOrder.payment.ltDisc ? detailOrder.payment.ltDisc : 0}</span>
                            </div>

                            {detailOrder && detailOrder.payment.coupon_code && detailOrder.payment.coupon_code !== '' ?
                                <div className="price d-flex justify-content-between">
                                    <span>Coupon Discount</span>
                                    <span title={`$ ${detailOrder.payment.coupon_discount ? detailOrder.payment.coupon_discount : 0.00}`}>${detailOrder.payment.coupon_discount ? detailOrder.payment.coupon_discount : 0.00}</span>
                                </div> :
                                null}

                            {this.props.settedRedeemAmount &&
                                <div className="price d-flex justify-content-between">
                                    <span title="Redeem">Redeem</span>
                                    <div>
                                        <span className="returnRedeem me-3" onClick={() => this.props.returnAmount()}>Return</span>
                                        <span title={this.props.settedRedeemAmount}>{this.props.settedRedeemAmount}</span>
                                    </div>
                                </div>}
                        </div>

                        <div className="bottomPart">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <span className="totalPrice">Total Price</span>
                                <span className="price">{this.props.settedFinalAmount !== '' && this.props.settedFinalAmount !== null && this.props.settedFinalAmount !== undefined ? '$' + (this.props.settedFinalAmount).toFixed(2) : (detailOrder && detailOrder.payment && detailOrder.payment.total)}</span>
                            </div>

                            <div className="mt-2">
                                {this.props.paymentType && (this.props.paymentType === 'gpay' || this.props.paymentType === 'apple') &&
                                    (this.props.settedRedeemAmount && this.props.ordersTotal && parseFloat(this.props.settedRedeemAmount) !== parseFloat(this.props.ordersTotal) || !this.props.settedRedeemAmount) ?
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm
                                            paymentType={this.props.paymentType && this.props.paymentType}
                                            detailOrder={this.state.detailOrder && this.state.detailOrder}
                                            orderId={this.state.orderId}
                                            settedRedeemAmount={this.props.settedRedeemAmount} />
                                    </Elements>
                                    : <a className={`btn theme-btn w-100 ${this.props.currentStep === 3 ? "step4" : "step3"}`} onClick={() => this.gotoNextStep()}>
                                        {this.props.currentStep === 3 ? "Pay Now" : "Continue to Payment"}
                                    </a>}
                            </div>

                        </div>
                    </div>
                </div>

                <Modal className="orderDetailModal" size="lg" centered={true} isOpen={this.state.showModal} toggle={() => { this.setState({ showModal: !this.state.showModal }) }}>
                    <div className="position-relative">
                        <h2 className="modalTitle mb-0">Order Details</h2>
                        <div className="close" onClick={this.closeModal}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.4895 1.98975L13.4895 13.9897" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.6567 2L7.99988 7.65685" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.65649 14L7.65649 8" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <ModalBody>
                        <div className="checkOrderDetails">
                            <div className="orderDetailsBtn d-flex align-items-center justify-content-center">
                                <button onClick={this.editOrder}> <EditIcon /> <span className="ms-2">Edit</span>  </button>
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
                                        orderData={detailOrder && detailOrder}
                                    />
                                </TabPane>
                                <TabPane tabId={2}>
                                    <CheckOrderFile orderData={detailOrder && detailOrder} />
                                </TabPane>
                            </TabContent>
                        </div>
                    </ModalBody>
                </Modal>

                {/* Modal toggle */}
                <Modal centered={true} size="lg" isOpen={this.state.deleteConfirm} toggle={() => { this.setState({ deleteConfirm: !this.state.deleteConfirm }) }}>
                    <ModalBody className="text-center">
                        <h3 className="modalTitle">
                            Delete order ?
                        </h3>
                        <p className="desc mb-5">Are you sure to delete this order ?</p>
                        <div className="text-center">
                            <button className="btn outline-btn" onClick={() => { this.setState({ deleteConfirm: !this.state.deleteConfirm }) }}>No</button>
                            <button className="btn theme-btn" onClick={() => this.confirmDelete()}>Yes</button>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Index