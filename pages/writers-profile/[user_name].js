import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";

import dynamic from 'next/dynamic';

const Meta = dynamic(() => import('../../components/meta'));

import ShowMoreText from "react-show-more-text";
import Rating from "react-rating";

// API helper
import { ukApiHelper, apiHelper } from "../../helper/apiHelper";
import { jwtDecode } from "../../helper/jwtHelper";

// scss
import writerDetailCss from "../../styles/writer-detail.scss";

// router
import Router from 'next/router';

// Image
import DummyProfile from "../../public/dummy-profile.webp";
import FreeFeature from "../../components/freeFeature";

import Img from "../../components/Common/image";

const WriterDetail = (props) => {

  const router = useRouter();

  // const [data, setData] = useState(null);
  const [reviewList, setReviewList] = useState(props.content.reviews && props.content.reviews);
  const [isAsc, setIsAsc] = useState(false);

  useEffect(() => {
    let username = router.query.user_name;
    if (username == username.toUpperCase()) {
      router.push('/404')
    }

  }, []);

  useEffect(() => {
    if (props.content) {
      // setReviewList(props.content.reviews);
      setIsAsc(!isAsc);
    }
  }, [props.content]);

  // ShowMoreText
  const executeOnClick = (isExpanded) => {
  }

  // imgNotFound
  const imgNotFound = (e) => {
    e.target.src = DummyProfile;
  };

  const sortReview = () => {
    setIsAsc(!isAsc);
  }

  useEffect(() => {
    let rList = reviewList;
    if (isAsc === true) {
      rList.sort((a, b) => (a.rating_number < b.rating_number) ? 1 : -1);
    }
    if (isAsc === false) {
      rList.sort((a, b) => (a.rating_number > b.rating_number) ? 1 : -1);
    }
    setReviewList(rList);
  }, [isAsc]);


  // useEffect(() => {
  //   if ((router.asPath).indexOf('review') > -1) {
  //     let test = document.getElementById('navbar').offsetHeight + 80;
  //     console.log(test);

  //     var element = document.getElementsByClassName('reviews');
  //     var topPos = element.offset().top;

  //     console.log("reviewHeight", topPos);
  //     window.scrollTo(0, 800);
  //   }
  // }, []);

  // storeRightData
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

    apiHelper("setOrderV1", "POST", formData, null)
      .then((res) => {
        if (res.data.status) {
          const token = res.data.data.order_token;
          localStorage.setItem("orderToken", token);

          // var redirect = '/price';
          // const loginToken = localStorage.getItem("token");
          // if (loginToken) {
          //   var convertedToken = JSON.parse(loginToken);
          //   const now = new Date()
          //   var decodeToken = convertedToken ? jwtDecode(convertedToken.value) : null
          //   if (decodeToken && decodeToken.exp && (decodeToken.exp * 1000) >= now.getTime() && now.getTime() <= convertedToken.expiry) {
          //     redirect = '/order';
          //   }
          // }

          Router.push('/order');
        }
      })
      .catch((error) => console.error(`Error: ${error}`));

  }

  var data = props.content && props.content
  var speciality = data.subject_specialization.map((info, i) => info.subject_name)
  var writerSchema = `{
    "@context": "https://schema.org/",
    "@type": "ProfilePage",
    "url": "${process.env.hostBaseUrl}/writers-profile/${data.user_name}",
    "name": "${data.writer_name ? data.writer_name : ''}",
    "image": "${data.profile_pic ? data.profile_pic : ''}",
    "description": "${props.meta.description ? props.meta.description : ''}",
    "specialty": ${JSON.stringify(speciality)}
  }`;
  // console.log(reviewList);

  return (
    <>
      <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} robotText={true} />
      <style dangerouslySetInnerHTML={{ __html: writerDetailCss }}></style>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: writerSchema }} />
      </Head>

      <div className="writerDetail">
        <div className="top-navbar">
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="leftDetail">
                    <div className="whiteBox">
                      <div className="top">
                        <div className="media">
                          <img src={
                            data && data.profile_pic ? data.profile_pic
                              : "./dummy-profile.webp"} onError={imgNotFound} alt="Writer Profile" title="Writer" />
                        </div>
                        <div className="detail">
                          <h1 className="name">
                            {data && data.writer_name ? data.writer_name : data && data.user_name}
                            <Img
                              src="/top-writer/certified-io.svg"
                              alt="certified"
                              title="Certified"
                              className="ms-2"
                              width="15"
                              height="15"
                            />
                          </h1>
                          <p>
                            <b>{data && data.completed_order}</b> projects completed
                          </p>
                          <div className="success-rate d-flex">
                            {data && data.successRate}<span>success rate</span>
                            <div className="rated ms-3">
                              <Img
                                src="/top-writer/rated-io.svg"
                                alt="Top rated"
                                title="Top Rated"
                                className="me-2"
                                width="15"
                                height="15"
                              />
                              Top rated
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 d-block d-md-none">
                        <button className="btn secondary-btn w-100" onClick={() => redirectUrl(data.user_name)}>Hire</button>
                      </div>
                      <div className="otherDetail">
                        <h2 className="name">{`About ${data && data.writer_name ? data.writer_name : data && data.user_name}`}</h2>
                        <ShowMoreText
                          lines={2}
                          more="Read more"
                          less="Read less"
                          className="desc"
                          anchorClass="showText"
                          onClick={executeOnClick}
                          expanded={false}
                          truncatedEndingComponent={"... "}
                        >
                          {data && data.description}
                        </ShowMoreText>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 col-6">
                        <div className="whiteBox details">
                          <span className="text1">{data && data.joined}</span>
                          <span className="text2">Joined us</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="whiteBox details">
                          <span className="text1">{data && data.review_rate}</span>
                          <span className="text2">Review rate</span>
                        </div>
                      </div>
                      <div className="col-md-4 col-12">
                        <div className="whiteBox details">
                          <span className="text1">{data && data.completed_order}</span>
                          <span className="text2">Completed projects</span>
                        </div>
                      </div>
                    </div>
                    <div className="innerTitle">
                      <h3 className="divTitle">Writer’s Sample</h3>
                      <div className="whiteBox writerSampleDetail">
                        <div className="row gx-5">
                          <div className="col-md-8">
                            <div className="sampleDetail">
                              <div className="sampleContent mb-3">
                                <span className="detail1">Paper Type</span>
                                <span className="detail2"> {data && data.writers_paper.paper_name}</span>
                              </div>
                              <div className="sampleContent">
                                <span className="detail1">Style</span>
                                <span className="detail2"> {data && data.writers_paper.format_name}</span>
                              </div>
                              <div className="sampleContent mb-3">
                                <span className="detail1">Subject</span>
                                <span className="detail2"> {data && data.writers_paper.subject_name}</span>
                              </div>
                              <div className="sampleContent">
                                <span className="detail1">Sources</span>
                                <span className="detail2">{data && data.writers_paper.sources}</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <a href={data && data.writers_paper.link} target="_blank" className="sampleImage">
                              <Img
                                src="/top-writer/sampleImage.webp"
                                alt="sampleImage"
                                width="160"
                                height="204"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="innerTitle mb-0 reviews">
                      <h3 className="divTitle">Reviews ({data && data.review_count})</h3>
                      {data && data.review_count > 0 ?
                        <div className="row align-items-center">
                          <div className="col-sm-8 col-9">
                            <div className="d-flex align-items-center">
                              Review Rate
                              <span className="ms-2 me-2 rating">{data && data.review_rate}</span>
                              <div className="rating">
                                <Rating
                                  readonly={true}
                                  initialRating={data && data.review_rate}
                                  emptySymbol={
                                    <Img
                                      src="/empty.svg"
                                      className="icon"
                                      alt="ratingImg" width="16px" height="16px"
                                    />
                                  }
                                  fullSymbol={
                                    <Img
                                      src="/full.svg"
                                      className="icon"
                                      alt="ratingImg"
                                      width={18} height={18}
                                    />
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-3">
                            <div className="text-end">
                              <span className="sortDropdown" onClick={sortReview}>
                                Sort
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="11.031"
                                  height="6.311"
                                  viewBox="0 0 11.031 6.311"
                                  className="ms-2"
                                >
                                  <path
                                    id="Path_605"
                                    data-name="Path 605"
                                    d="M1277.09,8417.86l4.46,4.5,4.45-4.5"
                                    transform="translate(-1276.029 -8416.8)"
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        :
                        <p className="desc mb-0">No reviews</p>
                      }
                      <div className="reviews">
                        {reviewList && reviewList.map(function (list, index) {
                          return (
                            <div className="reviewsBox" key={index}>
                              <div className="whiteBox">
                                <div className="top row m-0">
                                  <div className="left col-sm-6 p-0">
                                    <h4 className="name">
                                      {list.customer_no} <span>({list.total_orders} order)</span>
                                    </h4>
                                    <span className="text">{list.addedon}</span>
                                  </div>
                                  <div className="text-end col-sm-6 p-0">
                                    <div className="mb-2 rating">
                                      <Rating
                                        readonly={true}
                                        initialRating={list.rating_number}
                                        emptySymbol={
                                          <Img
                                            src="/empty.svg"
                                            className="icon"
                                            alt="ratingImg"
                                            width="16"
                                            height="16"
                                          />
                                        }
                                        fullSymbol={
                                          <Img
                                            src="/full.svg"
                                            className="icon"
                                            alt="ratingImg"
                                            width={18} height={18}
                                          />
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                {list.remark !== '' ?
                                  <p className="reviews">
                                    {list.remark}
                                  </p> :
                                  null}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="rightDetail">
                    <div className="top">
                      <div className="media">
                        <img src={
                          data && data.profile_pic ? data.profile_pic
                            : "./dummy-profile.webp"} onError={imgNotFound} title="Profile" alt="Writer Profile" />
                      </div>
                      <div className="detail">
                        <h3 className="name">{data && data.writer_name ? data.writer_name : data && data.user_name}</h3>
                        <p className="success-rate">
                          {data && data.successRate}<span>success rate</span>
                        </p>
                      </div>
                    </div>
                    <div className="otherDetail">
                      <h4 className="text mb-3">You also get:</h4>
                      <ul>
                        <li>Any-style formatting</li>
                        <li>Free title &amp; bibliography pages</li>
                        <li>Unlimited revision guarantee</li>
                        <li>24/7 phone &amp; chat support</li>
                      </ul>
                      <div className="mt-4 d-md-block d-none">
                        <button className="btn secondary-btn w-100" onClick={() => redirectUrl(data.user_name)}>Hire</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FreeFeature />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {

  let username = context.params.user_name;
  const DEFAULT_META = process.env.defaultMeta
  const res1 = await ukApiHelper(`seoV1?page=writers-profile&writer_id=${(username)}`, 'GET', null, null)
  const meta = res1.data.status ? res1.data.data : DEFAULT_META

  if (username === username.toUpperCase()) {
    return {
      notFound: true,
    }
  }
  else {

    const resContent = await ukApiHelper(`writerDetailV1`, 'POST', { "writer_id": (context.params.user_name) }, null)
    const content = resContent.data.status ? resContent.data.data : null

    return {
      props: {
        meta,
        content
      }
    }
  }
}

export default WriterDetail;
