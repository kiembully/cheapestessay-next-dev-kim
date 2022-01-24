import React from "react";

// scss
import orderNowCss from "./orderNow.scss";

export default function OrderNow() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: orderNowCss }}></style>
      <section className="for-new orderNow">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="content-box w-100">
                <h2 className="content">
                  Essay Writing Service With Extensive Experience
                </h2>
                <div className="desc w-100 pe-lg-5">
                  Engulfing in the splash of your college assignments? Get a
                  grip of our support and leave all your academic headaches with
                  us. Whenever you have an assignment urgency, our qualified
                  team of experts is there to provide you with best-in-class
                  online writing solutions in just a matter of hours as per your
                  needs and requirements.ways depend on our writers to deliver
                  exemplary work.
                </div>
                <a className="btn secondary-btn" href={`${process.env.hostBaseUrl}/order`}>Order Now</a>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="how-to-order-video">
                <iframe
                  src="https://www.youtube.com/embed/DerCRVja8O4?rel=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  title="CheapestEssay Pitch"
                  style={{"width": "100%", "height" : "100%"}}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
