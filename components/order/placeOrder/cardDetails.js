import React from "react";

// scss
import cardDetailsCss from "./cardDetails.scss";

const CardDetails = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: cardDetailsCss }}></style>
            <div className="cardDetails">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-group">
                            <label>Card Number</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="xxxx xxxx xxxx xxxx"
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Card Expiry</label>
                                    <div className="d-flex">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="MM"
                                        />
                                        <span className="arrow">/</span>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="YYYY"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Security number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="CVV2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Name on Card</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Full Name As On Card"
                            />
                        </div>
                        <div className="d-flex align-items-center justify-content-between bottom">
                            <p className="condition">
                                <input type="checkbox" />
                                <label>
                                    Save information to pay faster next time
                                </label>
                            </p>
                            <a className="btn confirmPay-btn">Update Card</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default CardDetails;
