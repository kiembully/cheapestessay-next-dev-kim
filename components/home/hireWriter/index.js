import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Rating from 'react-rating';
import Link from 'next/link'
// react slick
import Slider from "react-slick";
import slickCss from "slick-carousel/slick/slick.css";

// API helper
import { ukApiHelper, apiHelper } from '../../../helper/apiHelper';
import { jwtDecode } from "../../../helper/jwtHelper";

// Html Parser
import parse from "html-react-parser";

// scss
import hireWriterCss from "./hirewriter.scss";

// Image
import DummyProfile from '../../../public/dummy-profile.webp';

import Img from "../../Common/image";


// import Image from "next/image";

const HireWriter = (props) => {

  // var [hireSlider, setHireSlider] = useState([]);

  // useEffect(() => {
  //   if (props.serviceType && props.serviceType !== '') {
  //     // getServiceTypeTopWriter()
  //     getTop10Wrtiters();
  //   } else {
  //     getTop10Wrtiters();
  //   }
  // }, []);

  // const getTop10Wrtiters = () => {
  //   ukApiHelper('top10WritersV1?limit=5', 'GET', null, null)
  //     .then(res => {
  //       if (res.data.status) {
  //         const data = res.data.data;
  //         setHireSlider(data);
  //       }
  //     })
  //     .catch(error => console.error(`Error: ${error}`));
  // }

  // const getServiceTypeTopWriter = () => {
  //   ukApiHelper(`topwritersbyservicetype?service=${props.serviceType}`, 'GET', null, null)
  //     .then(res => {
  //       if (res.data.status) {
  //         const data = res.data.data;
  //         setHireSlider(data);
  //       }
  //     })
  //     .catch(error => console.error(`Error: ${error}`));
  // }

  const storeRightData = (key, value) => {
    var rightData = localStorage.getItem("orderRight");

    let item = {};
    if (rightData && rightData !== '') {
      item = JSON.parse(rightData);

      item[key] = value;
      localStorage.setItem("orderRight", JSON.stringify(item));
    }
  }

  const redirectUrl = async (user_name) => {

    var order_token = localStorage.getItem("orderToken");
    let decodeOrder = null;
    if (order_token && order_token !== '') {
      decodeOrder = jwtDecode(order_token);
    }

    storeRightData('topWriter', '+20%');
    storeRightData('writerId', user_name);

    const formData = new FormData();

    formData.append("service", decodeOrder.service ? decodeOrder.service : 3);
    formData.append("paper", decodeOrder.paper ? decodeOrder.paper : 1);
    formData.append("page", decodeOrder.page ? decodeOrder.page : 1);
    formData.append("deadline", decodeOrder.deadline ? decodeOrder.deadline : 19);
    formData.append("duration", decodeOrder.duration ? decodeOrder.duration : 'Days');
    formData.append("deadlineLable", decodeOrder.deadlineLable ? decodeOrder.deadlineLable : '');
    formData.append("coupon_code", decodeOrder.coupon_code ? decodeOrder.coupon_code : '');
    formData.append("preferred_writer", 'my_previous_writer');
    formData.append("writer_id", user_name);
    // formData.append("discount_token", localStorage.getItem('discount_token') ? localStorage.getItem('discount_token') : "");

    // formData.append("other_paper", '');
    // formData.append("subject", 49);
    // formData.append("other_subject", '');
    // formData.append("formated_style", 1);
    // formData.append("other_format", '');
    // formData.append("source", 0);

    apiHelper("setOrderV1", "POST", formData, null)
      .then((res) => {
        if (res.data.status) {
          const token = res.data.data.order_token;
          localStorage.setItem("orderToken", token);

          var redirect = '/order';
          // const loginToken = localStorage.getItem("token");
          // if (loginToken) {
          //   var convertedToken = JSON.parse(loginToken);
          //   const now = new Date()
          //   var decodeToken = convertedToken ? jwtDecode(convertedToken.value) : null
          //   if (decodeToken && decodeToken.exp && (decodeToken.exp * 1000) >= now.getTime() && now.getTime() <= convertedToken.expiry) {
          //     redirect = '/order';
          //   }
          // }

          Router.push(redirect);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));

  }
  const imgNotFound = (e) => {
    e.target.src = DummyProfile;
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    loop: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  var personSchema = ''
  if (props.topWriters && props.topWriters.length > 0) {
    personSchema = `[                                    
      ${props.topWriters.map(element =>
      `{
            "@context": "https://schema.org/",
            "@type": "Person",
            "url": "${process.env.hostBaseUrl}/writers-profile/${element.user_name && (element.user_name).toLowerCase()}",
            "name": "${element.writer_name ? element.writer_name : element.user_name}",
            "description": "${element.description ? (element.description).replace(/"/g, '&quot;') : ''}",
            "nationality": {
              "@type": "Country",
              "name": "${element.location}"
            }
        }`
    )}
    ]`
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: slickCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: hireWriterCss }}></style>

      <Head>
        {personSchema !== '' ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personSchema }} /> : null}
      </Head>

      <section className="hire-writer pb-0">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">
              {props.title ? parse((props.title).toString()) : ''}
            </h2>
            <div className="desc">
              {props.desc}
            </div>
          </div>
        </div>
        <div className="writer-wrpper">
          <div className="container">
            <div className="hire-write-slider" id="hire-write-slider">
              {props.topWriters && props.topWriters.length > 0 ?
                <Slider {...settings}>
                  {props.topWriters.map((info, i) =>
                    <div className="writerBox" key={i}>
                      <div className="writer-img">
                        <img
                          src={info.profile_pic}
                          alt={info.writer_name ? info.writer_name : info.user_name}
                          className="img-fluid"
                          onError={(e) => imgNotFound(e)}
                          width={402}
                          height={250}
                          title={"<" + info.writer_name + "> Top Writer"}
                        />
                      </div>
                      <div className="writerDetail">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="name"><a href={`${process.env.hostBaseUrl}/writers-profile/${(info.user_name).toLowerCase()}`}>{info.writer_name ? info.writer_name : info.user_name}</a></div>
                          <div className="star">
                            <Rating
                              readonly={true}
                              // initialRating={info.review_count}
                              initialRating="4.5"
                              emptySymbol={<Img src="/empty.svg" className="icon" alt="ratingImg" width={18} height={18} />}
                              fullSymbol={<Img src="/full.svg" className="icon" alt="ratingImg" width={18} height={18} />}
                            />
                          </div>
                        </div>
                        <ul className="sub-detail d-flex flex-wrap">
                          <li className="d-flex">
                            <Img src="/excellence.svg" title="Excellence" alt="excellence" width={21} height={21} />
                            <span>{info.completed_order} orders</span>
                          </li>
                          <li className="d-flex">
                            <Img src="/success-badge.svg" title="Success" alt="success-badge" width={21} height={21} />
                            <span>{info.success_rate} Success rate</span>
                          </li>
                          <li className="d-flex">
                            <Img src="/reviews.svg" title="Reviews" width="21" height="21" alt="reviews" />
                            <span>{info.review_count} Reviews</span>
                          </li>
                          <li className="d-flex">
                            <Img src="/degree.svg" title="Degree" width="21" height="21" alt="degree" />
                            <span>Master’s Degree</span>
                          </li>
                        </ul>
                        <div className="text-center">
                          <button onClick={() => redirectUrl(info.user_name)} className="btn secondary-btn inline-button-click w-100">Hire Writer</button>
                        </div>
                      </div>
                    </div>)}
                </Slider> :
                <div className="noReview-found">No writer found</div>}
            </div>
            {props.topWriters && props.topWriters.length > 0 ?
              <div className="text-center viewWriter">
                <Link href={`${process.env.hostBaseUrl}/top-writers`}><a className="btn outlineSecondaryBtn">View All Writers</a></Link>
              </div> : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default HireWriter;
