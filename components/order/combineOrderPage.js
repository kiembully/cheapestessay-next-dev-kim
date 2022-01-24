import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

// reactstrap
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from "reactstrap";

// components
import PlaceOrder from "./placeOrder";
import Orders from "./ordersTab/order";
import Balance from "./balance/balance";
import Discount from "./discount";
import Level from "./level";
import Profile from "./profile";
import Sidebar from "./sidebar";
// import OrderStatus from './ordersTab/OrderStatus/orderStatus';

// Toaster
import { ToastContainer } from "react-toastify";

// scss
import orderCss from "../../styles/order.scss";

const combineOrderPage = () => {
    const router = useRouter();

    const [coupenCode, setCoupenCode] = useState("");
    // const [orderView, setOrderView] = useState(false);

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

    // displaying components
    const [value, setValue] = useState("place-order");
    const [active, setActive] = useState("place-order");

    const changeNavigation = (e) => {
        setValue(e);
        setActive(e);
        toggleClose();
    };

    // get coupen code from url
    useEffect(() => {
        if (router.query.code || router.query.discount_code) {
            setCoupenCode(router.query.code);
        }

        if (value !== 'place-order' && (router.query.code || router.query.discount_code)) {
            window.history.replaceState(null, '', '/order')
        }
        // if (router.query.id) {
        //     setOrderView(true)
        // }
    });

    const [stepForPlaceOrder, setStepForPlaceOrder] = useState("1");
    const [changeProfile, setchangeProfile] = useState(false);

    const changeUserProfile = (status) => {
        setchangeProfile(!changeProfile);
    };

    const setStep = (step) => {
        setStepForPlaceOrder(step);
        changeNavigation("place-order");
    };

    const setStepSkipRedirection = (step) => {
        setStepForPlaceOrder(step);
    }

    //redirectPage
    const redirectPage = (path) => {
        router.push(path);
    };

    const [completedOrderViewId, setCompletedOrderViewId] = useState(0);
    const setOrderId = (id) => {
        setCompletedOrderViewId(id);
    }

    useEffect(() => {
        if (completedOrderViewId && completedOrderViewId > 0) {
            changeNavigation('order')
        }
    }, [completedOrderViewId]);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: orderCss }}></style>
            <div className="order">
                <div className="top-navbar orderMobileMenu d-md-block d-lg-none">
                    <Navbar expand="md">
                        <div className="container">
                            <NavbarBrand
                                href={process.env.hostBaseUrl}
                                onClick={
                                    router.pathname === "/" ? (e) => e.preventDefault() : null
                                }
                            >
                                Cheapest <span>Essay</span>
                            </NavbarBrand>
                            <a className="btn secondary-btn" href={`${process.env.hostBaseUrl}/logout`}>
                                Logout
                            </a>
                        </div>
                    </Navbar>
                </div>
                <NavbarToggler className="d-lg-none d-md-block" onClick={toggle}>
                    <div className="navbar-toggler-icon open">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M4 16H28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 8H28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 24H28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </NavbarToggler>
                {isOpen ?
                    <>
                        <div className="sidebarOverlay">
                            <div className="orderLogin m-0" ref={wrapperRef}>
                                <Sidebar
                                    changeProfile={changeProfile}
                                    changeNavigation={(e) => changeNavigation(e)}
                                    active={active}
                                />
                            </div>
                            <div className="navbar-toggler-icon close">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M1.4895 1.98975L13.4895 13.9897" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.6567 2L7.99988 7.65685" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.65649 14L7.65649 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </>
                    : null}
                <div className="orderLogin">
                    <Sidebar
                        className="d-none d-lg-block"
                        changeProfile={changeProfile}
                        changeNavigation={(e) => changeNavigation(e)}
                        active={active}
                    />
                    <div className="orderingDetails">
                        {/* {
                            orderView ?
                                <OrderStatus orderId={router.query.id} />
                                :
                                <> */}
                        {value === "place-order" ? (
                            <PlaceOrder
                                changeNavigation={(e) => changeNavigation(e)}
                                step={stepForPlaceOrder}
                                coupenCode={coupenCode}
                                redirectPage={redirectPage}
                                changeUserProfile={changeUserProfile}
                                setOrderId={setOrderId}
                            />
                        ) : null}
                        {value === "order" ? <Orders setOrderId={setOrderId} orderId={completedOrderViewId} setStep={setStep} setStepSkipRedirection={setStepSkipRedirection} /> : null}
                        {value === "balance" ? (
                            <Balance changeUserProfile={changeUserProfile} setStepSkipRedirection={setStepSkipRedirection} />
                        ) : null}
                        {value === "discount" ? <Discount setStepSkipRedirection={setStepSkipRedirection} /> : null}
                        {value === "level" ? <Level setStepSkipRedirection={setStepSkipRedirection} /> : null}
                        {value === "profile" ? (
                            <Profile changeUserProfile={changeUserProfile} setStepSkipRedirection={setStepSkipRedirection} />
                        ) : null}
                        {/* </>
                        } */}
                    </div>
                </div>
                <ToastContainer autoClose={2000} />
            </div>
        </>
    );
};

export default combineOrderPage;

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
