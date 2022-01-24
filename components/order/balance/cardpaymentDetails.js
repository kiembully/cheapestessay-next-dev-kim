import React from "react";

// scss
import DetailsCss from "./cardpaymentDetails.scss";

import Img from "../../Common/image";

const CardpaymentDetails = (props) => {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: DetailsCss }}></style>
            <div className="cardpaymentDetails text-center">
                <Img src={props.src} alt="Card" title="Card"  width={236} height={207} />
                <h3 className="enterTitle">{props.title}</h3>
                <p className="desc">{props.desc}</p>
                <div className="bottom">
                    <Img src="/order/paymentOpt.svg" title="Payment" alt="paymentOpt" width={250} height={24} />
                </div>
            </div>
        </>
    );
};
export default CardpaymentDetails;
