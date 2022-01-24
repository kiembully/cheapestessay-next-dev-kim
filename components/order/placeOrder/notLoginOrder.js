import React, { useState } from "react";

import { useRouter } from "next/router";

// components
import OrderPaperDetail from "./orderPaperDetail/index";
import Meta from "../../meta";

// scss
import orderCss from "../../../styles/order.scss";

import Img from "../../Common/image";

const NotLoginOrder = (props) => {
  const [current_slide, setcurrent_slide] = useState(0);
  const router = useRouter();  

  //submitFirstStep
  const submitFirstStep = () => {
    router.push(`${process.env.basePath}/login`)
  };

  //changeSlide
  const changeSlide = (nCount) => {
    setcurrent_slide(nCount);
  };

  const services = [
    {
      img: <Img src="/order/safety.svg" title="Safety and Confidentiality" alt="safety" width={60} height={60} />,
      name: "Safety and Confidentiality",
      desc: "Rest assured that your payment details and your identity are safe and secure with us. Since we use secure encryption for every order placed, your payment information does not get saved. So, the transaction is completely safe."
    },
    {
      img: <Img src="/order/custSupport.svg" title="24X7 Customer Support" alt="custSupport" width={60} height={60} />,
      name: "24X7 Customer Support",
      desc: "Reach out to us any time and receive complete support from our support team. Our customer support team is available round the clock via live chat to address all your academic queries and resolve them."
    },
    {
      img: <Img src="/order/moneyBack.svg" title="Money Back Guarantee" alt="moneyBack" width={60} height={60} />,
      name: "Money-Back Guarantee",
      desc: "Are you not satisfied with your paper? You can place a request for a refund. We also offer partial refunds in specific scenarios. Find out in detail about our money-back guarantee policy on the guarantees page."
    }
  ]

  return (
    <>
      <Meta title={props.meta && props.meta.title} description={props.meta && props.meta.description} keywords={props.meta && props.meta.keywords} urlCategory={props.meta && props.meta.url_group} />
      <style dangerouslySetInnerHTML={{ __html: orderCss }}></style>
      <div className="order">
        <section className="text-left orderForm orderPage">
          <div className="container">
            <div className="orderFormList">
              {/* OrderPaperDetail */}
              <OrderPaperDetail
                coupenCode=""
                current_slide={current_slide}
                changeSlide={(nCount) => changeSlide(nCount)}
                currentStep={1}
                submitFirstStep={submitFirstStep}
                setTotalPrice={() => { return }}
              />
            </div>
          </div>
        </section>
        <div className="orderServices">
          <div className="container">
            <div className="row serviceRow">
              {services && services.map((service, index) => {
                return (
                  <div className="col-md-4 col-sm-6" key={index}>
                    <div className="service text-center">
                      <div className="image">{service.img}</div>
                      <div className="name">{service.name}</div>
                      <div className="desc">{service.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotLoginOrder;
