import React, { useState, useRef } from "react";
import Link from 'next/link';

import { useRouter } from 'next/router';

// reactstrap
import classnames from "classnames";

// react slick
import Slider from "react-slick";
import slickCss from "slick-carousel/slick/slick.css";

import Rating from 'react-rating';
import moment from "moment";

// scss
import feedbackCss from "./feedback.scss";

import Img from "../../Common/image";

export default function Feedback(props) {

  const [activeTab, setActiveTab] = useState("1");
  let showReviewType = useRef("googleReviews");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab)
      showReviewType.current = (tab === '1' ? 'googleReviews' : (tab === '2' ? 'trustPilot' : 'siteJabber'))
    };
  };

  var allReviewArr, reviewArr = []
  if (props.reviewData && props.reviewData) {
    const data = props.reviewData;
    reviewArr = data.review_list;

    var arr = [];
    var review_list = data.review_list
    if (review_list) {
      if (review_list.facebook && review_list.facebook.length > 0) {
        arr = arr.concat(review_list.facebook)
      }
      if (review_list.googleReviews && review_list.googleReviews.length > 0) {
        arr = arr.concat(review_list.googleReviews)
      }
      if (review_list.siteJabber && review_list.siteJabber.length > 0) {
        arr = arr.concat(review_list.siteJabber)
      }
      if (review_list.trustPilot && review_list.trustPilot.length > 0) {
        arr = arr.concat(review_list.trustPilot)
      }
    }
    allReviewArr = arr

  }
  var reviewTitle = props.reviewData && props.reviewData.title ? props.reviewData.title : "Client's Feedback for Essay Help that Keeps Us Motivated"

  const router = useRouter();
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: slickCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: feedbackCss }}></style>

      {/* <Head>
        {allReviewArr && allReviewArr.length > 0 ?
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html:
              `
              [
                ${allReviewArr.map(element =>
                `{
                     "@context": "https://schema.org/",
                      "@type": "Review",
                      "name": "${props.schemaPageName ? props.schemaPageName : ''}",
                      "description": "${props.metaDescription ? (props.metaDescription).replace(/"/g, '&quot;') : 'Essay writing'}",
                      "datePublished": "${element.review_date && element.review_date}",
                      "reviewBody": "${element.review ? (element.review).replace(/"/g, '&quot;') : ''}",
                      "author": {
                        "@type": "Person",
                        "name": "${element.customer_name && element.customer_name}"
                      },
                      "itemReviewed": {
                        "@type": "Thing",
                        "name": "${props.schemaPageName ? props.schemaPageName : ''}"
                      },
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": ${element.rating ? parseFloat(element.rating) : 0},
                        "bestRating": 5
                      }
                    }`
              )}
                  ]
          `}} />
          :
          null
        }
      </Head> */}

      <section className={`feedback ${props.className}`} id="reviews">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">
              {reviewTitle}
            </h2>
          </div>
          <ul className="nav justify-content-end nav-pills">
            <li
              onClick={() => {
                toggle("1");
              }}
              className={`nav-item ${classnames({
                active: activeTab === "1",
              })}`}
            >
              <div className="d-flex align-items-center nav-link">
                <Img src="/Cheapestessay.webp" title="Cheapestessay" alt="Cheapestessay" width={40} height={40} />
                <div className="d-flex rate-detail">
                  <div className="left">
                    <div className="name">Cheapestessy reviews</div>
                    <div className="star mb-0">
                      <Img src="/stars.svg" title="Stars" alt="stars" width={100} height={14} />
                    </div>
                  </div>
                  <div className="rating mb-0">
                    <span>4.7</span>
                  </div>
                </div>
              </div>
            </li>
            <li
              onClick={() => {
                toggle("2");
              }}
              className={`nav-item ${classnames({
                active: activeTab === "2",
              })}`}
            >
              <div className="d-flex align-items-center nav-link">
                <Img src="/trustpilot.webp" title="Trustpilot" alt="trustpilot" width={40} height={40} />
                <div className="d-flex rate-detail">
                  <div className="left">
                    <div className="name">trustpilot reviews</div>
                    <div className="star mb-0">
                      <Img src="/stars.svg" title="Stars" alt="stars" width={100} height={14} />
                    </div>
                  </div>
                  <div className="rating mb-0">
                    <span>4.5</span>
                  </div>
                </div>
              </div>
            </li>
            <li
              onClick={() => {
                toggle("3");
              }}
              className={`nav-item ${classnames({
                active: activeTab === "3",
              })}`}
            >
              <div className="d-flex align-items-center nav-link">
                <Img src="/sitejabber.webp" title="Sitejabbar" alt="sitejabber" width={40} height={40} />
                <div className="d-flex rate-detail">
                  <div className="left">
                    <div className="name">sitejabber reviews</div>
                    <div className="star mb-0">
                      <Img src="/stars.svg" title="Stars" alt="stars" width={100} height={14} />
                    </div>
                  </div>
                  <div className="rating mb-0">
                    <span>4.4</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="tab-content">
            <div className="feedback-slider">
              <Slider
                dots={true}
                arrows={false}
                autplay={true}
                speed={500}
                slidesToShow={reviewArr && reviewArr[showReviewType.current] ? (reviewArr[showReviewType.current].length > 0 && reviewArr[showReviewType.current].length < 3 ? reviewArr[showReviewType.current].length : 3) : 1}
                slidesToScroll={1}
                responsive={[
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: reviewArr && reviewArr[showReviewType.current] ? (reviewArr[showReviewType.current].length > 0 && reviewArr[showReviewType.current].length < 2 ? reviewArr[showReviewType.current].length : 2) : 1
                    },
                  },
                  {
                    breakpoint: 575,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ]}
              >
                {reviewArr && reviewArr[showReviewType.current] && reviewArr[showReviewType.current].length > 0 ?
                  reviewArr[showReviewType.current].map((data, index) => {
                    return <div className="feedback-detail" key={index}>
                      <div className="customer-detail">
                        <div className="name">{data.customer_name}</div>
                        <span className="id">{moment(data.review_date).format('DD MMM YYYY')}</span>
                      </div>
                      <div className="info">
                        <div className="rating">
                          <Rating
                            readonly={true}
                            initialRating={data.rating}
                            fractions={2}
                            emptySymbol={<Img src="/empty.svg" title="Empty" className="icon" alt="ratingImg" width={18} height={18} />}
                            fullSymbol={<Img src="/full.svg" title="Full" className="icon" alt="ratingImg" width={18} height={18} />}
                          />
                        </div>
                        <div className="reviewTitle"><strong style={{ 'fontWeight': '500' }}>{data.review_headline}</strong></div>
                        <p className="content">
                          {data.review}
                        </p>
                      </div>
                    </div>
                  })
                  : <div className="noReview-found">No feedback found</div>
                }
              </Slider>
            </div>
          </div>
          {router.asPath === "/" ?
            <>
              <p className="overRating text-center mb-0">
                <span className="me-3">Overall Rating</span>
                <Rating
                  readonly={true}
                  initialRating="4.5"
                  fractions={2}
                  emptySymbol={<Img src="/empty.svg" title="Empty" className="icon" alt="ratingImg" width={18} height={18} />}
                  fullSymbol={<Img src="/full.svg" title="Full" className="icon" alt="ratingImg" width={18} height={18} />}
                />
                <span className="ms-2"><b>4.5</b> out of 5 based on <b>1123</b> Reviews.</span>
              </p>
              <div className="text-center viewWriter">
                <Link href={`${process.env.hostBaseUrl}/reviews`}><a className="btn outlineSecondaryBtn">Check All Reviews</a></Link>
              </div>
            </>
            : null}
        </div>
      </section>
    </>
  );
}
