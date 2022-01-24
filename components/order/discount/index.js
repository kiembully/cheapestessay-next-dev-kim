import React, { useState, useEffect } from "react";

// API helper
import { apiHelper } from '../../../helper/apiHelper';

// scss
import discountCss from "./discount.scss";

const Discount = (props) => {

    const [referralGetCode, setReferralGetCode] = useState("");
    const [referralGetLink, setReferralGetLink] = useState("");

    useEffect(() => {
        referralGetUp();
        localStorage.setItem('currStep', 1)
    }, [])

    const referralGetUp = () => {
        var userToken = localStorage.getItem("token");
        if (userToken && userToken !== '') {
            userToken = JSON.parse(userToken);
            var decodeToken = userToken.value;
        }
        const formData = new FormData();
        formData.append("user_token", userToken ? decodeToken : '');
        formData.append("code", referralGetCode);
        formData.append("link", referralGetLink);

        apiHelper("displaydiscount", "POST", formData, null)
            .then((res) => {
                if (res.data.status === true) {
                    const data = res.data.data;
                    setReferralGetCode(data.code);
                    setReferralGetLink(data.link);
                }
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    const [copyCode, setCopyCode] = useState(false);
    const [copylink, setCopylink] = useState(false);

    const copyCodeToClipboard = (e) => {
        e.preventDefault();
        var copyText = document.getElementById("codeBoxCode");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        var successful = document.execCommand("copy");
        var successMsg = (successful ? true : false);
        setCopyCode(successMsg);
        setInterval(() => {
            setCopyCode(false);
        }, 3000);
    }

    const copyLinkToClipboard = (e) => {
        e.preventDefault();
        var copyText = document.getElementById("codeBoxLink");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        var successful = document.execCommand("copy");
        var successMsg = (successful ? true : false);
        setCopylink(successMsg);
        setInterval(() => {
            setCopylink(false);
        }, 3000);
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: discountCss }}></style>
            <div className="discount">
                <h2 className="title">Referral</h2>
                <div className="bg-white text-center discountBox">
                    <h2 className="innerTitle">Get up to $200 when you Refer a friend today!</h2>
                    <p className="desc">Share your Coupon code OR Referral link &amp; Get up to $200 for every friend.</p>
                    <div className={`d-flex discountCoupon justify-content-lg-center ${copyCode ? "copied" : ""}`} >
                        <label>Coupon code</label>
                        <input className="codeBox" id="codeBoxCode" value={referralGetCode} readOnly />
                        <button className="cloneBox" onClick={copyCodeToClipboard}>
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.3335 10.0002H2.66683C2.31321 10.0002 1.97407 9.85969 1.72402 9.60964C1.47397 9.35959 1.3335 9.02045 1.3335 8.66683V2.66683C1.3335 2.31321 1.47397 1.97407 1.72402 1.72402C1.97407 1.47397 2.31321 1.3335 2.66683 1.3335H8.66683C9.02045 1.3335 9.35959 1.47397 9.60964 1.72402C9.85969 1.97407 10.0002 2.31321 10.0002 2.66683V3.3335" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="msg">Copied</span>
                        </button>
                    </div>
                    <div className={`d-flex discountCoupon mb-0 justify-content-lg-center ${copylink ? "copied" : ""}`}>
                        <label>Referral link</label>
                        <input className="codeBox" id="codeBoxLink" value={referralGetLink} readOnly />
                        <button className="cloneBox" onClick={copyLinkToClipboard}>
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.3335 10.0002H2.66683C2.31321 10.0002 1.97407 9.85969 1.72402 9.60964C1.47397 9.35959 1.3335 9.02045 1.3335 8.66683V2.66683C1.3335 2.31321 1.47397 1.97407 1.72402 1.72402C1.97407 1.47397 2.31321 1.3335 2.66683 1.3335H8.66683C9.02045 1.3335 9.35959 1.47397 9.60964 1.72402C9.85969 1.97407 10.0002 2.31321 10.0002 2.66683V3.3335" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="msg">Copied</span>
                        </button>
                    </div>
                </div>
                <div className="discountBox pb-0">
                    <h2 className="innerTitle text-center">How It Works?</h2>
                    <div className="howWork">
                        <div className="d-flex howWorkRow justify-content-center">
                            <div className="howWorkMain">
                                <div className="howWorkBox">
                                    <div className="number">1</div>
                                    <h3 className="subTitle">Tell your friends about us.</h3>
                                    <p className="content">Anyone who uses your coupon code OR follows your link gets 15% off on their first order.
                                    </p>
                                </div>
                            </div>
                            <div className="howWorkMain">
                                <div className="howWorkBox">
                                    <div className="number">2</div>
                                    <h3 className="subTitle">Your friends make an order.</h3>
                                    <p className="content">You will get 20% credit from the total amount purchased. No minimum amount required!
                                    </p>
                                </div>
                            </div>
                            <div className="howWorkMain">
                                <div className="howWorkBox">
                                    <div className="number">3</div>
                                    <h3 className="subTitle">Get up to $200 for every friend.</h3>
                                    <p className="content">For Example: If you invited a friend who spent $1000 on their order, then you will get $200 credit. Imagine referring more!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Discount;
