import React, { useState } from "react";
import {
  Modal,
  ModalBody,
} from "reactstrap";

import { useRouter } from "next/router";

// TimezonePicker
import timezoneCss from 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

//api
import { ukApiHelper } from "../helper/apiHelper";

// scss
import orderCss from "../styles/order.scss";
import priceCss from "../styles/price.scss";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const Img = dynamic(() => import('../components/Common/image'));
const OrderPaperDetail = dynamic(() => import('../components/order/placeOrder/orderPaperDetail/index'));

export default function Order(props) {

  // how to order modal
  const [HowOrderModal, setOrderModal] = useState(false);
  const orderModal = () => setOrderModal(!HowOrderModal);

  const [current_slide, setcurrent_slide] = useState(0);

  const router = useRouter();

  //submitFirstStep
  const submitFirstStep = () => {
    router.push(`/login`);
  };

  //changeSlide
  const changeSlide = (nCount) => {
    setcurrent_slide(nCount);
  };

  return (
    <>
      <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
      <style dangerouslySetInnerHTML={{ __html: timezoneCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: orderCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: priceCss }}></style>
      <div className="order price">
        <div className="top-navbar">
          <div className="header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="cheapest-detail">
                    <h1 className="title">
                      Essay Writing Rates - CheapestEssay
                    </h1>
                    <p className="desc">
                      No more restless nights! Gain Access to 100% unique
                      academic papers
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-end">
                    <div className="desc">Don’t know how to order?</div>
                    <div className="mt-3 arrowHow">
                      <Img
                        src="/order/order.gif"
                        alt="order"
                        width="60"
                        title="Order"
                        height="60"
                      />
                    </div>
                    <a
                      className="btn secondary-btn mt-3"
                      href="#"
                      onClick={orderModal}
                    >
                      Click Here
                    </a>
                    <Modal isOpen={HowOrderModal} toggle={orderModal} centered className="howToOrderVideo">
                      <ModalBody>
                        <div className="how-to-order-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/DerCRVja8O4?autoplay=1"
                            frameBorder="0"
                            allowfullscreen="allowfullscreen"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            title="CheapestEssay Pitch"
                            allow='autoplay'
                          ></iframe>
                        </div>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="text-left orderForm">
          <div className="container">

            <OrderPaperDetail
              coupenCode=""
              current_slide={current_slide}
              changeSlide={(nCount) => changeSlide(nCount)}
              currentStep={1}
              submitFirstStep={submitFirstStep}
              setTotalPrice={() => { return }}
            />

          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const DEFAULT_META = process.env.defaultMeta
  const res = await ukApiHelper(`seoV1?page=price&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const meta = res.data.status ? res.data.data : DEFAULT_META

  return {
    props: {
      meta
    }
  }
}
